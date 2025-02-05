$(document).ready(function () {
    $(".toggle").click(function () {
        $(".side-nav").toggle(300);
    })
    $(".close-nav").click(function () {
        $(".side-nav").toggle(300);
    })
})
//  add to cart
// $(document).ready(function () {
//     let totalPrice = 0;
//     let itemCount = 0;

//     $(".addToCart").click(function () {
//         let myCard = $(this).closest(".mycard");

//         let itemPic = myCard.find("img").attr("src");
//         let itemName = myCard.find("a.title").text();
//         let itemPrice = parseFloat( myCard.find(".price p").text().replace("PKR", "").trim());

//         let item = `        <div class="cart-content">
//             <div class="cart-pic">
//                 <img src="${itemPic}" alt="">
//             </div>
//             <div class="cart-info">
//                 <p>${itemName}</p>
//             </div>
//             <div class="cart-total">
//                 <p>PKR ${itemPrice}</p>
//             </div>
//             <div class="del">
//                 <i class="fa-solid fa-trash"></i>
//             </div>
//         </div>
//         `;
//         $(".cart-box").append(item)
//         alert("added to cart");

//     // Total Price
//     totalPrice += itemPrice;
//     $("#total").text(totalPrice.toFixed(2));

//     itemCount++;
//     $(".count").text(itemCount);

//     });

//     // Removing Items
//     $(".cart-box").on("click", ".del", function () {
//         let itemPrice = parseFloat($(this).closest(".cart-content").find(".cart-total p").text().replace("PKR", "").trim());


//         totalPrice -= itemPrice; 
//         $("#total").text(totalPrice.toFixed(2));

//         $(this).closest(".cart-content").remove();

//         itemCount--;
//         $(".count").text(itemCount);
//     });

// });


// search Bar
document.getElementById("searchButton").addEventListener("click", function() {
    let searchQuery = document.getElementById("searchInput").value;
    alert("You searched for: " + searchQuery);
});
