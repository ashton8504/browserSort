// Toggle Dark/Light mode

const button = document.getElementById("mode-toggle");
button.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

function addFavorite() {
  // let urlInput = document.getElementById("typeURL").value;
  // let li = document.createElement("li");
  // let a = document.createElement("a");

  // a.href = urlInput;
  // a.target = "_blank";
  // let faviconUrl =
  //   "https://www.google.com/s2/favicons?sz=64&domain=" + urlInput;
  // a.innerHTML =
  //   '<img src="' +
  //   faviconUrl +
  //   '" onerror="this.onerror=null; this.src=\'https://via.placeholder.com/64x64?text=No+Icon\';" class="mr-2">' +
  //   urlInput;
  // li.classList.add("list-group-item", "list-group-item-action");
  // li.appendChild(a);

  // document.getElementById("favoriteList").appendChild(li);

  let urlInput = document.getElementById("typeURL").value;
  let li = document.createElement("li");
  let a = document.createElement("a");

  a.href = urlInput;
  a.target = "_blank";
  let faviconUrl =
    "https://www.google.com/s2/favicons?sz=64&domain=" + urlInput;
  a.innerHTML =
    '<img src="' +
    faviconUrl +
    '" onerror="this.onerror=null; this.src=\'https://via.placeholder.com/64x64?text=No+Icon\';" class="mr-2">';
  li.classList.add("list-group-item", "list-group-item-action");
  li.appendChild(a);

  document.getElementById("favoriteList").appendChild(li);
  document.getElementById("typeURL").value = " ";
}
