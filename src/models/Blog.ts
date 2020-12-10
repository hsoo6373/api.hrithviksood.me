import mongoose, { Schema, Document } from "mongoose";
import Image from "./Image";
import Link from "./Link";

export interface IBlog extends Document {
  title: string;
  date: Date;
  location: string;
  text: string;
  links: Array<Link>;
  image: Image;
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

  links: [Link],
  
  image: [Image]
});

// Export the model and return the IBlog interface
export default mongoose.model<IBlog>("Blog", BlogSchema);
