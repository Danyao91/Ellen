setTimeout(()=> {
    if (window.location.href === 'http://mycavisa.com/') {
        // window.location.href = "/index"
        console.log("debug");
        document.getElementsByClassName("nav-link")[7].click();
    }
}, 2000);