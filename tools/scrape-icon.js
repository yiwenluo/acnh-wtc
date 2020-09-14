
const axios = require('axios');
const cheerio = require("cheerio");
const fs = require('fs');

const BASE_URL = "https://animalcrossing.fandom.com/wiki";
const FISH_URL = `${BASE_URL}/Fish_(New_Horizons)`;
const BUG_URL = `${BASE_URL}/Bugs_(New_Horizons)`;
const SEA_CREATURE_URL = `${BASE_URL}/Deep-sea_creatures_(New_Horizons)`;

const DATA_DIR = "./src/data";
const FISH_FILE_PATH = `${DATA_DIR}/fish-icon.js`;
const BUGS_FILE_PATH = `${DATA_DIR}/bugs-icon.js`;
const SEA_CREATURE_FILE_PATH = `${DATA_DIR}/sea-icon.js`;

function getImgs(url) {
  return axios.get(url).then((response) => {
    if (response.status === 200) {
      const html = response.data;
      if (html) {
        const $ = cheerio.load(html);
        const imgs = $(
          "div[title='Northern Hemisphere'] .image-thumbnail > img");
        console.log(`Found ${imgs.length} rows`);
        return [imgs, $];
      } else {
        console.error("Empty HTML");
      }
    } else {
      console.error("Request error", response.status);
    }
  });
}

function getAssetData(url, name) {
  const assetUrl = url.replace(/\/64\?.*/, '/96');
  const assetName = name.replace('NH-Icon-', '');
  return [assetUrl, assetName];
}

function download(url, filename) {
  axios({
    method: 'get',
    url: url,
    responseType: 'stream'
  })
  .then((response) => {
    response.data.pipe(fs.createWriteStream(filename))
  })
  .catch((error) => {
    console.error(error.response.status, url);
  });
}

function scrape(pageUrl, assetDir) {
  getImgs(pageUrl).then(([imgs, $]) => {
    if (imgs) {
      const urls = [];
      imgs.each(function() {
        const url = $(this).attr('data-src');
        const name = $(this).attr('alt');
        const [assetUrl, assetName] = getAssetData(url, name);
        download(assetUrl, `${assetDir}/${assetName}.png`);
      });
    }
  });
}

function main() {
  const basePath = './public/assets/';
  scrape(FISH_URL, `${basePath}fish`);
  scrape(BUG_URL, `${basePath}bug`);
  scrape(SEA_CREATURE_URL, `${basePath}sea`);
}

main();
