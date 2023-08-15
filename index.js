function roll(){
	//asf as
  var randomNumber1= Math.floor(Math.random()*6)+1;
  var randomImgSource = "images/dice"+randomNumber1+".png";
  document.querySelector("img.img1").setAttribute("src", randomImgSource);

  var randomNumber2= Math.floor(Math.random()*6)+1;
  var randomImgSource = "images/dice"+randomNumber2+".png";
  document.querySelector("img.img2").setAttribute("src", randomImgSource);

  var b = document.querySelector("h1");
  if(randomNumber1 === randomNumber2){
	  b.innerHTML = "Draw!";
  } else if(randomNumber1>randomNumber2){
	  b.innerHTML = "🚩Player 1 Wins";
  } else { 
	  b.innerHTML = "Player 2 Wins🚩";
  }
}
