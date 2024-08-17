import * as React from "react";
import { iUsers } from "./types/types";
interface userItemProps {
  user: iUsers;
  onClick: (user: iUsers) => void;
}

const UserItem: React.FC<userItemProps> = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      key={user.id}
      style={{
        margin: "5px",
        padding: "15",
        border: "1px solid grey",
        background: "lightblue",
      }}
    >
      {user.id}.{user.name}: Проживает в городе {user.address.city}, На улице{" "}
      {user.address.street}
    </div>
  );
};

export default UserItem;
