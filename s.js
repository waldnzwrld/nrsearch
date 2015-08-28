var button = document.getElementById("submitbutton");
button.onclick = function(){
	var u = ["https://docs.newrelic.com/search/node/","https://newrelic.atlassian.net/wiki/dosearchsite.action?queryString=","https://discuss.newrelic.com/search?q="];
	var Q = document.getElementById("inputbox");
	u.forEach(function(n) {
		n += Q.value;
		chrome.tabs.create( { 'url' : n, 'active' : false } );
	});
};
