import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import ButtonGroup from './components/ButtonGroup';

export default function App() {
  const [users, setUsers] = useState([{}]);
  const [index, setIndex] = useState(0);

  const fetchUsers = async () => {
    const localUsers = JSON.parse(localStorage.getItem('users'));

    if (localUsers) {
      setUsers(localUsers);
    } else {
      const response = await axios.get(
        'https://randomuser.me/api/?inc=name,location,email,dob,phone,picture'
      );

      const user = response.data.results[0];
      setUsers([user]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <>
      <Card users={users} index={index} />
      <ButtonGroup users={users} setUsers={setUsers} index={index} setIndex={setIndex} />
    </>
  );
}
