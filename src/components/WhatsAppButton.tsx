import React from 'react';

const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=%2B41798703420';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat mit Fredy"
        title="WhatsApp Chat mit Fredy"
        className="inline-flex items-center justify-center rounded-full px-5 py-3 bg-gold hover:bg-gold-dark text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        WhatsApp
      </a>
    </div>
  );
};

export default WhatsAppButton;

