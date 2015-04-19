document.addEventListener('DOMContentLoaded', function() {
	
	var feed = document.getElementById('feed-button');
	var sleep = document.getElementById('sleep-button');
	feed.addEventListener("click", feedCreature);
	sleep.addEventListener("click", letCreatureSleep);

	function feedCreature(){
		var meaolaFeed = new XMLHttpRequest();

		meaolaFeed.open("PUT", "http://private-anon-bbd6718d7-meaola.apiary-mock.com/creatures/1/feed");
		meaolaFeed.send();
		meaolaFeed.onreadystatechange = function() {

			if(this.readyState == 4 && this.status == 204){
	 			console.log("I have fed the mea ola");
	 		}
 		}
	}
	function letCreatureSleep(){
		var meaolaSleep = new XMLHttpRequest();
		meaolaSleep.open("PUT", "http://private-anon-bbd6718d7-meaola.apiary-mock.com/creatures/1/rest");
		meaolaSleep.send();

		if(this.readyState == 4 && this.status == 204){
	 			console.log("The mea ola is sleeping");
	 		}
 		console.log("The mea ola is sleeping");
	}

	var creatureInfo = new XMLHttpRequest();
	creatureInfo.open("GET", "http://private-anon-bbd6718d7-meaola.apiary-mock.com/creatures/1", true);
	creatureInfo.send();

	creatureInfo.onreadystatechange = function() {

		if(this.readyState == 4 && this.status == 200){

			var response = JSON.parse(this.response);
			console.log(response);

			var skillValue = document.getElementById("skill-value");
			skillValue.innerHTML = response.stats.skill;

			var defenseValue = document.getElementById("defense-value");
			defenseValue.innerHTML = response.stats.defense;

			var intelligenceValue = document.getElementById("intelligence-value");
			intelligenceValue.innerHTML = response.stats.intelligence;

			var name= document.getElementById("name");
			name.innerHTML = response.name;

			var status = document.getElementById("status");
			status.innerHTML = response.hunger;

		}
	}
});