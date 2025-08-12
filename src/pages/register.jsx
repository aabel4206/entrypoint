import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: "1rem" }}>
      <h2>Create Account 🆕</h2>
      <form
        onSubmit={handleRegister}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <label>
          Email:
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={loading}
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      {error && (
        <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>
      )}

      <p style={{ marginTop: "1rem" }}>
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          style={{
            background: "none",
            border: "none",
            color: "#4f46e5",
            cursor: "pointer",
            textDecoration: "underline",
            padding: 0,
          }}
          disabled={loading}
        >
          Login here
        </button>
      </p>
    </div>
  );
}