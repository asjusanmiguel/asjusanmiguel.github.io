$("#btnSend").click(function () {

  var parameters = {};
  parameters.names = $("#names").val();
  parameters.phone = $("#phone").val();


  $.ajax({
    url: "https://formspree.io/f/xvovzvjp",
    method: "POST",
    dataType: "json",
    data: {
      email: "",
      message: "",
      camisetas:

    }
  });


});