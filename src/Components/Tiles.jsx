import React from "react";

export default function Tiles({ data }) {
  return (
    <div
      className="tiles"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "15px",
        borderRadius: "8px",
        backgroundColor: "white",
        // border: "1px solid grey",

        boxShadow: "5px 5px 5px #aaaaaa",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ color: "#808080" }}>{data.id}</div>
        <img
          src="alien.jpeg"
          alt="green robot"
          style={{
            borderRadius: "50%",
            height: "20px",
            width: "20px",
            border: "1px solid grey",
          }}
        />
        {/* <div
          style={{
            border: "1px solid grey",
            borderRadius: "50%",
            height: "20px",
            width: "20px",
          }}
        ></div> */}
      </div>

      <div style={{ display: "flex", textAlign: "center", color: "#292A34" }}>
        {data.title}
      </div>

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <img src="exclaim.png" height={"22px"} alt="exclaim" />
        <div
          style={{
            color: "#292A34",
            border: "0.5px solid #292A34",
            borderRadius: "3px",
            padding: "3px",
            fontSize: "15px",
          }}
        >
          Feature Request
        </div>
      </div>
    </div>
  );
}
