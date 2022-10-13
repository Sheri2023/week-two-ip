// development logic:
var akan = function(y, m, d ,g){
    const FEMALE_NAMES = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const MALE_NAMES = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var days = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(y, --m, d);
    if (g.toString().toLowerCase() === "female") {
        return FEMALE_NAMES[d.getDay()];
    } else {
        return MALE_NAMES[d.getDay()];
    }
  }
  //user logic:
    console.log(g)
  $(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        var y = parseInt ($ ("#year").val());
        var m = parseInt ($("#month").val());
        var d = parseInt ($("#date").val());
        var g = $("input[type='radio'][name='gender']:checked").val();        
        var result =akan(y,m,d,g);
  
        alert("your akan name is: " + result);
        //refresh page
        document.getElementById("form").reset();
    });
  });