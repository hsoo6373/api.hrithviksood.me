// Link for every work, blog or photograph
// With the appropriate button text

export default class Link {
    text: string; 
    url: string;

    constructor(text: string, url:string) {
        this.text = text;
        this.url = url;
    }
}