import { NextResponse } from "next/server";
import { isNucleusError } from "@techsolace-studios/nucleus-sdk";
import { nucleusWrite } from "@/lib/nucleus";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.category !== "string" ||
    typeof body.name !== "string" ||
    typeof body.phone !== "string" ||
    !body.category ||
    !body.name ||
    !body.phone
  ) {
    return NextResponse.json({ error: "category, name and phone are required" }, { status: 400 });
  }

  try {
    const entry = await nucleusWrite.create(
      "inquiries",
      {
        category: body.category,
        name: body.name,
        phone: body.phone,
        preferredDate: typeof body.preferredDate === "string" && body.preferredDate ? body.preferredDate : undefined,
        status: "New",
      },
      "published"
    );
    return NextResponse.json({ id: entry.id }, { status: 201 });
  } catch (error) {
    if (isNucleusError(error)) {
      return NextResponse.json({ error: error.message }, { status: error.status >= 400 ? error.status : 502 });
    }
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
