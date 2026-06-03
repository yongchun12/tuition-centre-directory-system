"use server";

import dbConnect from "@/lib/db";
import { TuitionCentre } from "@/models/TuitionCentre";
import { revalidatePath } from "next/cache";

export async function approveCentreAction(centreId: string) {
    if (!centreId) {
        throw new Error("Missing centreId");
    }

    await dbConnect();

    const updated = await TuitionCentre.findByIdAndUpdate(
        centreId,
        { status: "approved" },
        { new: true }
    );

    if (!updated) {
        throw new Error("Centre not found");
    }

    // Revalidate the admin dashboard so the list updates instantly
    revalidatePath("/dashboard/admin");
    // Also revalidate the centres listing page so it shows up publicly
    revalidatePath("/centres");
}

export async function rejectCentreAction(centreId: string) {
    if (!centreId) {
        throw new Error("Missing centreId");
    }

    await dbConnect();

    // For a rejection, we could delete it, or mark it as rejected
    // The schema allows "status: pending/approved". Let's delete it or mark it 'rejected'.
    // Let's delete it for simplicity in the prototype
    const deleted = await TuitionCentre.findByIdAndDelete(centreId);

    if (!deleted) {
        throw new Error("Centre not found");
    }

    revalidatePath("/dashboard/admin");
}
