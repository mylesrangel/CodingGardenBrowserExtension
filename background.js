

let areWeLive = false;

chrome.storage.sync.get(["interval"], (data)=>{
    chrome.alarms.create("isCjLive", {periodInMinutes: parseInt(data.interval)});
});



///NOTE: periodInMinutes is equal to setInterval && delayInMinutes is equal to setTimeout
///NOTE: when extension is loaded 'unpacked' there is no limit to how often the periodInMinutes can be otherwise 1 min is the limit
chrome.alarms.onAlarm.addListener((alarm) =>{

    fetch("https://api.twitch.tv/helix/streams?user_login=codingGarden", {
    headers: {
        "Client-Id": "2zzcft851djzosj8xybtdo5ds0wc05"
    }
    })  .then(res => res.json())
        .then(data => {
            if(data.data.length && areWeLive === false){
                areWeLive = true;
                chrome.browserAction.setIcon({path: "/images/codingGardenLive_38.png"});
            }else if(!data.data.length && areWeLive === true){
                areWeLive = false;
                chrome.browserAction.setIcon({path: "/images/codingGarden_128.png"});
            }
        })
        .catch((error) => console.log(error));
});