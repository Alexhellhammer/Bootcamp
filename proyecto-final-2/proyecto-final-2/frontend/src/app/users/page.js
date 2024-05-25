import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api/backend';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await fetchData('/users');
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.firstname} {user.lastname}</li>
        ))}
      </ul>
    </div>
  );
}
