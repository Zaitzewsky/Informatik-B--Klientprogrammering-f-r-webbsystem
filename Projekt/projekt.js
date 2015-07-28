$(document).ready(function(){

$('#submit').click(validate);


function validate() {
    var a = document.getElementById('valideraAmne');

    var m = document.getElementById('valideraMail');

    var t = document.getElementById('valideraTextArea');

if (a.value.length < 4) {
 alert("Ditt ämne måste bestå av fyra tecken eller mer!");
 a.focus();
 return false;
}
else if (!m.value.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,3}\b/)) {
    alert("E-postadressen måste se ut som följande exempel@exempelsida.com");
    m.focus();
    return false;
}
else if (t.value.length < 1) {
	alert("Din fråga måste vara större än ett tecken!")
	t.focus();
    return false;
}
else {
     $.ajax({
        url: 'http://ofcourse.oru.se/~IK2009/contactform/contact_form.php',
        type: 'GET',
        success: function(msg) {
            alert(msg);
            $('#valideraAmne').val('');
            $('#valideraMail').val('');
            $('#valideraTextArea').val('');
        },
        error: function() {
            alert('Nu var det något som gick fel :('); 
        }       
    });
    return true;
}

}

});