window.addEventListener("DOMContentLoaded", () => {
  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => displayProducts(data.products))
    .catch(error => console.log("Error fetching all products:", error));
});

function validateSearch() {
  const input = document.getElementById("imp").value.trim();
  if (input === "") {
    alert("Please enter a search term.");
    return;
  }

  fetch(`https://dummyjson.com/products/search?q=${input}`)
    .then(response => response.json())
    .then(data => displayProducts(data.products))
    .catch(error => console.log("Error fetching search results:", error));
}

function displayProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Clear previous results

  if (!products || products.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
    return;
  }
  
  products.sort((a, b) => a.price - b.price);

  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <img src="${product.thumbnail}" width="100" alt="${product.title}">
      <p><strong>Price:</strong> $${product.price}</p>
      <hr>
    `;
    container.appendChild(productDiv);
  });
}

