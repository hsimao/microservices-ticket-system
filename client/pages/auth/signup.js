import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

function signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  const renderError = () => {
    return errors.length > 0 ? (
      <div className="alert alert-danger">
        <h4>Ooops...</h4>
        <ul className="my-0">
          {errors.map((err, index) => (
            <li key={index}>{err.message}</li>
          ))}
        </ul>
      </div>
    ) : null;
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <div className="form-group">
        <label>Email Address</label>
        <input
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {errors}

      <button className="btn btn-primary" type="submit">
        Sign Up
      </button>
    </form>
  );
}

export default signup;
