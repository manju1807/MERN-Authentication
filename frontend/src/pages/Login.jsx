import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const { data, setData } = useState({
    email: '',
    password: '',
  });

  const LoginUser = (e) => {
    e.preventDefault();
    axios.get('/');
  };

  return (
    <div>
      <div className="mx-auto bg-gray-300">
        <form method="post" action="/Login" onSubmit={LoginUser}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
