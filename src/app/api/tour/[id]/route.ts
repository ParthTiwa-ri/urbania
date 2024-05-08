import Tour from "@/lib/modals/tourModal";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: String } }
) => {
  try {
    const { id } = params;
    const tour = await Tour.findOne({ slug: id });
    return NextResponse.json(tour);
  } catch (err) {
    return NextResponse.json({ message: (err as Error).message });
  }
};
