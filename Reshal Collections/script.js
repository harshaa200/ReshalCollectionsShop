function openModal(name, price, colors, sizes) {
  document.getElementById("modalTitle").innerText = name;
  document.getElementById("modalPrice").innerText = price;
  document.getElementById("modalColors").innerText = colors.join(", ");
  document.getElementById("modalSizes").innerText = sizes.join(", ");

  document.getElementById("whatsappOrder").href =
    "https://wa.me/918459240980?text=Hi, I want to order " + name;

  document.getElementById("instagramOrder").href =
    "https://www.instagram.com/reshalcollection";

  document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

function closeOnOutside(event) {
  if (event.target.id === "productModal") {
    closeModal();
  }
}
