
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
      }, 1000);
      event.preventDefault();
    });
  });
});

function sendmail() {
  dataEmail = $('form.modalform').serializeArray()
  $sender = dataEmail[0].value
  $from = dataEmail[1].value
  $phone = dataEmail[2].value
  $message = dataEmail[3].value
  if(dataEmail[4].value == 'on') {
    $agree = "Sim"
  } else {
    $agree = "Não"
  }
  Email.send({
    SecureToken: "78c3e1e3-ae92-4937-b4f1-9360a77d44c6",
    To: 'gmfm@hotmail.com',
    From: $from,
    Subject: "Contato de " + $sender + " enviado do site.",
    Body: "Nome do contato: " + $sender + ". Telefone: " + $phone + ". Permite enviar contato: " + $agree + " Mensagem: " + $message  
  }).then(
    message => alert(message)
  );

};
