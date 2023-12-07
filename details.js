window.addEventListener('load', () => {
    const cardimg = localStorage.getItem('CARDIMG');
    const cardname = localStorage.getItem('CARDNAME');
    const previousAmt = localStorage.getItem('CARDPREPRICE');
    const currentAmt = localStorage.getItem('CARDPOSTPRICE');
    const relatedOne = localStorage.getItem('FIRSTRELATEDIMG');
    const relatedTwo = localStorage.getItem('SECONDRELATEDIMG');
    const relatedThree = localStorage.getItem('THIRDRELATEDIMG');
    const relatedFour = localStorage.getItem('FOURTHRELATEDIMG');
    const briefShort = localStorage.getItem('BRIEFSHORT');
    const productID = localStorage.getItem('ITEMID');
    const productIder = localStorage.getItem('PRODUCTID');





   document.getElementsByClassName('large-img')[0].src = cardimg;
   document.getElementsByClassName('sub-img')[0].src = cardimg;
   document.getElementsByClassName('product-name')[0].textContent = cardname;
//    document.getElementsByClassName('previous-card-amount')[0].textContent = previousAmt;
   document.getElementsByClassName('previous-card-amount')[1].textContent = previousAmt;
//    document.getElementsByClassName('current-card-amount')[0].textContent = currentAmt;
   document.getElementsByClassName('current-card-amount')[1].textContent = currentAmt;
   document.querySelector('#related-img-1').src = relatedOne;
   document.querySelector('#related-img-2').src = relatedTwo;
   document.querySelector('#related-img-3').src = relatedThree;
   document.querySelector('#related-img-4').src = relatedFour;
   document.getElementsByClassName('brief-short')[0].textContent = briefShort;
   document.getElementsByClassName('item-id')[0].innerHTML = productID;
   document.getElementsByClassName("product-id")[0].textContent = productIder;
   
})
// ------------------------




const cartedAmount = document.getElementsByClassName('carted-amount')
// for (let i = 0; i < cartedAmount.length; i++){
//   carteAmount = cartedAmount[i]
//   carteAmount.innerHTML = 0;
// }
// =========================








// add to cart btn functionality
var productCarted = document.getElementsByClassName("proceed-to-cart-mail")[0];
let addToCartBtn = document.getElementsByClassName('add-to-cart-btn')[0];
 function onAddToCart(){
            setInterval(function(){
            document.getElementsByClassName("cart-animation")[0].classList.add('active');
        }, 500)


        // change text when add-to-cart clicked 
            addToCartBtn.innerHTML = `<button type="button" class="disabled-cart-btn"  disabled><i class="fa fa-check"></i> ADDED</button>`;
            productCarted.classList.add('active')

            
        // when add to cart is clicked increse the number in the shopping icon
            for (let i = 0; i < cartedAmount.length; i++){
                carteAmount = cartedAmount[i]
            var cateramt = carteAmount.innerText;
                
            ++cateramt;
                carteAmount.innerText = cateramt;
                sessionStorage.setItem('CARTAMT', carteAmount.innerText);
            }
            
        //    return added back to add to cart
        setInterval(() =>{
            addToCartBtn.innerHTML = `ADD TO CART`;
        }, 7000)

            updateCartItem();
            addToCartButton();
 }





// =------------------------



// -------------------------

// updatecart ()
function updateCartItem(){
    const cartRows = document.getElementsByClassName('proceed-to-cart-banner')[0]
   const cartRowAmt = cartRows.getElementsByClassName('current-card-amount')[0];
   const prCartRowAmt = cartRows.getElementsByClassName('previous-card-amount')[0];
   const priceElement = localStorage.getItem('CARDPOSTPRICE');
   const previousAmt = localStorage.getItem('CARDPREPRICE');

   document.getElementsByClassName('previous-card-amount')[0].innerText = previousAmt
   document.getElementsByClassName('current-card-amount')[0].innerText = priceElement;
   const price = parseFloat(priceElement.replace(/[,]/g, ''));
   const prePrice = parseFloat(previousAmt.replace(/[,]/g, ''))
   const quantity = inputNumberSize.value;
   cartRowAmt.innerText = price * quantity;
   prCartRowAmt.innerText = prePrice * quantity;


// name the number of item  carted on banner
let productName = document.getElementsByClassName('product-name')[0].textContent
let productBannerName = cartRows.getElementsByClassName('product-banner-name')[0]
if (quantity == 1){
   productBannerName.innerText = `${productName}`
   select.value = select[0].value;
   inputNumberSize.value = 1;
}else{
   productBannerName.innerText = `${quantity} (${productName})`
    select.value = select[0].value;
   inputNumberSize.value = 1;
  }

}

//   ------------------------





// continue shopping
function continueShoppingCart(){
    productCarted.classList.remove('active')
  }

//   ------------------------



// move to cartt history
function movetoCartHistory(){
    window.location.href = 'cart-history.html'

    productCarted.classList.remove('active')
}
// -----------------------------






// able to click on images
const  heroImg = document.getElementById("large-img")
const  smallImg = document.getElementsByClassName("small-img")

        smallImg[0].onclick = function(){
        heroImg.src = smallImg[0].src
        }
        smallImg[1].onclick = function(){
        heroImg.src = smallImg[1].src
        }
        smallImg[2].onclick = function(){
        heroImg.src = smallImg[2].src
        }
        smallImg[3].onclick = function(){
        heroImg.src = smallImg[3].src
        }

//  -------------------------------

// change size on select
const inputNumberSize = document.querySelector('#amount-carted')
const select = document.querySelector('#select-size')
select.onchange = function (){
    if (this.value == this.value){
        inputNumberSize.value = select.value
    }
   
}




// ---------------------------------




//  on changing the number of carts
inputNumberSize.addEventListener('change', () =>{
    if (inputNumberSize.value > 10){
        alert(`You can only cart up to 10 pieces of an item at a time.`);
        inputNumberSize.value = 10;
    }else if(isNaN(inputNumberSize.value) || inputNumberSize.value <= 0){
        alert('Make sure to input a valid amount of item to be carted');
        inputNumberSize.value = 1;
    }else if (inputNumberSize.value <= 4 || inputNumberSize.value == 1){
        select.value = inputNumberSize.value;
    }
    else if (inputNumberSize.value >= 5){
        select.value = select[6].value;
    }
});




// -----------------------------


// add +1 to input number
  function plusCart(){
    let increaseNumberSize = inputNumberSize.value
    ++increaseNumberSize

    inputNumberSize.value = increaseNumberSize;
    if (inputNumberSize.value > 10){
        alert('You can only cart up to 10 bulk of an item at a time.');
        inputNumberSize.value = 10;
    }else if (inputNumberSize.value <= 5 || inputNumberSize.value == 1){
        select.value = inputNumberSize.value;
    }
    else if (inputNumberSize.value >= 5){
        select.value = select[6].value;
    }
  }

/******************************* */

// add -1 to input number
  function minusCart(){
    let increaseNumberSize = inputNumberSize.value
    --increaseNumberSize

    inputNumberSize.value = increaseNumberSize;
    if(inputNumberSize.value < 1){
        inputNumberSize.value = 1;
        alert('You\'ve reached the mininum carting amount.');
        select.value = select[0].value;
    }else if (inputNumberSize.value <= 5 || inputNumberSize.value == 1){
        select.value = inputNumberSize.value;
    }
    
  }