import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to EntryPoint</h1>
      <p>
        Please <Link to="/login">Login</Link> or <Link to="/signup">Register</Link> to continue.
      </p>
    </div>
  );
}
