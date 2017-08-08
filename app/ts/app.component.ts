import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html' ,
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING; //class variable
    videos:Array<Video> //this array is type Video

    constructor(){
        this.videos = [
            //whenever you want to create a new video object you write new video and whatever other info
            new Video(1, "Nested Components", "f8qBeaGe2S4", "how to write nested components", true),
            new Video(2, "ECMAScript 6 Tutorial", "Jakoi0G8lBg", "Learn how to write ECMAScript 6", true),
            new Video(3, "Node.js Tutorial", "jiSFfpw3Btc", "Node.js Tutorial for Beginners - 3 - Basic Concepts", true)
        ]
    }
}




