import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Hide tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your transport services. Could you please provide more information?"
    );
    window.open(`https://wa.me/27788686706?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 animate-bounce">
          <div className="bg-white rounded-lg shadow-large p-3 max-w-xs relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
            >
              <X className="h-3 w-3 text-gray-600" />
            </button>
            <p className="text-sm text-gray-800 pr-4">
              Need quick assistance? Chat with us on WhatsApp!
            </p>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="whatsapp-float group relative overflow-hidden"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Button content */}
        <div className="relative z-10 flex items-center justify-center">
          <MessageCircle className="h-6 w-6" />
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
      </button>
    </div>
  );
};

export default WhatsAppFloat;