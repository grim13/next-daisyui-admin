import { NextResponse } from "next/server";

export async function POST(request:Request) {
  try {
    const {username, password} = await request.json();
    if (!username || !password) {
      return NextResponse.json({ error: "Username and password are required." }, { status: 400 });
    }

    // Simulate saving data to a database or another action
    console.log("Received data:", { username, password });

    return NextResponse.json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error processing form submision", error)
    return NextResponse.json({
      error: "Internal server error"
    }, {
      status: 500
    })
  } 
}

export async function GET(request:Request) {
  const { asd } = await request.json()
  return NextResponse.json({  asd });
}