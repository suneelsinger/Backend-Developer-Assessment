
import React, { useEffect, useState } from "react";
import { getUsers, createUser } from "../services/api";

function UserList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const addUser = async () => {
    await createUser({ name, email: `${name}@mail.com` });
    setName("");
    loadUsers();
  };

  return (
    <div>
      <h2>Users</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addUser}>Add</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
