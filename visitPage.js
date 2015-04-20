console.log(location.href);
var server = chrome.runtime.getManifest()

var title = document.title;
var url = window.location.href;

var visitRequest = new XMLHttpRequest();
var link = server + "/creatures/1/visit/" + url.split("/")[2];
visitRequest.open("PUT",link);
visitRequest.send();
visitRequest.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 204){
    console.log("send the url");
  }
}

var creatureInfo = new XMLHttpRequest();
creatureInfo.open("GET", server + "/creatures/1", true);
creatureInfo.send();

creatureInfo.onreadystatechange = function() {
  var statusImage = document.getElementById('image-result');

  if(this.readyState == 4 && this.status == 200){

    var response = JSON.parse(this.response);
    console.log(response.status);
    console.log(chrome);

    if(response.status == "skills"){
      chrome.browserAction.setIcon({path:"gifs/skill/0003.png"});
    }else if(response.status == "defense"){
      chrome.browserAction.setIcon({path:"gifs/def/0000.png"});
    }else if(response.status == "intelligence"){
      chrome.browserAction.setIcon({path:"gifs/int/0001.png"});
    }else if(response.status == "tired" || response.status == "sleeping"){
      chrome.browserAction.setIcon({path:"gifs/sleep/0000.png"});
    }else if(response.status == "hungry" || response.status == "eating"){
      chrome.browserAction.setIcon({path:"gifs/eat/0002.png"});
    }else{//idle
      chrome.browserAction.setIcon({path:"gifs/neutral/0012.png"});
    }

  }
}
