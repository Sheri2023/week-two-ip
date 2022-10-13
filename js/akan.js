// development logic:
var akan = function(y, m, d ,g){
constfemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var days = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d == new Date(y, --m, d);
if (g === "female") {
return d && femalenames[d.getday()];
} else {
    return d && malenames[d.getDay()];
}
}
//user logic:
$(document).ready(function) {
$("form#form").submit(function(event) {
    event.preventDefault();
var y = parseInt ($ ("#year").val());
var m = parseInt ($("#month").val());
var d = parseInt ($("#date").val());
var g = $("input:radio[name-gender]:checked").val();
var result =akan(y,m,d,g);
alert("your akan name is: " + result);
//refresh page
document.getElementById("form").reset();
});
});
