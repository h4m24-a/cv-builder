import React from "react";

const HomePage = () => {
    return (
        <div className="flex h-screen">
          {/* Left Card */}
          <div className="flex-1 bg-white p-8">
            {/* left card content */}
            <div className="p-4 rounded border border-gray-300">
              <h2 className="text-2xl font-semibold">Page 1</h2>
              {/* Your content for the first card */}
            </div>
          </div>
    
          {/* Right Card */}
          <div className="flex-1 bg-white p-8">
            {/* Your right card content */}
            <div className="p-4 rounded border border-gray-300">
              <h2 className="text-2xl font-semibold">Page 2</h2>
              {/* Your content for the second card */}
            </div>
          </div>
        </div>
      );
    };

export default HomePage;
