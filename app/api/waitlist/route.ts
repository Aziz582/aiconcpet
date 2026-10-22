import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const waitlistFile = path.join(dataDir, "waitlist.json");

function ensureFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(waitlistFile)) {
    fs.writeFileSync(waitlistFile, JSON.stringify({ subscribers: [] }, null, 2));
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, source = "hero" } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    ensureFile();

    const data = JSON.parse(fs.readFileSync(waitlistFile, "utf-8"));
    const existingIndex = data.subscribers.findIndex(
      (s: { email: string }) => s.email === cleanEmail
    );

    if (existingIndex !== -1) {
      return NextResponse.json({
        message: "You're already on the VIP early access list!",
        alreadySubscribed: true,
        count: data.subscribers.length + 1420,
      });
    }

    const newSubscriber = {
      email: cleanEmail,
      source,
      timestamp: new Date().toISOString(),
    };

    data.subscribers.push(newSubscriber);
    fs.writeFileSync(waitlistFile, JSON.stringify(data, null, 2));

    return NextResponse.json({
      success: true,
      message: "Access granted! You have reserved your early access spot.",
      count: data.subscribers.length + 1420,
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Failed to reserve spot. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    ensureFile();
    const data = JSON.parse(fs.readFileSync(waitlistFile, "utf-8"));
    return NextResponse.json({
      count: data.subscribers.length + 1420,
    });
  } catch {
    return NextResponse.json({ count: 1420 });
  }
}
