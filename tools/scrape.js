
const request = require("request");
const cheerio = require("cheerio");


const URL = "https://animalcrossing.fandom.com/wiki/Fish_(New_Horizons)#Northern%20Hemisphere";

request(URL,  (error, response, body) => {
  if (!error) {
    const $ = cheerio.load(body);
    
    const tabs = $(".tabbertab")
    console.log(tabs.length);
  } else {
    console.log("We’ve encountered an error: " + error);
}
});
