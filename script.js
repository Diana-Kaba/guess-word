window.onload = function () {
  let images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].onclick = check;
  }
};

let words = ["apple", "pear"];

function check(arr) {
  // let image = event.target;
  // let name = image.id;
  // let p = prompt("Что за фрукт?");
  // if (p == name) {
  //   alert("Правильно!");
  // } else {
  //   alert("Не правильно!");
  // }
  for (let i = 0; i < arr.length; i++) {
    document.write('<img id="' + arr[i] + '" src="images/' + arr[i] + '.png">');
  }
}

check(words);
