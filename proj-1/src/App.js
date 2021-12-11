import React from "react";
import {} from "react-bootstrap";
import "./App.css";
import ChatBox from "./components/ChatBox";
import SideNavBar from "./components/SideNavBar";
import Tabs from "./components/Tabs";

function App() {
  return (
    <React.Fragment>
      <SideNavBar />
      <Tabs />
      <ChatBox />
    </React.Fragment>
  );
}
export default App;
