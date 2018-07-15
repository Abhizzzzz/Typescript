//base class
class Youtube{
    //youtube's main class
}
//derived class
class YoutubeVideoPage extends Youtube{
    //properties
    videoTitle : String;
    videoViews : number;
    videoLikes : String;
    videoDislikes : String;
    channelName : String;
    videoPublishDate : String;
    channelSubscribers : String;
    videoDuration : String;
    commenterName : String[];
    commentTime : String[];
    comment : String[];
    //constructor
    constructor( videoTitle : String,videoViews : number,videoLikes : String,videoDislikes : String,
        channelName : String,videoPublishDate : String,channelSubscribers : String,videoDuration : String,
        commenterName : String[],commentTime : String[],comment : String[]){
        super();
        this.videoTitle = videoTitle;
        this.videoViews = videoViews;
        this.videoLikes = videoLikes;
        this.videoDislikes = videoDislikes;
        this.channelName = channelName;
        this.videoPublishDate = videoPublishDate;
        this.channelSubscribers = channelSubscribers;
        this.videoDuration = videoDuration;
        this.commenterName = commenterName;
        this.commentTime = commentTime;
        this.comment = comment;
    }
    //functions
    getVideoTitle = () =>{
        return this.videoTitle;
    }
    getVideoViews = () =>{
        return this.videoViews;
    }
    getVideoLikes = () =>{
        return this.videoLikes;
    }
    getVideoDislikes = () =>{
        return this.videoDislikes;
    }
    getChannelName = () =>{
        return this.channelName;
    }
    getVideoPublishDate = () =>{
        return this.videoPublishDate;
    }
    getChannelSubscribers = () =>{
        return this.channelSubscribers;
    }
    getVideoDuration = () =>{
        return this.videoDuration;
    }
    getComment = () =>{
        let num : number = 0;
        let len: number = this.comment.length;
        //for loop to display all comments by commenter,time and comments
        for(num;num<len;num++){
            console.log("Comment "+(num+1));
            console.log("Name:"+this.commenterName[num]);
            console.log("Time:"+this.commentTime[num]);
            console.log("Comment:"+this.comment[num]);
        }
    }
    getNextVideo(){
        //logic of next video
    }
}
//creating object
let despacitoSong = new YoutubeVideoPage("Luis Fonsi-Despacito ft. Daddy Yankee",500508000,"8957k","478945k",
"Lous Fonsi Official","Oct 13,2016","890078k","5.07 mins",["Ashish","Reema"],["25 days ago","30 days ago"],
["Awesome Song","Nice music"]);
//calling functions with despacitoSong's object
console.log("Title:"+despacitoSong.getVideoTitle());
console.log("Views:"+despacitoSong.getVideoViews());
console.log("Likes:"+despacitoSong.getVideoLikes());
console.log("Dislikes:"+despacitoSong.getVideoDislikes());
console.log("Channel Name:"+despacitoSong.getChannelName());
console.log("Publish On:"+despacitoSong.getVideoPublishDate());
console.log("Subscribers:"+despacitoSong.getChannelSubscribers());
console.log("Duration:"+despacitoSong.getVideoDuration());
despacitoSong.getComment();