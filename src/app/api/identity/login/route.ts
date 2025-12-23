// src/app/api/identity/login/route.ts
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const res = await fetch("http://aptesco.ir/api/Identity/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()

  return NextResponse.json(data, { status: res.status })
}
