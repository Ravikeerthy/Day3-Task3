function viewProduct(){ // ONclick trigger function
    var inputValue = document.getElementById("floatingInput").value; // Getting the value from user
    var url = "http://makeup-api.herokuapp.com/api/v1/products.json?product_name=" + inputValue; // adding the data with api to fetch the data

    fetch(url).then((resolve)=>resolve.json())
    .then((data)=>{
        console.log(data);
                  var product = data[inputValue];
            displayProduct(product); // function to displaying product
       
    })
    .catch((err)=>{ // Error handling
        displayError("Product is not available");
    });
}

function displayProduct(product){
    var productDiv = document.getElementById("name"); 

        productDiv.innerHTML =`<p><strong>Product Name: ${product.name}</strong></p><p><b>Product Description: </b>
    ${product.description}</p>
    <p><b>Product Type: </b>${product.product_type}</p>
    <p><b>Product Category: </b>${product.category}</p>
    <p><b>Product Brand: </b> ${product.brand}</p>`; // displaying the fetched data in a separate div
}

function displayError(message){ // error function
    var errmsg = document.getElementById("name");
    errmsg.innerHTML = `<p>${message}</p>`; 
}


