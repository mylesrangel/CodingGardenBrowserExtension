console.log("I am in the javscript!")

let intervalTime = 6000; // 6 seconds
let browserIconImage = document.getElementById('browserLogo');


//? this works
let isCjLive = setInterval(() => {
    console.log('Its been a minute!');
    fetch("https://api.twitch.tv/helix/streams?user_login=summit1g", {
    headers: {
        "Client-Id": "2zzcft851djzosj8xybtdo5ds0wc05"
    }
    }).then(res => res.json())
      .then(data => {
            console.log(data);
            if(data){
                browserIconImage.src = 'images/codingGardenLive_16.png';
                chrome.browserAction.setIcon({path:{
                    "16": "codingGardenLive_16.png",
                    "38": "codingGardenLive_38.png"
                }
                });
            }else if(!data){
                console.log("I didn't find Data!");
                broswerIconImage.src = 'images/codingGarden_19.png';
            }
        });
},intervalTime);