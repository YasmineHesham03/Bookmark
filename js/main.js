var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteURL");

var localStorageBookmarksKey = "bookmarks";

var bookmarkList = [];

if (localStorage.getItem(localStorageBookmarksKey)) {
  bookmarkList = JSON.parse(localStorage.getItem(localStorageBookmarksKey));
  displayBookmark(bookmarkList);
  console.log(bookmarkList);
}

// if (localStorage.getItem(localStorageBookmarksKey) == null) {
//   bookmarkList = [];
// } else {
//   bookmarkList = JSON.parse(localStorage.getItem(localStorageBookmarksKey));
//   displayBookmark(bookmarkList);
//   console.log(bookmarkList);
// }

function submitBookmark() {
  var bookmark = {
    name: siteNameInput.value,
    url: siteUrlInput.value,
  };
  clearForm();
  bookmarkList.push(bookmark);
  localStorage.setItem(localStorageBookmarksKey, JSON.stringify(bookmarkList));
  displayBookmark(bookmarkList);
}

function displayBookmark(item) {
  var cartona = ``;

  for (var i = 0; i < item.length; i++) {
    cartona += ` <tr>
    <td>${i + 1}</td>
    <td>${item[i].name}</td>
    <td><a href="${item[i].url}" target="_blank" class="btn btn-success btn-sm">Visit</a></td>
    <td><button onclick = "deleteBookmark(${i})" class="btn btn-danger btn-sm">Delete</button></td>
  </tr>`;
  }
  document.getElementById("tBody").innerHTML = cartona;
}

function clearForm() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}

function deleteBookmark(index) {
  console.log("delete");
  bookmarkList.splice(index, 1);
  localStorage.setItem(localStorageBookmarksKey, JSON.stringify(bookmarkList));
  displayBookmark(bookmarkList);
}

function isValidURL(url) {
  const pattern =
    /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/[\w.-]*)*\/?(\?[\w.-]+=[\w.-]+(&[\w.-]+=[\w.-]+)*)?(#[\w.-]+)?$/i;
  return pattern.test(url);
}
