import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['videos']
})

export class PlaylistComponent{
    //displays all the videos  
    onSelect(vid:Video){
        // console.log(JSON.stringify(vid.videoCode));
        var vidId = JSON.stringify(vid.id);
        // document.getElementById("myVid").innerHTML = '<iframe width="420" height="315" [src]="' + "'https://www.youtube.com/embed/'" + vidCode + '"></iframe>'
        document.getElementById(vidId).innerHTML ='<iframe width="420" height="315" src="'+'https://www.youtube.com/embed/' + vid.videoCode + '"></iframe>';
    }
}