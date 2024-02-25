function validerDateOfBirth()
{
    var today = new Date();
    var formDate = new Date(document.getElementById("date_naissance").value);
    
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth();
    var todayDay = today.getDate();
    
    var formYear = formDate.getFullYear();
    var formMonth = formDate.getMonth();
    var formDay = formDate.getDate();
    
    if (formYear > todayYear || (formYear === todayYear && (formMonth > todayMonth || (formMonth === todayMonth && formDay >= todayDay)))) {
        alert("La date est supérieure ou égale à la date d'aujourd'hui");
    }
    


    
}