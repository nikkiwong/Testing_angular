export class Video {
    //class for videos (to add to the playlist component)
    id:number;
    title:string;
    videoCode:string;
    desc:string;
    display:boolean;

    constructor(id:number,title:string, videoCode:string, desc:string, display:boolean){
        this.id=id;
        this.title=title;
        this.videoCode=videoCode;
        this.desc=desc;
        this.display=display;
    }
}
