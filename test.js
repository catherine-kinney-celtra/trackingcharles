function getAd(){
var openAd = prompt("Enter the Ad ID");
if (openAd != null){
	document.getElementById("demo").innerHTML = "http://hub.celtra.com/api/link/" + openAd;
	}
}

//store updated url 
//open updated url 

//Consider - open page, find tag, find id , store id, ad id to url, open url 

