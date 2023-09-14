(function () {
  console.log("detail!!");
  var urlParams = new URLSearchParams(location.search);
  var title = urlParams.get("title");
  var src = urlParams.get("src");
  console.log(`title: ${title}`);
  console.log(`src: ${src}`);

  var navTitle = document.getElementById("navTitle");

  navTitle.innerText = title;
  var imgContainer = document.getElementById("imageContainer");
  imgContainer.innerHTML = `<img class="w-100" src="./images/${src}" />`;
})();
