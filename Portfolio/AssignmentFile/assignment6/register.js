window.onload = pageLoad;
function pageLoad(){
	var ClickSubmit = document.getElementById("myForm");
    ClickSubmit.onsubmit = validateForm;
}
function validateForm() {
    var result = true;
    var Errormsg = document.getElementById("errormsg");
    var Password = document.forms["myForm"]["password"];
    
    if( Password[0].value != Password[1].value) 
    {
        alert("Password and Retype are not equal");
        Errormsg.textContent = 'Password not macth'
        result = false;
    }

    return result;
}