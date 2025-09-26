import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    // Full screen overlay eka
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50/70 dark:bg-gray-900/90 backdrop-blur-sm z-50">
      
      {/* Container for the Dots */}
      <div className="flex space-x-2 p-4">
        
        {/* Dot 1 */}
        <div className="h-4 w-4 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        
        {/* Dot 2 */}
        <div className="h-4 w-4 bg-yellow-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        
        {/* Dot 3 */}
        <div className="h-4 w-4 bg-green-500 rounded-full animate-bounce"></div>

      </div>
      
    </div>
  );
};

// Vēnas Karanna ōne Dēh:
// 1. Oya kamathi nam aluth <p> tag ekak dala "Loading..." kiyala danna puluwan.
// 2. 'bg-red-500', 'bg-yellow-500', hā 'bg-green-500' kiyana colors, 
//    Fredy's site eke pradhāna pāta walata wenas karanna.