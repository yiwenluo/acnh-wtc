
const rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require('fs');

const BASE_URL = "https://www.polygon.com/animal-crossing-new-horizons-switch-acnh-guide";
const FISH_URL = `${BASE_URL}/2020/3/23/21190775/fish-locations-times-month-day-list-critterpedia`;
const BUG_URL = `${BASE_URL}/2020/3/24/21191276/insect-bug-locations-times-month-day-list-critterpedia`;
const SEA_CREATURE_URL = `${BASE_URL}/2020/7/2/21307259/diving-critters-sea-creatures-critterpedia-list`;

const DATA_DIR = "./src/data";
const FISH_FILE_PATH = `${DATA_DIR}/fish.js`;
const BUGS_FILE_PATH = `${DATA_DIR}/bugs.js`;
const SEA_CREATURE_FILE_PATH = `${DATA_DIR}/sea.js`;

function getRows(url) {
  return rp(url).then((html) => {
    if (html) {
      const $ = cheerio.load(html);
      const rows = $(".p-data-table > tbody > tr");
      console.log(`Found ${rows.length} rows`);
      return [rows, $];
    }
  });
}

function scrapeFish() {
  getRows(FISH_URL).then(([rows, $]) => {
    if (rows) {
      const fishList = [];
      rows.each(function (index, element) {
        const cells = $(this).children('td');
        fishList.push({
          "id": $(cells[0]).text(),
          "name": $(cells[1]).text(),
          "location": $(cells[2]).text(),
          "size": $(cells[3]).text(),
          "value": $(cells[4]).text(),
          "time": $(cells[5]).text(),
          "month": $(cells[6]).text(),
        });
      });
      fs.writeFile(FISH_FILE_PATH,
        `export const DATA_FISH = ${JSON.stringify(fishList)};`, (error) => {
          if (error) {
            console.error(error);
          }
        });
    } else {
      console.log("Empty rows");
    }
  });
}

function scrapeBugs() {
  getRows(BUG_URL).then(([rows, $]) => {
    if (rows) {
      const bugList = [];
      rows.each(function (index, element) {
        const cells = $(this).children('td');
        bugList.push({
          "id": $(cells[0]).text(),
          "name": $(cells[1]).text(),
          "location": $(cells[2]).text(),
          "value": $(cells[3]).text(),
          "time": $(cells[4]).text(),
          "month": $(cells[5]).text(),
        });
      });
      fs.writeFile(BUGS_FILE_PATH,
        `export const DATA_BUGS = ${JSON.stringify(bugList)};`, (error) => {
          if (error) {
            console.error(error);
          }
        });
    } else {
      console.log("Empty rows");
    }
  });
}

function scrapeSeaCreatures() {
  getRows(SEA_CREATURE_URL).then(([rows, $]) => {
    if (rows) {
      const seaList = [];
      rows.each(function (index, element) {
        const cells = $(this).children('td');
        seaList.push({
          "id": $(cells[0]).text(),
          "name": $(cells[1]).text(),
          "value": $(cells[2]).text(),
          "time": $(cells[3]).text(),
          "month": $(cells[4]).text(),
        });
      });
      fs.writeFile(SEA_CREATURE_FILE_PATH,
        `export const DATA_SEA_CREATURES = ${JSON.stringify(seaList)};`, 
        (error) => {
          if (error) {
            console.error(error);
          }
        });
    } else {
      console.log("Empty rows");
    }
  });
}

function main() {
  scrapeFish();
  scrapeBugs();
  scrapeSeaCreatures();
}

main();


