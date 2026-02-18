
async function kuldo_fetch(url, szotar){
    const response = await fetch(url, {
        method:'POST',
        headers:{
            'Content-type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body: JSON.stringify(szotar)
    }
    );
    const json_promise = await response.json();
    return json_promise;
}
/*function kuldes(beerkezett){
    let felvagyle = beerkezett;
    return felvagyle;
}*/
const on = document.getElementById("felkapcs");
on.addEventListener("click", function () {
    alert("led felkapcsolva!");
    let kuldendo = "on";
    kuldo_fetch("app_ledkapcsolas/index.htm",kuldendo);
});
const off = document.getElementById("lekapcs");
off.addEventListener("click", function () {
    alert("led lekapcsolva!");
    let kuldendo = { allapot: "off"};
    kuldo_fetch("", kuldendo);
});