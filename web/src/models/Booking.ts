import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBooking extends Document {
  studentId: mongoose.Types.ObjectId;
  centreId: mongoose.Types.ObjectId;
  message: string;
  status: "pending" | "responded" | "closed";
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema: Schema<IBooking> = new Schema(
  {
    studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    centreId: { type: Schema.Types.ObjectId, ref: "TuitionCentre", required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ["pending", "responded", "closed"], default: "pending" },
  },
  { timestamps: true }
);

export const Booking: Model<IBooking> = mongoose.models.Booking || mongoose.model<IBooking>("Booking", BookingSchema);
