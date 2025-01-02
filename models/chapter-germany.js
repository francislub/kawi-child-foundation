import mongoose from "mongoose";

const ChapterGermanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const ChapterGermanyModel = mongoose.models.ChapterGermany || mongoose.model("ChapterGermany", ChapterGermanySchema);

export default ChapterGermanyModel;