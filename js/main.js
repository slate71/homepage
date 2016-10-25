document.addEventListener('DOMContentLoaded', function() {
  var bg = document.querySelector('.bgImage');
  var nav = document.querySelector('nav');
  var quote = document.querySelector('article');
  var aside = document.querySelector('aside');

  // Don't animate until image is loaded... optimize image
  Velocity(quote,
           {opacity: 1},
           {delay: 500, duration: 1000, display: 'flex'});
  Velocity(bg,
           {opacity: .6 },
           {delay: 500, duration: 1000, display: 'block'})
    .then(() => Velocity(nav,
                         'slideDown',
                         {delay: 500, duration: 500, display: 'flex'}));
  Velocity(aside,
           {opacity: 1},
           {delay: 500, duration: 1000, display: 'flex'});
});
