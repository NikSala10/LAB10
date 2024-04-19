
let listOfProducts = []

function createAllProducts ()  {
    for(let i = 0; i < data.length; i++)  {
        let object = data [i]
        let title = object.title
        let price = object.price
        let imageUrl = object.images
        let description = object.description
        let product = new Product (title, price, description, imageUrl)
        listOfProducts.push(product)
    }
}

function fillScreenWithProducts ()  {
    const container = document.getElementById("p1")
    container.innerHTML = ""; 
    for(let i = 0; i < listOfProducts.length; i++)  {
        const product = listOfProducts[i].createHtml()
        container.innerHTML += product;
        console.log(product);
    }
}




 createAllProducts()
 fillScreenWithProducts()