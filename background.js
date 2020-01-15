
console.log("I am in the javscript!")

let intervalTime = 6000; // 6 seconds
let areWeLive = false;


//? this works
let isCjLive = setInterval(() => {
    console.log('Its been a minute!');
    fetch("https://api.twitch.tv/helix/streams?user_login=summit1g", {
    headers: {
        "Client-Id": "2zzcft851djzosj8xybtdo5ds0wc05"
    }
    })  .then(res => res.json())
        .then(data => {
            console.log(data);
            //TODO: The setIcon gets called and set everytime, let's not do that
            if(data.data.length && areWeLive === false){
                console.log("Set to live!")
                areWeLive = true;
                chrome.browserAction.setIcon({path: "/images/codingGardenLive_38.png"});
            }else if(!data.data.length && areWeLive == true){
                console.log("Not Live");
                areWeLive = false;
                chrome.browserAction.setIcon({path: "/images/codingGarden_128.png"});
            }
        })
        .catch((error) => console.log(error));
},intervalTime);