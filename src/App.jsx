import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Dashboard from '../components/dashboard';
import Login from '../components/login';
import './index.css';

const router = createBrowserRouter([
  {
    path: '',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
