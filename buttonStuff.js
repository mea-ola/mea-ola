var server = "http://129.21.64.19:3000";
// var server = "http://private-anon-bbd6718d7-meaola.apiary-mock.com/";
document.addEventListener('DOMContentLoaded', function() {

	  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;
    var host = url.split("/")[2];
    var visitRequest = new XMLHttpRequest();
    var link = server + "/creatures/1/visit/" + host;
    visitRequest.open("PUT", link);
    visitRequest.send();
    visitRequest.onreadystatechange = function() {
	    if(this.readyState == 4 && this.status == 204){
	    	console.log(host);
	    	console.log("sent the url");
	    }
	}


    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');


  });

	var feed = document.getElementById('feed-button');
	var sleep = document.getElementById('sleep-button');
	feed.addEventListener("click", feedCreature);
	sleep.addEventListener("click", letCreatureSleep);

	function feedCreature(){
		var meaolaFeed = new XMLHttpRequest();
		var statusImage = document.getElementById('image-result');
		meaolaFeed.open("PUT", server + "/creatures/1/feed");
		meaolaFeed.send();
		meaolaFeed.onreadystatechange = function() {

			if(this.readyState == 4 && this.status == 204){
	 			console.log("I have fed the mea ola");
	 			statusImage.setAttribute("src", "./gifs/eatB/eat.gif");
	 		}
 		}
	}
	function letCreatureSleep(){
		var meaolaSleep = new XMLHttpRequest();
		var statusImage = document.getElementById('image-result');
		meaolaSleep.open("PUT", server + "/creatures/1/rest");
		meaolaSleep.send();

		meaolaSleep.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 204){
		 			console.log("The mea ola is sleeping");
		 			statusImage.setAttribute("src", "./gifs/sleepB/sleep.gif");
		 		}
	 	}

	}

	var creatureInfo = new XMLHttpRequest();
	creatureInfo.open("GET", server + "/creatures/1", true);
	creatureInfo.send();

	creatureInfo.onreadystatechange = function() {
		var statusImage = document.getElementById('image-result');

		if(this.readyState == 4 && this.status == 200){

			var response = JSON.parse(this.response);
			console.log(response);
			if(response.status == "skills"){
				chrome.browserAction.setIcon({path:"gifs/skill/0003.png"});
				statusImage.setAttribute("src", "./gifs/skillB/skill.gif");
			}else if(response.status == "defense"){
				chrome.browserAction.setIcon({path:"gifs/def/0000.png"});
				statusImage.setAttribute("src", "./gifs/defB/def.gif");
			}else if(response.status == "intelligence"){
				chrome.browserAction.setIcon({path:"gifs/int/0001.png"});
			}else if(response.status == "tired" || response.status == "sleeping"){
				chrome.browserAction.setIcon({path:"gifs/sleep/0000.png"});
				if(response.status == "sleeping"){
					statusImage.setAttribute("src", "./gifs/sleepB/sleep.gif");
				}else{
					statusImage.setAttribute("src", "./gifs/tiredB/tired.gif");
				}
			}else if(response.status == "hungry" || response.status == "eating"){
				chrome.browserAction.setIcon({path:"gifs/eat/0002.png"});
				if(response.status == "hungry"){
					statusImage.setAttribute("src", "./gifs/hungryB/hungry.gif");
				}else{
					statusImage.setAttribute("src", "./gifs/eatB/eat.gif");
				}
			}else{//idle
				chrome.browserAction.setIcon({path:"gifs/neutral/0012.png"});
				statusImage.setAttribute("src", "./gifs/neutralB/neutral.gif");
			}


			var skillValue = document.getElementById("skill-value");
			skillValue.innerHTML = response.stats.skills;

			var defenseValue = document.getElementById("defense-value");
			defenseValue.innerHTML = response.stats.defense;

			var intelligenceValue = document.getElementById("intelligence-value");
			intelligenceValue.innerHTML = response.stats.intelligence;

			var name= document.getElementById("name");
			name.innerHTML = response.name;

			var status = document.getElementById("status");
			// status.innerHTML = response.hunger;

		}
	}

});
