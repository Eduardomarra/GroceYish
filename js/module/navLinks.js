export default function NavLinks() {
    const nav = document.querySelectorAll(".links")
    const links = document.querySelectorAll(".links a")
    const images = document.querySelectorAll(".links a img")

    function activeLink(index){
        links.forEach((e) => {
            e.classList.remove("active")
        })
        images.forEach((e) => {
            e.classList.remove("active")
        })

        links[index].classList.add("active")
        images[index].classList.add("active")
    }

    nav.forEach((item, index) => {
        item.addEventListener("click", () => {
            activeLink(index)
        })
    })
}

