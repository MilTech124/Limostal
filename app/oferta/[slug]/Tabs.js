"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function TabsComponent({ accessories }) {
  const [activeTab, setActiveTab] = useState(accessories[0]?.key || "");
  
  // Find the active accessory
  const activeAccessory = accessories.find(acc => acc.key === activeTab) || accessories[0];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center mb-8">
        {accessories.map((accessory) => (
          <button
            key={accessory.key}
            onClick={() => setActiveTab(accessory.key)}
            className={`
              relative px-6 py-3 mx-2 my-2 rounded-md font-medium transition-all duration-300
              ${activeTab === accessory.key 
                ? "text-sky-600 bg-white shadow-md" 
                : "text-gray-600 hover:text-sky-500 hover:bg-white/50"}
            `}
          >
            {accessory.title}
            {activeTab === accessory.key && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {activeAccessory.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {activeAccessory.description}
              </p>
            </div>
            
            {/* Images */}
            <div className="md:w-1/2 bg-gray-50 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                {activeAccessory.image ? (
                  <div className="relative rounded-lg overflow-hidden shadow-md h-64 md:h-full">
                    <Image
                      src={activeAccessory.image}
                      alt={`${activeAccessory.title} - zdjęcie 1`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="rounded-lg bg-gray-200 flex items-center justify-center h-64 md:h-full">
                    <span className="text-gray-500">Brak zdjęcia</span>
                  </div>
                )}
                
                {activeAccessory.image2 ? (
                  <div className="relative rounded-lg overflow-hidden shadow-md h-64 md:h-full">
                    <Image
                      src={activeAccessory.image2}
                      alt={`${activeAccessory.title} - zdjęcie 2`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="rounded-lg bg-gray-200 flex items-center justify-center h-64 md:h-full">
                    <span className="text-gray-500">Brak zdjęcia</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TabsComponent;
