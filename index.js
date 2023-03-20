// alert("anurag");
var player1Random=Math.floor((Math.random()*6)+1);
var newsource1="dice"+player1Random+".png"
var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",newsource1);
// document.write(newsource1);

var player2Random=Math.floor((Math.random()*6)+1);
var newsource2="dice"+player2Random+".png"
var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",newsource2);
// document.write(newsource2);

if(player1Random>player2Random){
    document.querySelector(".result").innerHTML="🚩Player1 Winner!!!"
}
else if(player1Random<player2Random){
    document.querySelector(".result").innerHTML="Player2 Winner!!!🚩"
}
else{
    document.querySelector(".result").innerHTML="🤷🏻‍♂Draw!!!🤷🏻‍♂"
}