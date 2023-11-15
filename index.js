const url="https://fakestoreapi.com/products"
async function getData()
{
    try
    {
       let res=await fetch(url)
       if(res.ok)
       {
        let products=await res.json()
       console.log(products)
       append(products)
       }
       else
       {
        console.log("Fetching Cannot be done, some network problem")
       }
       console.log(res)
       
     }
    catch(error)
    {
        console.log(error)
    }
}
getData()
const cont=document.getElementById('cont')
function append(data)
{
    console.log(data)
    data.forEach((ele)=>{
        //individual product links by passing whole product details in URL(encoded)
        let productLink=document.createElement('a')
        productLink.href=`product.html?product=${encodeURIComponent(JSON.stringify(ele))}`

        productLink.style.textDecoration='none'
        productLink.classList.add("col-md-4")
        let div=document.createElement("div")
        let card=document.createElement('div')
        card.classList.add('card','mb-4','h-100')
        let img=document.createElement('img')
        img.src=ele.image;
        img.alt="image";
        img.classList.add('card-img-top','h-20')
        let cardBody=document.createElement("div")
        cardBody.classList.add('card-body')
        let category=document.createElement('h2')
        category.innerText=ele.category
        category.classList.add('card-title')

        let title=document.createElement('h2')
        title.innerText=ele.title
        title.classList.add('card-title')
        let description=document.createElement('p')
        description.innerText=ele.description;
        description.classList.add('card-text')
        let price=document.createElement('p')
        price.innerText='$'+ ele.price;
        price.classList.add('card-title')
        let rating=document.createElement('p')
        rating.innerText=ele.rating.rate;
        rating.classList.add('card-text')
        let cartButton=document.createElement('button');
        cartButton.textContent='Add to Cart';
        cartButton.classList.add("btn","btn-primary")
        cartButton.setAttribute('data-product',JSON.stringify(ele))
        cartButton.addEventListener('click',addCart);
        cardBody.appendChild(category)
        cardBody.appendChild(productLink)
        cardBody.appendChild(description)
        cardBody.appendChild(price)
        cardBody.appendChild(rating)
        cardBody.appendChild(cartButton)
        card.appendChild(img)
        card.appendChild(cardBody)
        div.appendChild(card)
        
        //product-individual code
        
        productLink.appendChild(title)
        productLink.appendChild(img)
        cont.appendChild(div)

        
    });
}
    let cart=[];
    let cartBadge=document.getElementById('cart-badge')
    function updateCartBadge()
    {
        cartBadge.textContent=cart.length;
    }
function addCart()
{
    const prodData=JSON.parse(event.target.getAttribute('data-product'))
    cart.push(prodData)
    updateCart();
    updateCartBadge();
    console.log("item added")
}
const cartValue=document.getElementById('cart-value')
function updateCart()
{
    const cartTotal=cart.reduce((total,pro)=>total+pro.price,0)
    cartValue.textContent=`${cartTotal.toFixed(2)}`
}
const checkoutButton=document.getElementById('checkout')
checkoutButton.addEventListener('click',checkout)
function checkout(){
    
    const cartDetails=JSON.stringify(cart);
    //alert(cartDetails)
    localStorage.setItem('cart',cartDetails)
    window.location.href='./checkout.html'
}