import { API } from './secret.js'

const main = document.querySelector('main');

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
    const res = await fetch(`https://gnews.io/api/v3/search?q=Formula%201&token=${API}`);
    const json = await res.json();
    document.getElementById("article_result").innerHTML = json.articles.map(createArticle).join('\n');
};



function createArticle(article) {
    // let date = new Date(article.publishedAt);
    // var dt_str = date.toDateString();
    return `
       <div class="col-lg-4 col-md-6 col-sm-12 p-2" id="articlee">
                    <a href="${article.url}">
                        <h2>${article.title}</h2>
                        <img src="${article.image}" onerror="this.src='./images/f1_alt_image.png';" class="img-thumbnail rounded py=1" alt="${article.title}">
                        <p>${article.description}</p>
                        <p>${article.publishedAt}</p>
                    </a >
                    </div>
    
    `
}
