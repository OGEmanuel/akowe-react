import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate('/');
  };

  return (
    <section className="container-dash">
      <h1 className="dashboard-header">Dashboard</h1>
      <button onClick={logoutHandler}>Logout</button>
    </section>
  );
};

export default Dashboard;
