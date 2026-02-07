import { articleData } from '../data/article_data.js';

/**
 * Create a news article card element
 * @param {Object} article - Article data object
 * @returns {HTMLElement} Article card element
 */
function createArticleCard(article) {
  const card = document.createElement('article');
  card.className = 'news-card';

  // Create image container
  const imageContainer = document.createElement('div');
  imageContainer.className = 'news-card-image';

  if (article.image) {
    const img = document.createElement('img');
    img.src = article.image;
    img.alt = article.title;
    img.loading = 'lazy';
    imageContainer.appendChild(img);
  } else {
    // Fallback placeholder
    const placeholder = document.createElement('div');
    placeholder.className = 'news-card-placeholder';
    placeholder.textContent = '🎿';
    imageContainer.appendChild(placeholder);
  }

  // Create content container
  const content = document.createElement('div');
  content.className = 'news-card-content';

  // Site name and date
  const meta = document.createElement('div');
  meta.className = 'news-card-meta';

  const siteName = document.createElement('span');
  siteName.className = 'news-site-name';
  siteName.textContent = article.siteName;
  meta.appendChild(siteName);

  if (article.publishedDate) {
    const date = document.createElement('span');
    date.className = 'news-date';
    const dateObj = new Date(article.publishedDate);
    date.textContent = dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    meta.appendChild(date);
  }

  content.appendChild(meta);

  // Title
  const title = document.createElement('h3');
  title.textContent = article.title;
  content.appendChild(title);

  // Description
  if (article.description) {
    const description = document.createElement('p');
    description.textContent = article.description;
    content.appendChild(description);
  }

  // Author
  if (article.author) {
    const author = document.createElement('div');
    author.className = 'news-author';
    author.textContent = `By ${article.author}`;
    content.appendChild(author);
  }

  // Read more link
  const link = document.createElement('a');
  link.href = article.url;
  link.className = 'news-link';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.innerHTML = 'Read Article <span>→</span>';
  content.appendChild(link);

  // Assemble card
  card.appendChild(imageContainer);
  card.appendChild(content);

  return card;
}

/**
 * Populate the news grid with article cards
 */
function populateNews() {
  const container = document.getElementById('news-grid');

  if (!container) {
    console.error('News grid container not found');
    return;
  }

  // Clear existing content
  container.innerHTML = '';

  // Create and append cards in array order
  articleData.forEach(article => {
    const card = createArticleCard(article);
    container.appendChild(card);
  });

  console.log(`Loaded ${articleData.length} news article(s)`);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', populateNews);
} else {
  populateNews();
}
