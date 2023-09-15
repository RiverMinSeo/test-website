import { portFolioList } from "../data/main.js";

(function () {
  var params = new URLSearchParams(location.search);
  var id = params.get("id");
  var portfolio = portFolioList[id];
  var title = portfolio["title"];
  var image = portfolio["image"];
  var descHtml = portfolio["descHtml"] ?? "";

  var pofolTitle = document.getElementById("pofolTitle");
  var pofolImage = document.getElementById("pofolImage");
  var pofolContent = document.getElementById("pofolContent");

  pofolTitle.innerText = title;
  pofolImage.setAttribute("src", image);
  pofolContent.innerHTML = descHtml;
})();
