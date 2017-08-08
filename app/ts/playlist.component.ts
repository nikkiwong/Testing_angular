import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['videos']
})

export class PlaylistComponent{
    
    private hideElement: boolean = true;
    toggleElement(display:boolean){
        console.log("insidethe toggle")
        if(this.hideElement){
            console.log("hideElement is true")
            this.hideElement = false;
            display = false
            console.log("display is" + display)

        } else{
            console.log("hideElement is false")
            this.hideElement = true;
            display = true;
            console.log("display is" + display)
        }
        return display
    }
    //displays all the videos  
    onSelect(vid:Video){
        // console.log(JSON.stringify(vid.videoCode));
        var vidId = JSON.stringify(vid.id);
        // this.toggleElement()
        console.log("insid onSelect")
        vid.display = this.toggleElement(vid.display)
        // document.getElementById("myVid").innerHTML = '<iframe width="420" height="315" [src]="' + "'https://www.youtube.com/embed/'" + vidCode + '"></iframe>'
        console.log("display inside the onselect:" + vid.display)
        document.getElementById(vidId).innerHTML ='<div><iframe width="420" height="315" src="'+'https://www.youtube.com/embed/' + vid.videoCode + '"></iframe></div>';
    }
}