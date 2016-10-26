(function() {
  const $ = document.querySelector.bind(document);
  const bg = $('.bgImage');
  const nav = $('nav');
  const quote = $('article');
  const aside = $('aside');

  function handlePageshow(event) {
    window.removeEventListener('pageshow', handlePageshow);

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
  }

  window.addEventListener('pageshow', handlePageshow);
})();
