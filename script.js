$(document).ready(function(){
    function contact(form) {
        let name = document.form["contacts"]["name"].value;
        let email = document.form["contacts"]["email"].value;
        let message = document.form["contacts"]["message"].value;
        alert("Hello! " + name + "," + " We have received your message. Thank you for reaching out to us. ");
    }
}
