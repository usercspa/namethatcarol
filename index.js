/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("Carol Bot welcomes you");



$.fn.christmas = function() {
  $(this).each(function() {
    $(this).html($(this).text().split("").map(function(v, i) {
      return '<span class="christmas-' + (i % 2 == 0 ? 'gold' : 'blue') + '">' + v + '</span>';
    }).join(""));
  });
};

$(function() { 
  $('h1.christmas').christmas();
});