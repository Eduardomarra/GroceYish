export default function DailyCarousel() {
  // Navegação buttonLinks
  function buttonLinks() {
    const links = document.querySelectorAll(".btn-daily button");

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

  const slider = document.querySelector(".slider-daily");
  const btnLeft = document.getElementById("moveLeftDaily");
  const btnRight = document.getElementById("moveRightDaily");

  let activeIndex = 0; // the current page on the slider

  // Fill the slider with all the categories in the "categories" array
  async function populateSliderdaily() {
    const newDaily = document.getElementById("daily");
    const data = await fetch("../../src/daily.json").then((res) =>
      res.json()
    );

    newDaily.innerHTML = data.map(
      (itemDaily) =>
        `<div class="card-daily">
            <div class="image-daily">
                <img src="${itemDaily.src}" alt="">
                <span class="${itemDaily.classBestDeal}">${itemDaily.textSpan}</span>
            </div>
            <div class="group-title-daily">
                <div class="title-card-daily">
                    <h4>${itemDaily.subTitle}</h4>
                    <h2>${itemDaily.title} <span>${itemDaily.weight}</span></h2>
                    <img src="./assets/img-daily/rating.svg" alt="">
                    <h3>By <span>Mr.Food</span></h3>
                </div>
                <div class="wrapper-price-daily">
                    <div class="price-daily">
                        <h3>${itemDaily.promotion}</h3>
                        <h4>${itemDaily.price}</h4>
                    </div>
                    <div class="sold" style="width: ${itemDaily.width};"></div>
                    <h3>Sold: <span>${itemDaily.sold}</span></h3>
                </div>
                <button class="btn-card-daily">
                    <img src="./assets/img-daily/btn-shop-cart-daily.svg" alt="">
                    Add to cart
                </button>
            </div>
        </div>`
    );
  }
  populateSliderdaily();

  // Scroll Left button
  btnLeft.addEventListener("click", (e) => {
    let dailyWidth = document
      .querySelector(".card-daily")
      .getBoundingClientRect().width;
    let scrollDistance = dailyWidth * 1.05; // Scroll the length of 6 categories. TODO: make work for mobile because (4 categories/page instead of 6)

    slider.scrollBy({
      top: 0,
      left: -scrollDistance,
      behavior: "smooth",
    });
    activeIndex = (activeIndex - 1) % 3;
  });

  // Scroll Right button
  btnRight.addEventListener("click", (e) => {
    let movieWidth = document
      .querySelector(".card-daily")
      .getBoundingClientRect().width;
    let scrollDistance = movieWidth * 1.05; // Scroll the length of 6 categories. TODO: make work for mobile because (4 categories/page instead of 6)

    // if we're on the last page
    if (activeIndex == 2) {
      // duplicate all the items in the slider (this is how we make 'looping' slider)
      populateSliderdaily();
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
