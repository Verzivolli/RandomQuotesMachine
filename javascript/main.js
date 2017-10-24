/* Special thanks to 4skinSkywalker for creating his quotes database in github */

/* database link:
https://github.com/4skinSkywalker/Database-Quotes-JSON/blob/master/quotes.json

https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json
*/

/* Schema:
{
"quoteText": String,
"quoteAuthor": String
}
*/

/* functions */
function randomInt(max) {
return Math.floor(Math.random() * (max + 1));
};

function randomQuote(){
return quotesArr[randomInt(quotesArr.length)];
}

var quotesArr = [];
var quteTextContainer = ".quote"
var quteAuthorContainer = ".author"

$.getJSON("https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json", function(json) {

$.each(json, function(i, val) {
quotesArr.push([val.quoteText, val.quoteAuthor]);
});
$(quteTextContainer).html(randomQuote()[0]);
$(quteAuthorContainer).html(randomQuote()[1]);
});

$("#getMessage").click(function() {
//var tmpStr = randomInd(quotesArr.length);
$(quteTextContainer).html(randomQuote()[0]);
$(quteAuthorContainer).html(randomQuote()[1]);
});


/*
//====== Testing Json ======
var jqxhr = $.getJSON( "https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json", function() {
  $(".test").html("succes");
})
  .done(function() {
    $(".test").html("done");
  })
  .fail(function() {
    $(".test").html("error");
  });
*/


/* must be responsive */
/*
var cwidth = $(".contanier").width()
var bwidth = $("body").width()
var spacewidth = bwidth - cwidth / bwidth;
$(".contanier").css("left",spacewidth + "%");
*/