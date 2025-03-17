import { NextResponse } from "next/server";
import pool from "@/utils/db";

export async function POST(request: Request) {
  try {
    const { username, email } = await request.json();

    if (!username || !email) {
      return NextResponse.json(
        { error: "Faltan campos: username o email" },
        { status: 400 }
      );
    }

    const query = `INSERT INTO users (username, email) VALUES ($1, $2) RETURNING id, created_at;`;
    const values = [username, email];

    const result = await pool.query(query, values);

    return NextResponse.json({
      message: "Usuario creado con éxito",
      user: result.rows[0],
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
