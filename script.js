$("#contact").submit(function (event) {
    event.preventDefault();
    var name1 = $("#form1").val();
    var email1 = $("#form2").val();
    var message1 = $("#form3").val();
    alert("Hello! " + name1 + "," + " We have received your message. Thank you for reaching out to us. ");

});