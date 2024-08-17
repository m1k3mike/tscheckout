import * as React from "react";
import { iUsers } from "./types/types";
import List from "./List";
import UserItem from "./userItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserPage: React.FC = () => {
  const [users, setUsers] = React.useState<iUsers[]>([]);
  const navigateToUser = useNavigate();

  React.useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<iUsers[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: iUsers) => (
        <UserItem
          onClick={(user) => navigateToUser("/users/" + user.id)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};

export default UserPage;
