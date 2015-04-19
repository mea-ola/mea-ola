console.log(location.href);
var server = "http://129.21.64.19:3000";

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
