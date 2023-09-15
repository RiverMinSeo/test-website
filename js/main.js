import { portFolioList } from "../data/main.js";

(function () {
  renderPortfolioList(Object.values(portFolioList));
})();

function renderPortfolioList(listData) {
  var portfolioList = document.getElementById("portfolioList");
  var htmls = listData.map((item) => {
    var thumbnail = item.thumbnail;
    var title = item.title;
    var content = item.content;
    var style = item.style;
    return `
      <article class="${style}">
        <span class="image">
          <img src="${thumbnail}" alt="" />
        </span>
        <a href="generic.html?id=${item.id}">
          <h2>${title}</h2>
          <div class="content">
            <p>${content}</p>
          </div>
        </a>
      </article>
    `;
  });

  portfolioList.innerHTML = htmls.join("");
}
