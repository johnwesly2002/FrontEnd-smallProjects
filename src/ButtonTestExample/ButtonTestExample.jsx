import React from "react";

export default function ButtonTestExample({handleClick, buttonName}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        data-testid="button"
        style={{
          border: "none",
          backgroundColor: "greenyellow",
          height: 50,
          width: 200,
          fontSize: 20,
          cursor: "pointer",
          borderRadius: '5px'
        }}
        onClick={handleClick}
      >
        {buttonName}
      </button>
    </div>
  );
}
