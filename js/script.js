/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [
    "ROAD LESS TAKEN", 
    "Dance!", 
    "Burn My Dread", 
    "unbreakable tie", 
    "MAZE OF LIFE", 
    "GROOVY", 
    "Pursuing My True Self", 
    "Our Moment", 
    "Wake Up, Get Up, Get Out There", 
    "More Than One Heart", 
    "P3 Fes"
];

// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = [
    "Persona Q2.jpg", 
    "Persona 4 DAN.jpg", 
    "Persona 3.jpg", 
    "Persona 2.jpg", 
    "Persona Q.jpg", 
    "Persona 5 DIS.png", 
    "Persona 4.jpg", 
    "Persona 3 DIM.png", 
    "Persona 5.png", 
    "P3 Movie.jpg", 
    "Persona 3 FES.jpg"
];

var artists = [
    "Lyn, Shihoko Hirata, Yumi Kawamura, Lotus Juice", 
    "Shihoko Hirata, Lotus Juice", 
    "Yumi Kawamura", 
    "Asami Izawa, Lotus Juice", 
    "Shihoko Hirata, Yumi Kawamura", 
    "Lyn", 
    "Shihoko Hirata", 
    "Yumi Kawamura, Lotus Juice", 
    "Lyn", 
    "Yumi Kawamura",
    "Yumi Kawamura, Lotus Juice"
];

var games = [
    "Persona Q2: New Cinema Labyrinth",
    "Persona 4: Dancing All Night",
    "Persona 3",
    "Persona 2: Innocent Sin",
    "Persona Q: Shadow Of The Labyrinth",
    "Persona 5: Dancing In Starlight",
    "Persona 4",
    "Persona 3: Dancing In Moonlight",
    "Persona 5",
    "Persona 3 The Movie #1: Spring of Birth",
    "Persona 3 FES"
];
    
var song_lengths = [
    "4:19", 
    "3:49", 
    "4:39", 
    "3:55", 
    "4:24", 
    "3:42", 
    "3:06", 
    "3:35", 
    "4:39", 
    "5:21", 
    "1:30"
];

var links = [
    "https://www.youtube.com/watch?v=9_Q2gb8ZvDE", 
    "https://www.youtube.com/watch?v=p3jw89oIjmQ", 
    "https://www.youtube.com/watch?v=kjV13aPYNhg", 
    "https://www.youtube.com/watch?v=eAarVmqJwNw", 
    "https://www.youtube.com/watch?v=UH5ZwAuuuIY", 
    "https://www.youtube.com/watch?v=rYuHfNH8avY", 
    "https://www.youtube.com/watch?v=0F-XzhAMFAM", 
    "https://www.youtube.com/watch?v=iENuOSfvGaE", 
    "https://www.youtube.com/watch?v=ZMvzNQ2Itqg", 
    "https://www.youtube.com/watch?v=KpzZilTgj1I", 
    "https://www.youtube.com/watch?v=5SLd2VaIvJw"
];

function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    if($("#song").val() != "" && $("#song").val() != "" && $("#song").val() != "" && $("#song").val() != "" && $("#song").val()!= ""){
        songs.push($("#song").val());
        artists.push($("#artist").val());
        images_links.push($("#image").val());
        song_lengths.push($("#length").val());
        links.push($("#link").val());
        games.push($("#game").val());
    }
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    $("#games").empty();
}

function displaySongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>");
    });
    
    images_links.forEach(function(image) {
        $("#images").append("<img src='" + image + "'>");
    });
    
    artists.forEach(function(artist) {
        $("#artists").append("<p>" + artist + "</p>");
    });
    
    song_lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>");
    });
    
    links.forEach(function(link) {
        $("#links").append("<a href='" + link + "'>Listen Here</a>")
    });
    games.forEach(function(game) {
        $("#games").append("<p>from " + game + "</p>")
    });
}

$("#add").click(function() {
    var songName = $("#song").val();
    var artistName = $("#artist").val();
    var imageLink = $("#image").val();
    var songLength = $("#length").val();
    var songLink = $("#link").val();
    var game = $("#game").val();
    
    songs.push(songName);
    images_links.push(artistName);
    artists.push(imageLink);
    song_lengths.push(songLength);
    links.push(songLink);
    games.push(game);

    emptySongInfo();
    displaySongInfo();
    
});


emptySongInfo();
displaySongInfo();