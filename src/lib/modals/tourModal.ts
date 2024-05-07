import mongoose, { models } from "mongoose";

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const Tour = models.Tour || mongoose.model("Tour", tourSchema);

export default Tour;
