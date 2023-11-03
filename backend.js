
import API_KEY from "./config";
async function fetchArticle() {
    const apiKey = API_KEY;
    const endpoint = 'https://api.sandbox.uscannenberg.arcpublishing.com/site/v3/website/';
    const website = 'annenbergmedia';
    const url = '/2023/11/02/la-hotwheels-hosts-sixth-annual-wheelchair-basketball-tournament/';
  
    try {
      const response = await fetch(`${endpoint}?website=${website}&website_url=${url}`, {
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

  
  document.getElementById('summarizeButton').addEventListener('click', function() {
    const numberOfArticles = document.getElementById('numberArticles').value;
    console.log('Number of articles to query:', numberOfArticles);
    fetchArticle(); // call fetchArticle function when the button is clicked
});