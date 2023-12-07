// Quick pick redirecting to a new page with its contents
const quickPickBtn = document.getElementsByClassName("quick-pick")
for (let i = 0; i < quickPickBtn.length; i++){
    quickBtn = quickPickBtn[i]
    quickBtn.addEventListener('click', updateCart)
      }

   


   // -----------------------------
     function updateCart(event){
        var quickBtn = event.target
        window.location.href = "Details.html";


        var cartAttireDisplay = quickBtn.parentElement.parentElement;
        var cartCardImg = cartAttireDisplay.getElementsByClassName("cart-card-img")[0].src;
        var cartName = cartAttireDisplay.getElementsByClassName("attire-name")[0].textContent;
        var cartPreviousPrice = cartAttireDisplay.getElementsByClassName("previous-amount")[0].textContent;
        var cartCurrentPrice = cartAttireDisplay.getElementsByClassName("current-amount")[0].textContent;
        var relatedimgOne = cartAttireDisplay.querySelector('#related-img-1').src;
        var relatedimgTwo = cartAttireDisplay.querySelector('#related-img-2').src;
        var relatedimgThree = cartAttireDisplay.querySelector('#related-img-3').src;
        var relatedimgFour = cartAttireDisplay.querySelector('#related-img-4').src;
        var briefShort = cartAttireDisplay.getElementsByClassName('brief-short')[0].innerText;
        var itemID = cartAttireDisplay.getElementsByClassName('item-id')[0].innerHTML;
        var viewReviews = cartAttireDisplay.getElementsByClassName('view-reviews')[0].innerHTML;
        var addReview = cartAttireDisplay.getElementsByClassName('add-review')[0].innerHTML;
        
      localStorage.setItem("CARDIMG", cartCardImg);
      localStorage.setItem("CARDNAME", cartName);
      localStorage.setItem("CARDPREPRICE", cartPreviousPrice);
      localStorage.setItem("CARDPOSTPRICE", cartCurrentPrice);
      localStorage.setItem("FIRSTRELATEDIMG", relatedimgOne);
      localStorage.setItem("SECONDRELATEDIMG", relatedimgTwo);
      localStorage.setItem("THIRDRELATEDIMG", relatedimgThree);
      localStorage.setItem("FOURTHRELATEDIMG", relatedimgFour);
      localStorage.setItem("BRIEFSHORT", briefShort);
      localStorage.setItem("ITEMID", itemID);
      localStorage.setItem("VIEWREVIEWS", viewReviews);
      localStorage.setItem("ADDREVIEW", addReview);

      
      // random coding number for the productId
      let productChar = "QWERTYUIOPLAKSHDGFMZNXBCV?123456789"
      let productCharTwo = "1234567890"
      let productLeng = 5;
      let productLengTwo = 3;
      let productIder = "";
      let productIderTwo = "";
      for (let i = 0; i <= productLeng; i++){
        var randomNumber = Math.floor(Math.random() * productChar.length)
        productIder += productChar.substring(randomNumber, randomNumber +1)
     }
      for (let e = 0; e <= productLengTwo; e++){
        var randomNumberTwo = Math.floor(Math.random() * productCharTwo.length)
        productIderTwo += productCharTwo.substring(randomNumberTwo, randomNumberTwo +1)
      }
       productId = document.getElementsByClassName("product-id")[0].value
       productId = productIder + "-" + productIderTwo;
      
       localStorage.setItem("PRODUCTID", productId)


      
      
  }

  


  // ---------------------
  // adding +1 to cart icon  number
  window.addEventListener('load', () =>{
   
    var caertedAmt = sessionStorage.getItem('CARTAMT')

    document.getElementsByClassName('carted-amount')[0].innerText = caertedAmt;
    document.getElementsByClassName('carted-amount')[1].innerText = caertedAmt;
  })



   
  
  