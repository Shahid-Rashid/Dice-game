// var image1 = document.querySelectorAll("img")[0];
// var image2 = document.querySelectorAll("img")[1];

document.querySelector("#btn").addEventListener("click", function () {
    var numo1 = Math.random();
    var num1 = Math.floor(numo1 * 6) + 1;
    var numo2 = Math.random();
    var num2 = Math.floor(numo2 * 6) + 1;
    winner(num1, num2);
});


function setimg(num1, num2) {
    document.querySelector(".img1").setAttribute("src", "./images/dice" + num1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + num2 + ".png");
}


function winner(num1, num2) {
    setimg(num1, num2);
    if (num1 > num2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";

    }
    else if (num2 > num1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins";

    }
    else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}

