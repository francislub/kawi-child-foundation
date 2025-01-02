import mongoose from "mongoose";

const ChapterSwitzerlandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const ChapterSwitzerlandModel = mongoose.models.ChapterSwitzerland || mongoose.model("ChapterSwitzerland", ChapterSwitzerlandSchema);

export default ChapterSwitzerlandModel;