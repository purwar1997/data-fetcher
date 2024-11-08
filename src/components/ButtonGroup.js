import Button from './Button';
import { getUser } from '../utils';

export default function ButtonGroup({ users, setUsers, index, setIndex }) {
  const handlePrevious = () => setIndex(index - 1);

  const handleNext = async () => {
    if (!users[index + 1]) {
      const user = await getUser();
      const listOfUsers = [...users, user];
      setUsers(listOfUsers);
      localStorage.setItem('users', JSON.stringify(listOfUsers));
    }

    setIndex(index + 1);
  };

  const handleReset = () => setIndex(0);

  return (
    <div className='btn-group'>
      {index > 0 && <Button onClick={handlePrevious}>Previous</Button>}
      <Button onClick={handleNext}>Next</Button>
      {index > 0 && <Button onClick={handleReset}>Reset</Button>}
    </div>
  );
}
