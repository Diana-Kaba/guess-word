let fruits = ["apple", "pear", "orange", "grape"];
let vegetables = ["cucumber", "tomato", "salad greens", "onion"];
let choise = prompt("What do you want, vegetables or fruits?");

window.onload = function () {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = check;
  }
};

function check(event) {
  let image = event.target;
  let name = image.id;
  let p = prompt("What's this?");
  if (p == name) {
    alert("Correctly!");
  } else {
    alert("Wrong!");
  }
}

function random(arr) {
  let randomWords = [];
  let n;
  for (let i = 0; i < 3; i++) {
    n = Math.floor(Math.random() * arr.length);
    randomWords.push(arr[n]);
  }
  return randomWords;
}

function gen(arr) {
  for (let i = 0; i < arr.length; i++) {
    document.write('<img id="' + arr[i] + '" src="images/' + arr[i] + '.png">');
  }
}

function call() {
  if (choise == "vegetables") {
    gen(random(vegetables));
  } else {
    gen(random(fruits));
  }
}

call();
