function sendMessage()
{
    var xmlHttp = new XMLHttpRequest();
    theUrl="https://api.telegram.org/bot927664956:AAEqWfwRCXoI_mnBXrwGzH5AXySoQoOVeFg/sendMessage?chat_id=@cuiziangchannel&text=name=" + document.getElementById('name').value+ "email=" + document.getElementById('email').value+ "phoneNumber=" + document.getElementById('phone').value + "message=" + document.getElementById('exampleFormControlTextarea1').value;
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}