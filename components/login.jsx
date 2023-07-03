import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL, userEmail, userPassword } from '../util/login';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const Login = () => {
  const [incorrect, setIncorrect] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();

    if (
      emailRef.current?.value !== userEmail ||
      passwordRef.current?.value !== userPassword
    ) {
      setIncorrect(true);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          ApplicationID: 'test',
          SecretKey: 'test',
          Email: emailRef.current?.value,
          Password: passwordRef.current?.value,
        }),
        redirect: 'follow',
      });
      const result = await response.text();
      navigate('/dashboard');
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <section className="container">
      <div className="login">
        <p>🏡💹📊</p>
        <h1>Welcome Back;</h1>
        <form id="form" onSubmit={submitHandler}>
          <label htmlFor="email">
            Email or Mobile no
            <input
              ref={emailRef}
              type="text"
              className="login-email"
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <div>
              <input ref={passwordRef} type="password" required />
            </div>
          </label>
          {incorrect && <p>*Incorrect Login details</p>}
          <Link href="/">Forgot password?</Link>
          <button type="submit">Login</button>
        </form>
        <p className="sign-up">
          Don't have an account, <Link href="/">Signup</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
