
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";



const Trail = () => {
  return (
    <Tabs>
    <TabList className="today text-center">
      <Tab>
        <button className=" rounded ">TODAY</button>
      </Tab>
      <Tab>
        <button className=" rounded ">UPCOMING</button>
      </Tab>
      <Tab>
        <button className=" rounded ">PAST</button>
      </Tab>
    </TabList>
    <TabPanel>
      <h1>Today</h1>
    </TabPanel>
    <TabPanel>
      <h1>UPCOMING</h1>
    </TabPanel>
    <TabPanel>
      <h1>Past</h1>
    </TabPanel>
  </Tabs>

  );
};

export default Trail;
