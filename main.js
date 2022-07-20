const arrows = document.querySelectorAll(".arrow");
const wallpaperLists = document.querySelectorAll(".wallpaper-list");

arrows.forEach((arrow, i) => {
  const itemNumber = wallpaperLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      wallpaperLists[i].style.transform = `translateX(${
        wallpaperLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      wallpaperLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.wallpaper-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
