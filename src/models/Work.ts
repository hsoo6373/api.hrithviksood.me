import mongoose, { Schema, Document } from "mongoose";
import { ITag } from './Tag';
import Link from './Link';

export interface IBlog extends Document {
  title: string;
  purpose: string;
  // TODO: Create new model for the tags and links
  tags: Array<ITag['_id']>;
  text: string;
  links: Array<Link>;
  video?: string;
}

const BlogSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },

  purpose: {
    type: String,
    required: true
  },

  tags: [{ 
    type: Schema.Types.ObjectId
  }],

  text: {
    type: String,
    required: true
  },

  links: [{
    type: Link
  }],
  
  video: String,
});

// Export the model and return the IBlog interface
export default mongoose.model<IBlog>("Blog", BlogSchema);
