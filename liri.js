require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var spotify = require('spotify');
var request = require('request');

var getArtistNames = function(artist){
    return artist.name;
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
        console.log('--------------------------------------');
    }

   var getMeMovie = function(movieName){

   }
   
    request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 
  var jsonData = JSON.parse(body);
  console.log('Title: ' + jsonData.Title);
  console.log('Year: ' + jsonData.Year);
  console.log('Rated: ' + jsonData.Rated);
  console.log('IMDB Rating: ' + jsonData.imdbRating);
  console.log('Country ' + jsonData.Country);
  console.log('Language ' + jsonData.Language);
  console.log('Plot ' + jsonData.Plot);
  console.log('Actors ' + jsonData.Actors);
  console.log('Rotten Tomatoes Rating ' + jsonData.tomatoRating);
  console.log('Rotten Tomatoes URL ' + jsonData.tomatoURL);

});

var doWhatItSays = function() {
fs.readFile('random.txt', 'utf8', function (err, data)  {
    if (err) throw err;
    console.log(data);
  
    var dataArr = data.split(',');
    if (dataArr.length == 2) {
        pick(dataArr[0], dataArr[1]);
    }   else if (dataArr.length ==1){
        pick(dataArr[0]);
    }
});

}


    var pick = function(caseData, functionData) {
    switch(caseData) {
        case 'spotify-this-song':
            getMeSpotify(functionData);
                break;
            case 'movie-this':
                getMeMovie(FunctionData);
            case 'do-what-it-says':
                doWhatItSays();
                break;
            default:
        console.log('LIRI does not know that');            
    }
}

});
}

runThis(process.argv[2], process.argv[3]);