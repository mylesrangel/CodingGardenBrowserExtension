
console.log("I am in the javscript!")

//TODO: Need to set this to options valuee
let intervalTime = 6000; // 6 seconds
let areWeLive = false;


///NOTE: periodInMinutes is equal to setInterval && delayInMinutes is equal to setTimeout
///NOTE: when extension is loaded 'unpacked' there is no limit to how often the periodInMinutes can be otherwise 1 min is the limit
chrome.alarms.create("isCjLive", {periodInMinutes: 1});


chrome.alarms.onAlarm.addListener((alarm) =>{
    console.log("its been 1 Minute!", alarm);

    fetch("https://api.twitch.tv/helix/streams?user_login=chocoTaco", {
    headers: {
        "Client-Id": "2zzcft851djzosj8xybtdo5ds0wc05"
    }
    })  .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.data.length && areWeLive === false){
                console.log("Set to live!")
                areWeLive = true;
                ///TODO: Fix the image sizes to be the same
                chrome.browserAction.setIcon({path: "/images/codingGardenLive_38.png"});
            }else if(!data.data.length && areWeLive === true){
                console.log("Not Live");
                areWeLive = false;
                chrome.browserAction.setIcon({path: "/images/codingGarden_128.png"});
            }
        })
        .catch((error) => console.log(error));
})

// //? this works
// let isCjLive = setInterval(() => {
//     console.log('Its been a minute!');
//     fetch("https://api.twitch.tv/helix/streams?user_login=chocoTaco", {
//     headers: {
//         "Client-Id": "2zzcft851djzosj8xybtdo5ds0wc05"
//     }
//     })  .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if(data.data.length && areWeLive === false){
//                 console.log("Set to live!")
//                 areWeLive = true;
//                 chrome.browserAction.setIcon({path: "/images/codingGardenLive_38.png"});
//             }else if(!data.data.length && areWeLive === true){
//                 console.log("Not Live");
//                 areWeLive = false;
//                 chrome.browserAction.setIcon({path: "/images/codingGarden_128.png"});
//             }
//         })
//         .catch((error) => console.log(error));
// },intervalTime);