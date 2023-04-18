// Toggle Dark/Light mode

const button = document.getElementById("mode-toggle");
button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// function addFavorite() {
//   let urlInput = document.getElementById("typeURL").value;
//   let li = document.createElement("li");
//   let a = document.createElement("a");

//   a.href = urlInput;
//   a.target = "_blank";
//   let faviconUrl =
//     "https://www.google.com/s2/favicons?sz=64&domain=" + urlInput;
//   a.innerHTML =
//     '<img src="' +
//     faviconUrl +
//     '" onerror="this.onerror=null; this.src=\'https://via.placeholder.com/64x64?text=No+Icon\';" class="mr-2">';
//   li.classList.add("list-group-item", "list-group-item-action");
//   li.appendChild(a);

//   document.getElementById("favoriteList").appendChild(li);
//   document.getElementById("typeURL").value = " ";
// }

// function addFavorite() {
//   let urlInput = document.getElementById("typeURL").value;
//   let li = document.createElement("li");
//   let a = document.createElement("a");
//   let deleteButton = document.createElement("button");

//   a.href = urlInput;
//   a.target = "_blank";
//   let faviconUrl =
//     "https://www.google.com/s2/favicons?sz=64&domain=" + urlInput;
//   a.innerHTML =
//     '<img src="' +
//     faviconUrl +
//     '" onerror="this.onerror=null; this.src=\'https://via.placeholder.com/64x64?text=No+Icon\';" class="mr-2">';
//   li.classList.add("list-group-item", "list-group-item-action");

//   // Configure delete button
//   deleteButton.innerText = "Delete";
//   deleteButton.classList.add("btn", "btn-danger", "btn-sm");
//   deleteButton.addEventListener("click", function () {
//     li.remove();
//   });

//   // Append link, icon and delete button to list item
//   li.appendChild(a);
//   li.appendChild(deleteButton);

//   document.getElementById("favoriteList").appendChild(li);
//   document.getElementById("typeURL").value = " ";
// }

function addFavorite() {
  let urlInput = document.getElementById("typeURL").value;
  let li = document.createElement("li");
  let a = document.createElement("a");
  let deleteButton = document.createElement("button");
  let img = document.createElement("img");

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
  });
  li.appendChild(deleteButton);

  document.getElementById("favoriteList").appendChild(li);
  document.getElementById("typeURL").value = "";
}
