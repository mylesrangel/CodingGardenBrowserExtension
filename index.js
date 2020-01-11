
console.log("I am in the javscript!")

let intervalTime = 6000; // 6 seconds

fetch("https://api.twitch.tv/helix/streams?user_login=summit1g", {
  headers: {
    "Client-Id": "2zzcft851djzosj8xybtdo5ds0wc05"
  }
})
    .then(res => res.json())
    .then(data => console.log(data));


//? this works
// let isCjLive = setInterval(() => {
//     console.log("Its been a minute!");
// },intervalTime);