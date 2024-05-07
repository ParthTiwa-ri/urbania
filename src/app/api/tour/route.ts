import { connect } from "@/lib/db";
import Tour from "@/lib/modals/tourModal";
import { Error } from "mongoose";

import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();
    const tours = await Tour.find();

    return NextResponse.json(tours);
  } catch (err) {
    return NextResponse.json({ message: (err as Error).message });
  }
};

export const POST = async (req: Request) => {
  try {
    await connect();
    const body = await req.json();

    const newtour = await Tour.create(body);

    return NextResponse.json(newtour);
  } catch (err) {
    return NextResponse.json({ message: (err as Error).message });
  }
};
