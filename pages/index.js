import { useEffect, useState } from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default  function UsersPage() {
  const [users, setUsers] = useState([]);

  // const data = prisma.user.create({
  //   data: {
  //     name: "John Doe"
  //   }
  // });

  

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedUsers = await prisma.user.findMany();
        console.log(fetchedUsers);
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.createdAt.toString()}</td>
              <td>{user.updatedAt.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
