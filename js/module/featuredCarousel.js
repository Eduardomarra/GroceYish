export default function Carousel() {
  // Navegação buttonLinks
  function buttonLinks() {
    const links = document.querySelectorAll(".btn-featured button");

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

  const slider = document.querySelector(".slider-featured");
  const btnLeft = document.getElementById("moveLeftFeatured");
  const btnRight = document.getElementById("moveRightFeatured");

  let baseSliderWidth = slider.offsetWidth;
  let activeIndex = 0; // the current page on the slider

  // Fill the slider with all the categories in the "categories" array
  async function populateSliderFeatured() {
    const newFeatured = document.getElementById("featured");
    const data = await fetch("../../src/featured.json").then((res) =>
      res.json()
    );

    newFeatured.innerHTML = data.map(
      (itemfeat) =>
        `<div class="card-product">
            <div class="img-featured">
                <img src=${itemfeat.src} alt=${itemfeat.alt}>
            </div>
            <div class="description">
              <div class="description-card">
                  <div class="card-info">
                    <h4>${itemfeat.categorie}</h4>
                    <h3>${itemfeat.name}
                        <span>${itemfeat.weight}</span>
                    </h3>
                  </div>
                  <div class="card-rating">
                    <img src="./assets/img-featured/rating.svg" alt="">
                    <h4>By
                        <span>${itemfeat.proprietary}</span>
                    </h4>
                  </div>
              </div>
              <div class="card-price">
                  <div class="price">
                    <h3>$${itemfeat.promotion}</h3>
                    <h4>$${itemfeat.price}</h4>
                  </div>
                  <button>
                    <img src="./assets/img-featured/li_cart_price.svg" alt="">
                    Add
                  </button>
              </div>
            </div>
          </div>
        </div>`
    );
  }
  populateSliderFeatured();

  // Scroll Left button
  btnLeft.addEventListener("click", (e) => {
    let featuredWidth = document
      .querySelector(".card-product")
      .getBoundingClientRect().width;
    let scrollDistance = featuredWidth * 1.08; // Scroll the length of 6 categories. TODO: make work for mobile because (4 categories/page instead of 6)

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
      .querySelector(".card-product")
      .getBoundingClientRect().width;
      console.log(movieWidth)
    let scrollDistance = movieWidth * 1.08; // Scroll the length of 6 categories. TODO: make work for mobile because (4 categories/page instead of 6)

    // if we're on the last page
    if (activeIndex == 2) {
      // duplicate all the items in the slider (this is how we make 'looping' slider)
      populateSliderFeatured();
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
