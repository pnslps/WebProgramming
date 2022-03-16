var inputtext = document.getElementById("inputtext");
var topic = document.getElementById("topic1");
var comment1 = document.getElementById("comment1");
var comment2 = document.getElementById("comment2");
var text = 1;

function postFunction() {
    
    input = inputtext.value;
    if(text == 1) {
        topic.innerHTML = input;
        text++;
    }
    else if(text == 2) {
        comment1.innerHTML = input;
        text++;
    }
    else if(text == 3) {
        comment2.innerHTML = input;
        text++;
    }
    else {
        alert("Please enter topic")
    }
    inputtext.value = "";
}

function clearFunction() {
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
}