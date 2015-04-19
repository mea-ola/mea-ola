document.addEventListener('DOMContentLoaded', function() {
	var feed = document.getElementById('feed-button');
	var sleep = document.getElementById('sleep-button');
	feed.addEventListener("click", feedCreature);
	sleep.addEventListener("click", letCreatureSleep);

	var skillValue = document.getElementById("skill-value");
	skillValue.innerHTML = "10";
	var defenseValue = document.getElementById("defense-value");
	defenseValue.innerHTML = "10";
	var intelligenceValue = document.getElementById("intelligence-value");
	intelligenceValue.innerHTML = "10";
	var name= document.getElementById("name");
	name.innerHTML = "Spike";
	var status = document.getElementById("status");
	status.innerHTML = "Full";
});
function feedCreature(){
 console.log("I have fed the mea ola");
}
function letCreatureSleep(){
 console.log("The mea ola is sleeping");
}