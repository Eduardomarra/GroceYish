export default function OpenCart() {
    const arrowDowncart = document.querySelector(".open-cart img")
    const imagecart = document.querySelector(".img-cart img")
    const cartIsOpen = document.querySelector(".list-cart")
    
    imagecart.addEventListener("click", () => {
        cartIsOpen.classList.toggle("active")
    })
    
    arrowDowncart.addEventListener("click", () => {
        cartIsOpen.classList.toggle("active")
    })
}

