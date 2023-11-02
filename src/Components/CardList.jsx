import React from "react";
import Tiles from "./Tiles";
import { useAuthProvider } from "../AuthContext";

export default function CardList({ data }) {
  const { cardData, group } = useAuthProvider();
  const usertickets = cardData?.tickets?.filter(
    (item) => item.userId === data.user_id
  );
  const statustickets = cardData?.tickets?.filter(
    (item) => item.status === data
  );
  const priortickets = cardData?.tickets?.filter(
    (item) => item.priority === data.id
  );

  const userCount = usertickets ? usertickets.length : 0;
  const statusCount = statustickets ? statustickets.length : 0;
  const priorCount = priortickets ? priortickets.length : 0;

  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        flexDirection: "column",
        gap: "20px",

        // width: "15vw",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <img
              src="avatar.png"
              height={"25px"}
              style={{ borderRadius: "50%" }}
              alt="person"
            />
            <div>{group === "status" ? data : data?.name}</div>
            <div style={{ color: "#565551" }}>
              {group === "user"
                ? userCount
                : group === "status"
                ? statusCount
                : priorCount}{" "}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <div>+</div>
            <img src="dots.png" height={"10px"} alt="dot" />
          </div>
        </div>
      </div>

      {group === "user" &&
        usertickets?.map((ticket) => {
          return <Tiles data={ticket} />;
        })}
      {group === "status" &&
        statustickets?.map((ticket) => {
          return <Tiles data={ticket} />;
        })}
      {group === "priority" &&
        priortickets?.map((ticket) => {
          return <Tiles data={ticket} />;
        })}
    </div>
  );
}
