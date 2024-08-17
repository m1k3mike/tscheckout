import * as React from "react";
import { iUsers } from "./types/types";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UserItemPage: React.FC = () => {
  const [user, setUser] = React.useState<iUsers | null>(null);
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (params.id) {
      fetchUser();
    }
  }, [params.id]);

  async function fetchUser() {
    try {
      const response = await axios.get<iUsers>(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );
      setUser(response.data);
    } catch (e) {
      alert(`Failed to fetch user: ${e}`);
    }
  }

  return (
    <div>
      <button onClick={() => navigate("/users")}>Back</button>
      <h1>Страница Пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} . {user?.address.street} . {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
