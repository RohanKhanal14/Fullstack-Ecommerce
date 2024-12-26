import { ChangeEvent, useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(login);
  };

  return (
    <div className="login">
      <main>
        <div>
          <form onSubmit={onSubmitHandler}>
            <h1>Login</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={login.email}
              onChange={changeHandler}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={login.password}
              onChange={changeHandler}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
