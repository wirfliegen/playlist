/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Road Less Taken", "Dance!", "Burn My Dread", "unbreakable tie", "MAZE OF LIFE", "GROOVY", "Pursuing My True Self", "Our Moment", "Wake Up, Get Up, Get Out There", "More Than One Heart", "P3 Fes"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = ["Persona Q2.jpg", "Persona 4 DAN.jpg", "Persona 3.jpg", "Persona 2.jpg", "Persona Q.jpg", "Persona 5 DIS.png", "Persona 4.jpg", "Persona 3 DIM", "Persona 5.png", "P3 Movie.jpg", "Persona 3 FES.jpg"];
var artists = ["Lyn, Shihoko Hirata, Yumi Kawamura, Lotus Juice", "Shihoko Hirata, Lotus Juice", "Yumi Kawamura", "Asami Izawa, Lotus Juice", "Shihoko Hirata, Yumi Kawamura", "Lyn", "Shihoko Hirata", "Yumi Kawamura, Lotus Juice", "Lyn", "Yumi Kawamura"];
var song_lengths = ["4:19", "3:49", "4:39", "3:55", "4:24", "3:42", "3:06", "3:35", "4:39", "5:21", "1:30"];
var links = ["https://www.youtube.com/watch?v=9_Q2gb8ZvDE", "https://www.youtube.com/watch?v=p3jw89oIjmQ", "https://www.youtube.com/watch?v=kjV13aPYNhg", "https://www.youtube.com/watch?v=eAarVmqJwNw", "https://www.youtube.com/watch?v=UH5ZwAuuuIY", "https://www.youtube.com/watch?v=rYuHfNH8avY", "https://www.youtube.com/watch?v=0F-XzhAMFAM", "https://www.youtube.com/watch?v=iENuOSfvGaE", "https://www.youtube.com/watch?v=ZMvzNQ2Itqg", "https://www.youtube.com/watch?v=KpzZilTgj1I", "https://www.youtube.com/watch?v=5SLd2VaIvJw"];




   // BELOW Use forEach Loop to display the data from each of your array's in the correct div
   

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}

songs.forEach(function(){
function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    $('#add').click(function() {
    var song = $("#song").val();
    $("#songs").append("<p>" + song + "</p>");

});
}
$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
