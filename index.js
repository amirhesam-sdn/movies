const imageCountainer = document.querySelector(".countainer");
const counter = document.querySelectorAll(".count-movie");
const count = document.querySelector(".count");
const sum = document.querySelector(".sum");
const pictuer = document.querySelectorAll(".pic");
const plus = document.querySelectorAll(".fa-plus");
const trash = document.querySelector(".fa-trash");
const minus = document.querySelectorAll(".fa-minus");
const imageSidebar = document.querySelector(".image");
const story = document.querySelectorAll(".Synopsis");
const cards = document.querySelectorAll(".card");
const price = document.querySelectorAll(".price");
const messageError = document.querySelectorAll(".forbbiden");

let number = "";

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    imageSidebar.src = `./img/movie${i + 1}.jpg`;
  });

  pictuer[i].addEventListener("click", () => {
    story[i].classList.remove("hide");

    update(i);
  });

  plus[i].addEventListener("click", () => {
    if (counter[i].innerHTML < 5) {
      count.innerHTML = Number(count.innerHTML) + 1;
      number = price[i].innerHTML;
      number = Number(number);
      sum.innerHTML = Number(sum.innerHTML) + number;
      counter[i].innerHTML = Number(counter[i].innerHTML) + 1;
    } else if (counter[i].innerHTML >= 5) {
      counter[i].innerHTML = 5;
      messageError[i].style.width = "100" + "%";
      messageError[i].style.opacity = "1";
    }
    story[i].classList.remove("hide");

    update(i);
  });

  minus[i].addEventListener("click", () => {
    if (counter[i].innerHTML > 0) {
      count.innerHTML = Number(count.innerHTML) - 1;
      counter[i].innerHTML = Number(counter[i].innerHTML) - 1;
      number = price[i].innerHTML;
      number = Number(number);
      sum.innerHTML = Number(sum.innerHTML) - number;
    }

    if (count.innerHTML < 0) {
      count.innerHTML = 0;
    }

    if (counter[i].innerHTML < 0) {
      counter[i].innerHTML = 0;
    }

    if (counter[i].innerHTML < 5) {
      messageError[i].style.width = "0" + "%";
      messageError[i].style.opacity = "0";
    }
  });
}

function update(i) {
  for (let j = 0; j < story.length; j++) {
    if (i != j) {
      story[j].classList.add("hide");
    }
  }
}

trash.addEventListener("click", function () {
  count.innerHTML = 0;
  sum.innerHTML = 0;
  for (let i = 0; i < counter.length; i++) {
    counter[i].innerHTML = 0;
  }
});
