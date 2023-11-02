import React from "react";
import { useAuthProvider } from "../AuthContext";

function Dropdown() {
  const { searchParams, setSearchParams, order, group, setGroup, setOrder } =
    useAuthProvider();
  return (
    <div className="dropdown" style={{ padding: "16px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ color: "#36454F" }}>Grouping</div>
        <select
          value={group}
          onChange={(e) => {
            setGroup(e.target.value);
            setSearchParams((prev) => {
              prev.set("groupBy", e.target.value);
              return prev;
            });
          }}
          style={{ height: "27px", width: "90px" }}
        >
          <option value="status"> Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ color: "#36454F" }}>Ordering</div>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          style={{ height: "27px", width: "90px" }}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default function Navbar({ clicked, setClicked }) {
  return (
    <>
      <div className="navbar">
        <button
          onClick={() => setClicked(!clicked)}
          style={{
            backgroundColor: "white",
            border: "1px solid #c1bebe",
            borderRadius: "5px",
            padding: "4px 6px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "4px",
              gap: "2px",
            }}
          >
            <img height={"15px"} width={"15px"} src="images.png" alt="menu" />{" "}
            <div>Display</div>
          </div>
        </button>
      </div>
      {clicked && <Dropdown />}
    </>
  );
}
