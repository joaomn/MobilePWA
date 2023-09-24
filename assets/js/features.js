
async function obter(palavra){
    $('#translated').empty()
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'eac3dc7f3emsh577f3262e597fd1p165d55jsn1ea4fe9ce59e',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: palavra,
		target: 'ja',
		source: 'pt'
	})
    
};

try {
	const div = document.getElementById("divResposta");
	const response = await fetch(url, options);	
	const result =  await response.json();

	
    $('#translated').append("O Kanji Correspondente a " + palavra + " é: " + result.data.translations[0].translatedText)
	console.log(result);
	if(div.innerHTML.trim() === ""){
		
	}else{
		div.style.display= "block";
	}
} catch (error) {
	console.error(error);
}
}

// funcao de calcular distancia

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2-lat1);  // deg2rad below
	var dLon = deg2rad(lon2-lon1); 
	var a = 
	  Math.sin(dLat/2) * Math.sin(dLat/2) +
	  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
	  Math.sin(dLon/2) * Math.sin(dLon/2)
	  ; 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; // Distance in km
	return d;
  }
  
 