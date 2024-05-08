import mongoose, { models } from "mongoose";

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, require: true },
  locationName: { type: String, required: true },
  detailName: { type: String, required: true },
  detailURL: { type: String, required: true },
  rating: { type: Number, required: true },
  url: { type: String, required: true },
  images: [{ type: String, required: true }],
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  tourPlaces: [
    {
      name: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
});

const Tour = models.Tour || mongoose.model("Tour", tourSchema);

export default Tour;
