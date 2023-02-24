document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let inputNameValue = document.getElementById("name").value;
    let inputEmailValue = document.getElementById("email").value;
    let inputMessageValue = document.getElementById("message").value;


    if(inputNameValue == ""){
        document.getElementById("nameValidation").innerText = "Name cannot be blank";
        return false;
    }else if(inputNameValue.length < 4){
        document.getElementById("nameValidation").innerText = "Name must contain more than 3 characters";
        return false;
    }else{
        document.getElementById("nameValidation").innerText = "Valid Name";
    }

    if(inputEmailValue == ""){
        document.getElementById("emailValidation").innerText = "Email cannot be blank";
        return false;
    }else if(inputEmailValue.split("@").length == 1 || inputEmailValue.split("@").length > 2){
        document.getElementById("emailValidation").innerText = "Email must contain one @";
        return false;
    }else if(!inputEmailValue.split("@")[1].includes(".com")){
        document.getElementById("emailValidation").innerText = "Email must contain .com after @";
        return false;
    }else{
        document.getElementById("emailValidation").innerText = "Valid Email";
    }

    if(inputMessageValue == ""){
        document.getElementById("messageValidation").innerText = "Message cannot be blank";
        return false;
    }else if(inputMessageValue.split(' ').length < 4){
        document.getElementById("messageValidation").innerText = "Message must contain more than 3 words";
        return false;
    }else{
        document.getElementById("messageValidation").innerText = "Valid Message";
    }
    alert("Thank you for your message!");
    return true;
});