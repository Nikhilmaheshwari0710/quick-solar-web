import React from 'react';

export default function FloatingNavRail({ onOpenQuote }) {
  return (
    <>
      {/* Floating Bottom Right Action Buttons */}
      <div className="float-cta">
        <a className="call-btn" href="tel:1300969557">
          Call 1300 969 557
        </a>
        <button
          type="button"
          className="quote-btn"
          onClick={() => onOpenQuote && onOpenQuote()}
        >
          Get a Free Quote
        </button>
      </div>
    </>
  );
}

