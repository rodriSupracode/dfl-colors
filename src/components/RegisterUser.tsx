"use client";

import { useState } from "react";

export default function RegisterUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Usuario registrado con éxito.");
        setUsername("");
        setEmail("");
      } else {
        setMessage(data.error || "❌ Error al registrar el usuario.");
      }
    } catch {
      setMessage("❌ Error de conexión con el servidor.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Correo electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit">Registrar</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
