export function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("bg-white p-4 rounded-lg shadow-md");

  const productImage = document.createElement("img");
  productImage.classList.add("rounded-lg shadow-md");
  productImage.src = product.image;

  const productName = document.createElement("h2");
  productName.classList.add("text-xl font-bold mb-2");
  productName.textContent = product.title;

  const productDescription = document.createElement("p");
  productDescription.classList.add("text-gray-700 mb-2");
  productDescription.textContent = product.description;

  const productPrice = document.createElement("p");
  productPrice.classList.add("text-lg font-semibold text-blue-600");
  productPrice.textContent = product.price;

  const addButton = document.createElement("button");
  addButton.classList.add(
    "mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700"
  );
  addButton.textContent = "Add to Cart";

  // Append elements to productCard
  productCard.appendChild(productImage);
  productCard.appendChild(productName);
  productCard.appendChild(productDescription);
  productCard.appendChild(productPrice);
  productCard.appendChild(addButton);
  console.log("return productCard");
  return productCard;
}

export function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);

  // Clear existing content using textContent
  container.textContent = "";

  // Append each product card to the container
  products.forEach((product) => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}
