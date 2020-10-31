const articles = [
  {
    thumbnail: null,
    title: "Article 1",
    abstract: [
      "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
    ],
  },
  {
    thumbnail: null,
    title: "Article 2",
    abstract: [
      "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.",
      "Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.",
      "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod.",
    ],
  },
  {
    thumbnail: null,
    title: "Article 3",
    abstract: [
      "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    ],
  },
];

const renderItem = ({ title, abstract }) => {
  const item = document.createElement("div");
  item.className = "item";

  const image = '<div class="thumbnail-placeholder">Thumbnail</div>';
  const content = `<article class="article">
    <h3>${title}</h3>
    <p>${abstract.join("<br>")}</p>
    <a href="#">View details ≫</a>
  </article>`;
  item.innerHTML = image + content;

  return item;
};

const getShortestColumn = () => {
  let minHeight = Infinity;
  let shortest;
  [...document.getElementsByClassName("column")].forEach((column) => {
    const columnHeight = [...column.children]
      .map((child) => child.offsetHeight)
      .reduce((a, b) => a + b, 0);
    if (columnHeight < minHeight) {
      minHeight = columnHeight;
      shortest = column;
    }
  });
  return shortest;
};

const loadArticles = () => {
  articles.forEach((article) => {
    const item = renderItem(article);
    const column = getShortestColumn();
    column.appendChild(item);
  });
};

document.onload = loadArticles();
