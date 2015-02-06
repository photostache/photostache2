$(document).ready(function() {
  /* Backstretch Init */

  var bs = $(".backstretch-slider");
  var mn = $(".main-nav");
  var mns = "main-nav-scrolled";
  var hdr = $('header').height();
  var fs = $('.flexslider');
/*
  ts.backstretch([
    "assets/media/slide1.jpg",
    "assets/media/slide2.jpg",
    "assets/media/slide3.jpg",
    "assets/media/slide4.jpg"
  ], {duration: 4000, fade: "normal", centeredX: false, centeredY: false});

  bs.backstretch([
    "assets/media/slide1.jpg",
    "assets/media/slide2.jpg",
    "assets/media/slide3.jpg",
    "assets/media/slide4.jpg"
  ], {duration: 4000, fade: "normal"});
/*
  /* Set height of div is Window viewport if it exists*/
/*
  if(bs.length){
    bs.height($(window).height() - (bs.offset().top));
  }
*/
/*
  if(fs.length){
    fs.height($(window).height() - (fs.offset().top));
  }


  function resizeWindow(e){
    var slideshowHeight = $(window).height() - $('#header').outerHeight();
    if( $('body').length > 0 ) {
      $('#backstretch-slider, .backstretch-slider').height(slideshowHeight);
    }
    if( $('body').length > 0 ) {
      fs.height(slideshowHeight);
    }
  }

  $(window).bind('resize', resizeWindow);
  resizeWindow();
*/
  /* WOW.js Init */

  new WOW().init();

  /* Sticky Navi */

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });

 /* Nano Gallery */

 /* Main Gallery Nano Gallery */

    $("#photostacheGallery").nanoGallery({
      thumbnailWidth: 'auto',
      thumbnailHeight: 250,
      userID: '103904153101772789154',
      kind:'picasa',
      album: '6112210826813885713&authkey=CN6koOK66Z3KAw',
      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
      theme: 'light',
      thumbnailGutterWidth : 0,
      thumbnailGutterHeight : 0,
      i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' },
      thumbnailLazyLoad: true
    });

    $("#pastEvents").nanoGallery({
      thumbnailWidth: 'auto',
      thumbnailHeight: 250,
      userID: '103904153101772789154',
      kind:'picasa',
      album: '6112228930804505729&authkey=CNy0n5rN-LWcvgE',
      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
      theme: 'light',
      thumbnailGutterWidth : 0,
      thumbnailGutterHeight : 0,
      i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' },
      thumbnailLazyLoad: true
    });


  $("#nanoGallery3").nanoGallery({
      thumbnailWidth: 'auto',
      thumbnailHeight: 250,
      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
      theme: 'light',
      thumbnailGutterWidth : 0,
      thumbnailGutterHeight : 0,
      i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' },
      thumbnailLazyLoad: true
  });

  /* Example Nano Galleries */

  $(".nanoGallery").nanoGallery({
      thumbnailWidth: 'auto',
      thumbnailHeight: 250,
      userID: '111186676244625461692', kind:'picasa',
      album: '5911347863561293937',
      colorScheme: 'none',
      thumbnailHoverEffect: [{ name: 'labelAppear75', duration: 300 }],
      theme: 'light',
      thumbnailGutterWidth : 0,
      thumbnailGutterHeight : 0,
      i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
      thumbnailLabel: { display: true, position: 'overImageOnMiddle', align: 'center' },
      thumbnailLazyLoad: true
    });

   var sliderOptions = {
    animation: "fade",
    easing: "swing",
    slideshow: true,
    slideshowSpeed: 3500,
    animationSpeed: 300,
   };

   fs.flexslider(sliderOptions);

   /* responsive nav */
});