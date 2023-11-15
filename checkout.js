const cartDetail=localStorage.getItem('cart')
const cart=JSON.parse(cartDetail)
const container=document.getElementById('cart-details')
updateCartDetails()
function updateCartDetails(){
    const CartDetails=JSON.stringify(cart);
    cart.forEach(e=>
        {
        const div=document.createElement('div')
        const title=document.createElement('h3')
        title.textContent=e.title
        title.classList.add('col')
        const price=document.createElement('p')
        price.textContent=e.price
        price.classList.add('col')
        div.appendChild(title)
        div.appendChild(price)
        container.appendChild(div)
    })


}
