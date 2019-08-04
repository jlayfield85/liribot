require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var spotify = require('spotify');
 
var getArtistNames = function(artist){
    return artist.name
}
var getMeSpotify = function(songName) {


spotify.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    
    var songs = data.tracks.items;
    for (var i=0; i<songs.length; i++){
        console.log(i);
        console.log('artist(s): ') + songs[i].artists.map(getArtistsNames);
        console.log('song name: ' + songs[i].name);
        console.log('preview.song: '+ songs[i].preview_url);
        console.log('album: ' + songs[i].album.name);
        console.log('--------------------------------------';)
    }



    var pick = function(caseData, functionData) {
    switch(caseData) {
        case 'spotify-this-song':
            getMeSpotify(functionData);
                break;
            default:
        console.log('LIRI does not know that');            
    }
}

});
}

runThis(process.argv[2], process.argv[3]);