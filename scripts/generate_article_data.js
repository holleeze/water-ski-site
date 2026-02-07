// generate_article_data.js
import { articles } from '../data/data.js';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import fs from 'fs';

const PATH = './data/article_data.js';

/**
 * Fetch metadata from a URL
 * @param {string} url 
 * @returns {Promise<Object>}
 */
async function fetchMetadata(url) {
  try {
    console.log(`Fetching: ${url}`);

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // Extract metadata with fallbacks
    const metadata = {
      url: url,
      title: $('meta[property="og:title"]').attr('content') ||
        $('meta[name="twitter:title"]').attr('content') ||
        $('title').text() ||
        'No title found',
      description: $('meta[property="og:description"]').attr('content') ||
        $('meta[name="twitter:description"]').attr('content') ||
        $('meta[name="description"]').attr('content') ||
        '',
      image: $('meta[property="og:image"]').attr('content') ||
        $('meta[name="twitter:image"]').attr('content') ||
        '',
      author: $('meta[name="author"]').attr('content') ||
        $('meta[property="article:author"]').attr('content') ||
        '',
      publishedDate: $('meta[property="article:published_time"]').attr('content') ||
        $('meta[name="publish-date"]').attr('content') ||
        '',
      siteName: $('meta[property="og:site_name"]').attr('content') ||
        new URL(url).hostname,
      fetchedAt: new Date().toISOString()
    };

    console.log(`✓ Success: ${metadata.title}`);
    return metadata;

  } catch (error) {
    console.error(`✗ Failed to fetch ${url}: ${error.message}`);
    return {
      url: url,
      title: 'Failed to fetch metadata',
      description: '',
      image: '',
      author: '',
      publishedDate: '',
      siteName: new URL(url).hostname,
      error: error.message,
      fetchedAt: new Date().toISOString()
    };
  }
}

/**
 * Load existing article data to avoid re-fetching
 */
function loadExistingData() {
  console.log(`Trying to read from: ${PATH}`);
  console.log(`Absolute path: ${fs.realpathSync('.') + '/' + PATH}`);
  try {
    const data = fs.readFileSync(PATH, 'utf8');
    // Extract the array from the export statement
    const match = data.match(/export const articleData = (\[[\s\S]*\]);/);
    if (match) {
      return JSON.parse(match[1]);
    }
  } catch (error) {
    console.log('No existing article_data.js found, will create new one');
  }
  return [];
}

/**
 * Main function
 */
async function generateArticleData() {
  console.log('Starting metadata fetch...\n');

  const existingData = loadExistingData();
  console.log(`Loaded ${existingData.length} existing articles`);
  console.log('Existing URLs:', existingData.map(a => a.url));

  const existingUrls = new Set(existingData.map(a => a.url));

  const articleData = [...existingData];

  // Only fetch new URLs
  const newArticles = articles.filter(a => !existingUrls.has(a.url));
  console.log(`Total articles in data.js: ${articles.length}`);
  console.log(`New articles to fetch: ${newArticles.length}`);

  if (newArticles.length === 0) {
    console.log('No new articles to fetch!');
  } else {
    console.log(`Fetching ${newArticles.length} new article(s)...\n`);

    for (const article of newArticles) {
      const metadata = await fetchMetadata(article.url);
      articleData.push(metadata);

      // Be polite - wait a bit between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  // Generate the output file
  const output = `/**
 * Auto-generated article metadata
 * Generated: ${new Date().toISOString()}
 * DO NOT EDIT MANUALLY - Run generate_article_data.js instead
 */

/**
 * @typedef {Object} ArticleData
 * @property {string} url - URL to the news article
 * @property {string} title - Article title
 * @property {string} description - Article description/summary
 * @property {string} image - URL to article image
 * @property {string} author - Article author
 * @property {string} publishedDate - Publication date
 * @property {string} siteName - Name of the publication
 * @property {string} fetchedAt - When metadata was fetched
 * @property {string} [error] - Error message if fetch failed
 */

/**
 * Enriched article data with metadata
 * @type {ArticleData[]}
 */
export const articleData = ${JSON.stringify(articleData, null, 2)};
`;

  // Create directory if it doesn't exist
  const dir = PATH.substring(0, PATH.lastIndexOf('/'));
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(PATH, output);
  console.log(`\n✓ Generated article_data.js with ${articleData.length} article(s)`);
}

generateArticleData();
