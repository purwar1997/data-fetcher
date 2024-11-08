import { useState, useEffect } from 'react';
import Card from './components/Card';
import ButtonGroup from './components/ButtonGroup';
import { getUser } from './utils';

export default function App() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const getListOfUsers = async () => {
      let listOfUsers = JSON.parse(localStorage.getItem('users'));

      if (!listOfUsers) {
        const user = await getUser();
        listOfUsers = [...users, user];
        localStorage.setItem('users', JSON.stringify(listOfUsers));
      }

      setUsers(listOfUsers);
    };

    getListOfUsers();
  }, []);

  if (!users.length) {
    return;
  }

  return (
    <>
      <Card users={users} index={index} />
      <ButtonGroup users={users} setUsers={setUsers} index={index} setIndex={setIndex} />
    </>
  );
}
