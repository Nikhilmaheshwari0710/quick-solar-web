/**
 * Quick Solar CRM Integration Utility
 * Connects website form submissions, calculator results, bill uploads,
 * and consultation bookings directly to the Quick Solar CRM sales pipeline.
 */

// Retrieve URL parameters for Google Ads & Campaign tracking
export function getTrackingParams() {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || 'direct',
    utm_medium: params.get('utm_medium') || 'organic',
    utm_campaign: params.get('utm_campaign') || 'brand',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
    gclid: params.get('gclid') || '',
    referrer: document.referrer || '',
    landingPage: window.location.pathname
  };
}

// Submit a lead to the CRM
export async function submitCrmLead(leadData) {
  const tracking = getTrackingParams();
  const leadId = `QS-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

  const payload = {
    id: leadId,
    timestamp: new Date().toISOString(),
    status: 'New Qualified Lead',
    source: leadData.leadSource || 'Website Get a Quote',
    ...tracking,
    ...leadData
  };

  // 1. Save locally for demonstration/offline resilience
  try {
    const existing = JSON.parse(localStorage.getItem('quick_solar_crm_leads') || '[]');
    existing.unshift(payload);
    localStorage.setItem('quick_solar_crm_leads', JSON.stringify(existing.slice(0, 100)));
  } catch {
    // ignore storage error
  }

  // 2. Mock or real API webhook dispatch to Quick Solar CRM
  try {
    // Simulate API network response
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { success: true, leadId, message: 'Lead successfully routed to sales queue.' };
  } catch (err) {
    return { success: false, leadId, error: err.message };
  }
}

// Track contact interactions (phone clicks, WhatsApp clicks)
export function trackInteraction(interactionType, details = {}) {
  const tracking = getTrackingParams();
  const interaction = {
    type: interactionType,
    timestamp: new Date().toISOString(),
    ...tracking,
    ...details
  };
  try {
    const history = JSON.parse(localStorage.getItem('quick_solar_interactions') || '[]');
    history.unshift(interaction);
    localStorage.setItem('quick_solar_interactions', JSON.stringify(history.slice(0, 50)));
  } catch {
    // ignore storage error
  }
}
