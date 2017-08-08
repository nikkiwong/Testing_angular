import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['videos']
})

export class PlaylistComponent{
    
    private hideElement: boolean = true;
    toggleElement(){
        console.log("insidethe toggle")
        if(this.hideElement){
            console.log("hideElement is true")
            this.hideElement = false;

        } else{
            console.log("hideElement is false")
            this.hideElement = true;
        }
    }
    //displays all the videos  
    onSelect(vid:Video){
        // console.log(JSON.stringify(vid.videoCode));
        var vidId = JSON.stringify(vid.id);
        // this.toggleElement()
        console.log("insid onSelect")
        this.toggleElement()
        // document.getElementById("myVid").innerHTML = '<iframe width="420" height="315" [src]="' + "'https://www.youtube.com/embed/'" + vidCode + '"></iframe>'
        document.getElementById(vidId).innerHTML ='<td><iframe width="420" height="315" src="'+'https://www.youtube.com/embed/' + vid.videoCode + '"></iframe></td>';
    }
}