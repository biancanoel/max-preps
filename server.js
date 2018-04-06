// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "prepSports";
var collections = ["football"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/scrape", function (req,res){
    request("ttp://www.maxpreps.com/list/stat_leaders.aspx?gendersport=boys,football", function(error, response, html) {
        console.log(html)
        var $ = cheerio.load(html);
        var results = [];
    
        // $("figure.rollover").each(function(i, element) {
          
        //   var imgLink = $(element).find("a").find("img").attr("data-srcset").split(",")[0].split(" ")[0];
    
        //   // Push the image's URL into mongodb
        //   //results.push({ link: imgLink });
        //   //console.log(results)
        //   db.scrapedData.insert({"link": imgLink})
        // })
    
        
      });
})



// Listen on port 3000
app.listen(3000, function() {
    console.log("App running on port 3000!");
  });
  