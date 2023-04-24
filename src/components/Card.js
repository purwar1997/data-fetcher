import { FaBirthdayCake, FaEnvelope, FaPhoneAlt, FaAddressBook } from 'react-icons/fa';

export default function Card({ users, index }) {
  const user = users[index];

  return (
    <div className="card">
      <img
        className="card-image"
        src={user.picture?.large}
        alt={`${user.name?.first} ${user.name?.last}`}
      />
      <h1 className="card-title">
        {user.name?.first} {user.name?.last}
      </h1>
      <p className="card-text">
        <FaBirthdayCake />
        <span>{user.dob?.date.split('T')[0]}</span>
      </p>
      <p className="card-text">
        <FaEnvelope />
        <span>{user.email}</span>
      </p>
      <p className="card-text">
        <FaPhoneAlt />
        <span>{user.phone}</span>
      </p>
      <p className="card-text">
        <FaAddressBook />
        <span>
          {user.location?.city}, {user.location?.country}
        </span>
      </p>
    </div>
  );
}
