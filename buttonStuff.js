var server = chrome.runtime.getManifest().server;

document.addEventListener('DOMContentLoaded', function() {

	var feed = document.getElementById('feed-button');
	var sleep = document.getElementById('sleep-button');
	feed.addEventListener("click", feedCreature);
	sleep.addEventListener("click", letCreatureSleep);

	function feedCreature(){
		var meaolaFeed = new XMLHttpRequest();
		var statusImage = document.getElementById('image-result');
		meaolaFeed.open("PUT", server + "creatures/1/feed");
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
		meaolaSleep.open("PUT", server + "creatures/1/rest");
		meaolaSleep.send();

		meaolaSleep.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 204){
		 			console.log("The mea ola is sleeping");
		 			statusImage.setAttribute("src", "./gifs/sleepB/sleep.gif");
		 		}
	 	}

	}

	var creatureInfo = new XMLHttpRequest();
	creatureInfo.open("GET", server + "creatures/1", true);
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
				statusImage.setAttribute("src", "./gifs/intB/int.gif");
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
