// Toggle Dark/Light mode

const button = document.getElementById("mode-toggle");
button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

function addFavorite() {
  let urlInput = document.getElementById("typeURL").value;
  let li = document.createElement("li");
  let a = document.createElement("a");
  let deleteButton = document.createElement("button");
  let img = document.createElement("img");

  // Create the anchor tag with the favicon image
  a.href = urlInput;
  a.target = "_blank";
  let faviconUrl =
    "https://www.google.com/s2/favicons?sz=64&domain=" + urlInput;
  img.src = faviconUrl;
  img.onerror = function () {
    this.onerror = null;
    this.src = "https://via.placeholder.com/64x64?text=No+Icon";
  };
  img.style.borderRadius = "50%";
  img.style.width = "64px";
  img.style.height = "64px";
  a.appendChild(img);
  li.classList.add(
    "list-group-item",
    "list-group-item-action",
    "d-flex",
    "flex-column",
    "align-items-center"
  );
  li.style.padding = "0.75rem 1.25rem";
  li.appendChild(a);

  // Create the delete button and append it to the list item
  deleteButton.classList.add(
    "btn",
    "btn-danger",
    "btn-sm",
    "delete-button",
    "mt-2"
  );
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", function () {
    li.remove();
    const favorites = getFavorites();
    const filteredFavorites = favorites.filter(
      favorite => favorite.url !== urlInput
    );
    saveFavorites(filteredFavorites);
  });
  li.appendChild(deleteButton);

  // Append the list item to the favorite list and save the favorites to localStorage
  document.getElementById("favoriteList").appendChild(li);
  const favorites = getFavorites();
  const newFavorite = { url: urlInput };
  favorites.push(newFavorite);
  saveFavorites(favorites);

  document.getElementById("typeURL").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  const favorites = getFavorites();
  const favoriteList = document.getElementById("favoriteList");

  for (const favorite of favorites) {
    const url = favorite.url;
    const li = document.createElement("li");
    const a = document.createElement("a");
    const deleteButton = document.createElement("button");
    const img = document.createElement("img");

    // Create the anchor tag with the favicon image
    a.href = url;
    a.target = "_blank";
    let faviconUrl = "https://www.google.com/s2/favicons?sz=64&domain=" + url;
    img.src = faviconUrl;
    img.onerror = function () {
      this.onerror = null;
      this.src = "https://via.placeholder.com/64x64?text=No+Icon";
    };
    img.style.borderRadius = "50%";
    img.style.width = "64px";
    img.style.height = "64px";
    a.appendChild(img);
    li.classList.add(
      "list-group-item",
      "list-group-item-action",
      "d-flex",
      "flex-column",
      "align-items-center"
    );
    li.style.padding = "0.75rem 1.25rem";
    li.appendChild(a);

    deleteButton.classList.add(
      "btn",
      "btn-danger",
      "btn-sm",
      "delete-button",
      "mt-2"
    );
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
      li.remove();
      const favorites = getFavorites();
      const filteredFavorites = favorites.filter(
        favorite => favorite.url !== url
      );
      saveFavorites(filteredFavorites);
    });
    li.appendChild(deleteButton);

    favoriteList.appendChild(li);
  }
});

// Function to save favorite websites to localStorage
function saveFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Function to retrieve favorite websites from localStorage
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}
