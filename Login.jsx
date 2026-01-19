import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <h2>Manager Login</h2>
      <input placeholder="Username" />
      <input placeholder="Password" type="password" />
      <button onClick={login}>Login</button>
    </div>
  );
}
