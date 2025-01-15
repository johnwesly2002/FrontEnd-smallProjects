import React,{useState} from "react";
import "./Tabsstyles.css";

const TabsComponent = () => {
    const [View, setView] = useState("Person");
  return (
    <div style={{ display: 'flex',justifyContent:'center', alignItems: 'center', flexDirection: 'column'}}>
        <h1>Tabs Component</h1>
      <div style={{ display: "flex", flexDirection: "row", borderBottom: "1px solid grey" }}>
        <button className="button" onClick={() => setView("Person")} >
          Person
        </button>
        <button  className="button" onClick={() => setView("Address")} >
          Address
        </button>
      </div>
      {View == "Person" ? (
        <div style={{display: 'flex', flexDirection: 'column', width: 200}}>
        <span>Name: Johnwesly</span>
        <span>Gender: Male</span>
        <span>Age: 22</span>
        </div>
      ) : (
        <div style={{display: 'flex', flexDirection: 'column', width: 200}}>
        <span>City: AntarvediPalem</span>
        <span>State: Andhra Pradesh</span>
        <span>Pincode: 533252</span>
        </div>
      )}
    </div>
  );
};

export default TabsComponent;
