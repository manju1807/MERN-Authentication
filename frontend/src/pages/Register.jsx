import { useState } from 'react'; // Import React
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const RegisterUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post('/register', { name, email, password });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({
          name: '',
          email: '',
          password: '',
        });
        toast.success('Logged Successfully, Welcome to Register');
        navigate('/');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="container mx-auto mt-4">
        <div className="bg-gray-300 p-4 rounded-lg">
          <form method="post" onSubmit={RegisterUser}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-400"
                required
              />
            </div>
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
            <button type="submit" className="bg-green-300 p-2 ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
