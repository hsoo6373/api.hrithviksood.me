import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
    title: string,
    info: string,
    // TODO: Create new model for the tags and links
    tags: string[],
    text: string,
    links: [{
        text: string,
        url: string
    }],
    videoUrl: string
}

const BlogSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    info: String,
    tags: [String],
    text: String,
    links: [{ text: String, url: String }],
    videoUrl: String
});

// Export the model and return the IBlog interface
export default mongoose.model<IBlog>('Blog', BlogSchema);