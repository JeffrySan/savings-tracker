import React, { useState } from "react";

import { Dashboard } from "./components/Home/Dashboard";
import { Reports } from "./components/Reports/Reports";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, content: <Dashboard />, icon: "", title: "Dashboard" },
    { id: 1, content: <Reports />, icon: "", title: "Reports" },
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-auto">{tabs[activeTab].content}</div>

      <div className="flex bg-gray-100 border-t border-gray-200">
        {tabs.map((tab) => (
          <button key={tab.id} className={`flex-1 py-3 flex flex-col items-center justify-center ${
            activeTab === tab.id ? 'text-blue-600' : 'text-gray-600'
          }`} onClick={() => setActiveTab(tab.id)}>
            <span>{tab.icon}</span>
            <span>{tab.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
