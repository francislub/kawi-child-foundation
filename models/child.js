import mongoose from "mongoose";

const ChildSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  levelOfNeed: { type: String, required: true },
  grade: { type: String, required: true },
  donations: { type: Number, required: true },
  photo: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const childModel = mongoose.models.Child || mongoose.model("Child", ChildSchema);

export default childModel;