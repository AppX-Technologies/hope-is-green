import React, { useState } from "react";
import { Tab, Transition } from "@headlessui/react";

const Tabs = ({ tabs }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
      <Tab.List className="flex space-x-1 rounded p-1 border-b bg-purple-400 w-fit px-5">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            className={`px-2 mx-2 py-1 text-sm focus:outline-none text-white border-b-2 ${
              index === tabIndex
                ? "border-gray-600"
                : "border-b-2 border-transparent"
            }`}
          >
            <div className="flex items-center gap-1 font-medium">
              {tab.icon}
              {tab.title}
            </div>
            {/* {index === tabIndex && (
                <div className="absolute inset-x-0 bottom-0 h-px bg-white"></div>
              )} */}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((tab, index) => (
          <Tab.Panel key={index}>
            <Transition
              appear
              show={tabIndex === index}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {tab.content}
            </Transition>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
