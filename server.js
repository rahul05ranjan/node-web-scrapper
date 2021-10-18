var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
const axios = require('axios');

// app.get('/scrape', async function (req, res) {
//console.log(req);
let url = 'https://www.brainyquote.com/topics/future-quotes_17'; //req.query.url;
let category_id = '147'; //req.query.category_id;
let password = '9473002010Rkr#';
// Let's scrape Anchorman 2


request(url, async function (error, response, html) {
  if (!error) {
    var $ = cheerio.load(html);

    var title;

    var quotes = [];

    $('.oncl_q').filter(function () {
      let data = $(this);
      title = data.children().first().text().trim();

      let json = { title, category_id, password };
      quotes.push(json);
    })
  }
  //console.log(quotes);
  //quotes.map(async function (val, key) {
  //let reqUrl = 'http://localhost/php/yii-gf/joke/add-custom-joke';
  let reqUrl = 'https://gofugly.in/joke/add-custom-joke';

  //setTimeout(function () {
  //console.log('Sent Title ', val.title, ' Sub category ', val.category_id);

  // fs.writeFile('output.json', JSON.stringify(quotes, null, 4), function (err) {
  //   console.log('File successfully written! - Check your project directory for the output.json file');
  // })

  console.log('Sending request');
  let sent = await axios({
    method: 'post',
    url: reqUrl,
    data: quotes
    // {
    //   title: val.title,
    //   category_id: val.category_id,
    //   password: '9473002010Rkr#'
    // }
  });
  console.log('Response ', sent.data);
  //}, 2000);

  //});





})
// });

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

//app.listen('8081')
console.log('Magic happens on port 8081');
//exports = module.exports = app;
