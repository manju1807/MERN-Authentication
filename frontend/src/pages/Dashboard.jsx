import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1 className="text-2xl font-bold italic text-center pt-12">Dashboard</h1>
      {!!user && <h2>Hi {user.name}!</h2>}
    </div>
  );
};

export default Dashboard;
