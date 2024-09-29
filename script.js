// script.js
const apiKey = 'a2c70f797942441fbb737efb483fa211'; // Replace with your News API key
const newsContainer = document.getElementById('news-container');

async function fetchNews() {
    const response = await fetch(`
https://newsapi.org/v2/everything?q=apple&from=2024-09-28&to=2024-09-28&sortBy=popularity&apiKey=a2c70f797942441fbb737efb483fa211`);
    const data = await response.json();
    displayNews(data.articles);
}

function displayNews(articles) {
    newsContainer.innerHTML = ''; // Clear the container first
    articles.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';

        newsCard.innerHTML = `
            <a href="${article.url}" target="_blank">
             <img src="${article.urlToImage}" alt="News Image">
            </a>
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">
             Read More
            </a>
        `;
        newsContainer.appendChild(newsCard);
    });
}

fetchNews();
