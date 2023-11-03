const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const API_KEY = require('./config');


async function fetchArticle() {
  const apiKey = API_KEY;
  const endpoint = 'https://api.sandbox.uscannenberg.arcpublishing.com/site/v3/website';
  const website = 'annenbergmedia';
  const contentAlias = 'latest-news-collection';
  const size = 10;  // replace with the number of articles you want to fetch
  console.log(API_KEY)
  try {
    const response = await fetch(`${endpoint}?website=${website}&size=${size}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    displayArticle(data);
  } catch (error) {
    console.error('An error occurred while fetching the article:', error);
  }
}

function displayArticle(article) {
  console.log(JSON.stringify(article, null, 2));
}

fetchArticle();
