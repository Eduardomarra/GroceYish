export default function Carousel() {
  // Navegação buttonLinks
  function buttonLinks() {
    const links = document.querySelectorAll(".title-categories button");

    function activeLink(index) {
      links.forEach((e) => {
        e.classList.remove("active");
      });

      links[index].classList.add("active");
    }

    links.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeLink(index);
      });
    });
  }
  buttonLinks();
  //fim navegação buttonLinks

  const slider = document.querySelector(".slider-categories");
  const btnLeft = document.getElementById("moveLeftCategorie");
  const btnRight = document.getElementById("moveRightCategorie");

  let activeIndex = 0; // the current page on the slider

  // Fill the slider with all the categories in the "categories" array

  async function populateSlider() {
    const newCategorie = document.getElementById("categorie");
    const data = await fetch("../../src/categories.json").then((res) =>
      res.json()
    );

    newCategorie.innerHTML = data.map(
      (item) =>
        `<a href="#" class=${item.class}>
                <img
                    src=${item.src} alt="">
                <h2>${item.name}</h2>
                <h4>${item.inventary} Items</h4>
              </a>`
    );
  }

  populateSlider();

  // Scroll Left button
  btnLeft.addEventListener("touchstart", (e) => {
    e.preventDefault()
    let categorieWidth = document
      .querySelector(".categories")
      .getBoundingClientRect().width;
    let scrollDistance = categorieWidth * 1; // Scroll the length of 6 categories. TODO: make work for mobile because (4 categories/page instead of 6)

    slider.scrollBy({
      top: 0,
      left: -scrollDistance,
      behavior: "smooth",
    });
    activeIndex = (activeIndex - 1) % 3;
  });


  // Scroll Right button
  btnRight.addEventListener("touchstart", (e) => {
    e.preventDefault()
    let movieWidth = document
      .querySelector(".categories")
      .getBoundingClientRect().width;
    let scrollDistance = movieWidth * 1; // Scroll the length of 6 categories. TODO: make work for mobile because (4 categories/page instead of 6)

    // if we're on the last page
    if (activeIndex == 2) {
      // duplicate all the items in the slider (this is how we make 'looping' slider)
      populateSlider();
      slider.scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });
      activeIndex = 0;
    } else {
      slider.scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });
      activeIndex = (activeIndex + 1) % 3;
    }
  });
}
