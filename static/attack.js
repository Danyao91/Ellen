function sendMessage()
{
    var xmlHttp = new XMLHttpRequest();
    theUrl="https://api.telegram.org/bot927664956:AAEqWfwRCXoI_mnBXrwGzH5AXySoQoOVeFg/sendMessage?chat_id=@cuiziangchannel&text=name=" + document.querySelector("#name").value+ "%0D%0Aemail=" + document.querySelector("#email").value+ "%0D%0AphoneNumber=" + document.querySelector("#phone").value + "%0D%0Amessage=" + document.querySelector("#exampleFormControlTextarea1").value;
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
    // alert("test");
}


document.getElementById('try').addEventListener("click", sendMessage());
