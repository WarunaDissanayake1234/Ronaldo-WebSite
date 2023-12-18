function myFunction() {
    var name = document.getElementById("namefield").value;
    var email = document.getElementById("emailfield").value;
    var comments = document.getElementById("comments").value;
    var radioBad = document.getElementById("bad");
    var radioNeutral = document.getElementById("neutral");
    var radioGood = document.getElementById("good");


    if (radioBad.checked == true) {
        var radioValue = "Bad";
    } else if (radioNeutral.checked == true) {
        var radioValue = "Neutral";
    } else if (radioGood.checked == true) {
        var radioValue = "Good";
    }
    if (name == "" || email == "" || comments == "") {
        alert("You cannot leave a field empty");
    } else {
        newWindow = window.open('', 'NewWin', 'toolbar=no,status=no,width=300,height=200')
    
        displayMsg = "Hello " + name + ", you said " + comments + " and you rated our website " + radioValue;
        newWindow.document.write(displayMsg);
    }
}
