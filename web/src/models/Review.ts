import mongoose, { Schema, Document, Model } from "mongoose";

export interface IReview extends Document {
  userId: mongoose.Types.ObjectId;
  centreId: mongoose.Types.ObjectId;
  rating: number;
  comment: string;
  sentimentScore: "positive" | "neutral" | "negative";
  confidence: number;
  createdAt: Date;
}

const ReviewSchema: Schema<IReview> = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    centreId: { type: Schema.Types.ObjectId, ref: "TuitionCentre", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    sentimentScore: { type: String, enum: ["positive", "neutral", "negative"] },
    confidence: { type: Number },
  },
  { timestamps: true }
);

export const Review: Model<IReview> = mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);
