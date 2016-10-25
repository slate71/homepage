document.addEventListener('DOMContentLoaded', function() {
  var bg = document.querySelector('.bgImage');
  var nav = document.querySelector('nav');
  var quote = document.querySelector('article');
  var aside = document.querySelector('aside');

  Velocity(quote,
           {opacity: 1},
           {duration: 500, display: 'flex'});
  Velocity(bg,
           {opacity: .6 },
           {duration: 500, display: 'block'});
  Velocity(nav,
           'slideDown',
           {delay: 500, duration: 500, display: 'flex'});
  Velocity(aside,
           {opacity: 1},
           {duration: 500, display: 'flex'});
});
