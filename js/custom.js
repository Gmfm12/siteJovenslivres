
$(function () {

  // MENU
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  // AOS ANIMATION
  AOS.init({
    disable: 'mobile',
    duration: 800,
    anchorPlacement: 'center-bottom'
  });


  // SMOOTHSCROLL NAVBAR
  $(function () {
    $('.navbar a, .hero-text a').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 10);
      event.preventDefault();
    });
  });
});

// mascara telefone input
var behavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
  options = {
    onKeyPress: function (val, e, field, options) {
      field.mask(behavior.apply({}, arguments), options);
    }
  };
$('.phone').mask(behavior, options);

//função sendmail ajax
function sendmail() {
  dataEmail = $('form.modalform').serializeArray()
  $.ajax({
    type: "post",
    url: "http://jjlapi.ezyro.com/crjljfuncionalidades/sendmail.
    data: dataEmail,
    success: function (response) {
      alert(response)
      $('form :input').val('');
      $('#membershipForm').modal('hide')
    }
  });
};

document.getElementById("year").innerHTML = new Date().getFullYear();


