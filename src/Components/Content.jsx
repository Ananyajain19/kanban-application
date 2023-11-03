import React, { useState } from "react";
import Navbar from "./Navbar";
import { useAuthProvider } from "../AuthContext";
import CardList from "./CardList";

export default function Content() {
  const [clicked, setClicked] = useState(false);
  const {
    cardData,
    setGroup,
    setOrder,
    group,
    order,
    searchParams,
    setSearchParams,
  } = useAuthProvider();

  const userList = cardData?.users.map((user) => ({
    name: user.name,
    user_id: user.id,
  }));

  const uniqueStatus = cardData?.tickets
    ?.map((ticket) => ticket.status)
    ?.filter((status, index, self) => self.indexOf(status) === index);

  const Priority = [
    { name: "No priority", id: 0 },
    { name: "Low", id: 1 },
    { name: "Medium", id: 2 },
    { name: "High", id: 3 },
    { name: "Urgent", id: 4 },
  ];
  console.log(group);
  return (
    <div>
      <Navbar clicked={clicked} setClicked={setClicked} />
      <div
        className="content-div"
        style={{
          justifyContent: "space-around",
          backgroundColor: "#f4f6f5",
          height: "100vh",
          width: "100%",
          marginTop: "5px",
        }}
      >
        {group === "user" &&
          userList?.map((user) => {
            return <CardList key={user.user_id} data={user} />;
          })}
        {group === "status" &&
          uniqueStatus?.map((user) => {
            return <CardList key={user} data={user} />;
          })}
        {group === "priority" &&
          Priority?.map((user) => {
            return <CardList key={user} data={user} />;
          })}
      </div>
    </div>
  );
}
