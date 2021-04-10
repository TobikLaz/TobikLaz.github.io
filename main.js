var xhttp = new XMLHttpRequest();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("navstiveni")[0].childNodes[0];
    x.insertData(0, x + 1);
    document.getElementById("navstiveni").innerHTML = x.data;
}
window.onLoad = function() {
	xhttp.onreadystatechange = function() {
	   if (this.readyState == 4 && this.status == 200) {
		   myFunction(this);
	   }
	};
	xhttp.open("GET", "navstiveni.xml", true);
	xhttp.send();
}