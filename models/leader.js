import mongoose from "mongoose";

const LeaderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  leaderShipType: { type: String, required: true },
  donations: { type: Number, required: true },
  position: { type: String, required: true },
  photo: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const LeaderModel = mongoose.models.Leader || mongoose.model("Leader", LeaderSchema);

export default LeaderModel;