import axios from 'axios';
import Button from './Button';

export default function ButtonGroup({ users, setUsers, index, setIndex }) {
  const handlePrevious = () => {
    setIndex(index - 1);
  };

  const handleNext = async () => {
    if (users[index + 1]) {
      setIndex(index + 1);
    } else {
      const response = await axios.get(
        'https://randomuser.me/api/?inc=name,location,email,dob,phone,picture'
      );

      const user = response.data.results[0];
      setUsers([...users, user]);
      setIndex(index + 1);
    }
  };

  const handleReset = () => {
    setIndex(0);
  };

  return (
    <div className="btn-group">
      {index > 0 && <Button onClick={handlePrevious}>Previous</Button>}
      <Button onClick={handleNext}>Next</Button>
      {index > 0 && <Button onClick={handleReset}>Reset</Button>}
    </div>
  );
}
