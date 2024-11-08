import axios from 'axios';

export const getUser = async () => {
  const response = await axios.get(
    'https://randomuser.me/api/?inc=name,location,email,dob,phone,picture'
  );

  const user = response.data.results[0];
  return user;
};
