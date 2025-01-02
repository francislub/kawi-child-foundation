import mongoose from "mongoose";

const ChapterDenmarkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const ChapterDenmarkModel = mongoose.models.ChapterDenmark || mongoose.model("ChapterDenmark", ChapterDenmarkSchema);

export default ChapterDenmarkModel;