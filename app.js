var API_KEY = "94435236AF045EA59977329556FD4B7D";
var Steam_id = "1100001164e24b1";

var API_Stats = `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=740&key=${API_KEY}&steamid=${Steam_id}`;

var API_stats_data;
/*
var xhr = new XMLHttpRequest();

xhr.open("GET", API_Stats, true);
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    API_stats_data = xhr.responseType;
    console.log(API_stats_data);
  }
};*/

/* = fetch(API_Stats);

console.log(API_stats_data);
*/
