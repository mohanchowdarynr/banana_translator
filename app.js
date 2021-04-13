var inputTxt, translateBtn, outputBox

window.onload=function() {
    inputTxt = document.querySelector("#input-txt");
    translateBtn = document.querySelector("#translate-it");
    translateBtn.addEventListener("click", translateMinion);
    outputBox = document.querySelector("#output-text");


	function errorOcc(){
		alert("Tried too many times /n come an hour later");
	}

	function translateMinion(inputHere){
		inputHere = inputTxt.value;
		var url = "https://api.funtranslations.com/translate/minion.json?text=" + inputHere;
		fetch(url)
			.then(response => response.json())
			.then(json => {
				outputBox.innerText = json.contents.translated;
			})
			.catch(errorOcc);
	}
}