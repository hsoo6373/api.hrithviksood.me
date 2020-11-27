import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  date: Date;
  location: string;
  text: string;
  links: [
    {
      text: string;
      url: string;
    }
  ];
}

const BlogSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: String,
  text: String,
  links: [
    {
      text: String,
      url: String,
    },
  ],
});

// Export the model and return the IBlog interface
export default mongoose.model<IBlog>("Blog", BlogSchema);
