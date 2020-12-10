// Image object for each Blog, Work and Photograph
// With the appropriate image url and caption

export default class Image {
    url: string;
    caption: string;

    constructor(url: string, caption: string) {
        this.url = url;
        this.caption = caption;
    }
}