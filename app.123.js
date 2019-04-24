import { API } from './secret.js'

const main = document.querySelector('main');

window.location.reload(true)

window.addEventListener('load', e => {
    updateNews();

    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('sw.js');
            console.log('SW registered')
        } catch (error) {
            console.log('SW registration failed')
        }
    }
});

async function updateNews() {
    const res = await fetch(`https://newsapi.org/v2/everything?q=f1&sources=google-news,bbc-news&language=en&sorted=publishedAt&apiKey=${API}`);
    const json = await res.json();
    main.innerHTML = json.articles.map(createArticle).join('\n');
};



function createArticle(article) {
    let date = new Date(article.publishedAt);
    var dt_str = date.toDateString();
    return `
    <div class="article">
      <a href="${article.url}">
        <h2>${article.title}</h2>
        <img src="${article.urlToImage}" alt="${article.title}">
        <p>${article.description}</p>
        <p>${article.description}</p>
        <p>${dt_str}</p>
      </a >
    </div >
        `
}
