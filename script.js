(function () {
  function rep(data) {
    var cardHtml = "";
    var j = 0;

    for (i = 0; i < data.length; i++) {
      if (i % 3 == 0) {
        cardHtml += '<div class="row" >';
        j = i + 2;
      }
      cardHtml += genproduct(data[i]);
      if (j == i) {
        cardHtml += "</div>";
      }
    }
    return cardHtml
  }
  function genproduct(data) {
    var cardHTML = `<div class="col-md-4"> <div class="card">
        <img src="${data.image}" class="card-img-top" alt="product image ">
      
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">The Samsung Galaxy Note 9 puts a new spin on the term <b>an interactive smartphone</b>.</p>
          <div class="price">
              <div class="mrp"><del><small>${data.mrp}</small></del></div>
              <div class="sp"><strong>${data.sp}</strong></div>
          </div>
          <div class="bcart">
          <a href="#" class="btn btn-primary">Add to cart</a>
         </div>
          <a href="#" class="btn btn-primary">Buy Now</a>
        </div>
      </div>
        </div>
      `
    return cardHTML;
  }
  window.genproduct = rep;

})();