import mongoose, { Schema, Document } from "mongoose";
import Image from './Image';
import Link from "./Link";

export interface IPhoto extends Document {
    title: string,
    location: string,
    links: Array<Link>,
    date: Date,
    image: Image
}

const PhotoSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    links: [{
        type: Link
    }],

    date: {
        type: Date,
        default: Date.now
    },

    Image: {
        type: Image,
        required: true
    }
});

export default mongoose.model<IPhoto>("Photo", PhotoSchema);