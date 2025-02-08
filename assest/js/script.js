$(document).ready(function () {
    $(".toggle").click(function () {
        $(".side-nav").toggle(300);
    })
    $(".close-nav").click(function () {
        $(".side-nav").toggle(300);
    })
})

// search Bar
document.getElementById("searchButton").addEventListener("click", function () {
    let searchQuery = document.getElementById("searchInput").value;
    alert("You searched for: " + searchQuery);
});

$(document).ready(function () {
    $("#searchInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();

        $("#cont, .product-card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })
    })
}

)

// contact page
document.getElementById("help").addEventListener("change", function () {
    let otherField = document.getElementById("other-field");
    if (this.value === "other") {
        otherField.style.display = "block";
    } else {
        otherField.style.display = "none";
    }
});
// compare page

function compareProducts() {

    var product1 = document.getElementById("product1").value;
    var product2 = document.getElementById("product2").value;

    document.getElementById("product1Name").innerText = product1 ? product1 : "Product 1";
    document.getElementById("product2Name").innerText = product2 ? product2 : "Product 2";

    var productData = {
      "Product 1": {
        price: "$199",
        weight: "1.2 kg",
        battery: "12 hours"
      },
      "Product 2": {
        price: "$249",
        weight: "1.5 kg",
        battery: "10 hours"
      },
      "Product 3": {
        price: "$299",
        weight: "1.3 kg",
        battery: "15 hours"
      }
    };
  

    document.getElementById("product1Price").innerText = product1 ? productData[product1].price : "";
    document.getElementById("product2Price").innerText = product2 ? productData[product2].price : "";
  
    document.getElementById("product1Weight").innerText = product1 ? productData[product1].weight : "";
    document.getElementById("product2Weight").innerText = product2 ? productData[product2].weight : "";
  
    document.getElementById("product1Battery").innerText = product1 ? productData[product1].battery : "";
    document.getElementById("product2Battery").innerText = product2 ? productData[product2].battery : "";
  }
  