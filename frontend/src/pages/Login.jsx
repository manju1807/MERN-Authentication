import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const LoginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post('/api/login', {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <div className="mx-auto bg-gray-300">
        <form method="post" onSubmit={LoginUser}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-400"
              required
            />
          </div>
          <button type="submit" className="bg-green-300 p-2 m-2 ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
