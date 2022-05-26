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

  const slider = document.querySelector(".slider");
  const btnLeft = document.getElementById("moveLeft");
  const btnRight = document.getElementById("moveRight");

  let baseSliderWidth = slider.offsetWidth;
  let activeIndex = 0; // the current page on the slider

  let movies = [
    {
      src: "../../assets/img-categories/image-3.svg",
    },
    {
      src: "../../assets/img-categories/image-4.svg",
    },

    {
      src: "../../assets/img-categories/image-5.svg",
    },

    {
      src: "../../assets/img-categories/image-6.svg",
    },
    {
      src: "../../assets/img-categories/image-7.svg",
    },
    {
      src: "../../assets/img-categories/image-8.svg",
    },
    {
      src: "../../assets/img-categories/image-9.svg",
    }
  ];

  // Fill the slider with all the movies in the "movies" array
  function populateSlider() {
    movies.forEach((image) => {
      // Clone the initial movie thats included in the html, then replace the image with a different one
      const newMovie = document.getElementById("movie0");
      let clone = newMovie.cloneNode(true);
      let img = clone.querySelector("img");
      img.src = image.src;

      slider.insertBefore(
        clone,
        slider.childNodes[slider.childNodes.length - 1]
      );
    });
  }

  populateSlider();
  populateSlider();

  // delete the initial movie in the html
  const initialMovie = document.getElementById("movie0");
  initialMovie.remove();

  // Scroll Left button
  btnLeft.addEventListener("click", (e) => {
    let movieWidth = document
      .querySelector(".movie")
      .getBoundingClientRect().width;
    let scrollDistance = movieWidth * 6; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

    slider.scrollBy({
      top: 0,
      left: -scrollDistance,
      behavior: "smooth",
    });
    activeIndex = (activeIndex - 1) % 3;
    console.log(activeIndex);
    updateIndicators(activeIndex);
  });

  // Scroll Right button
  btnRight.addEventListener("click", (e) => {
    let movieWidth = document
      .querySelector(".movie")
      .getBoundingClientRect().width;
    let scrollDistance = movieWidth * 6; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

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
