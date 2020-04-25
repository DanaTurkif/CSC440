function getUserData() {

    if ('localStorage' in window && window['localStorage'] !== null) {

		const name = localStorage.getItem('name');
		const where = localStorage.getItem('where');
    const hobbie = localStorage.getItem('hobbie');

    var result = hobbie.split(",");
    var percent = 0;
    var length = result.length;

    for (var i = 0 ; i < length ; ++i){
      if (result[i] == 'Reading')
      percent+=20;

      if (result[i] == 'Watching Movies')
      percent+=20;

      if (result[i] == 'Playing video games')
      percent+=20;

      if (result[i] == 'Listening to music')
      percent+=20;

      if (result[i] == 'Sleeping')
      percent+=20;

    }

    if (where == "meme"){
      document.getElementById("ameme").setAttribute("src","PHOTO-2020-03-11-09-29-18.jpg");
    }
    else if (where == "cv"){
      document.getElementById("acv").setAttribute("href","https://github.com/DanaTurkif/CSC440/blob/gh-pages/Dana%20Turki.html");
      var acv = document.getElementById("acv");
      var text = document.createTextNode("this is my cv");
      acv.appendChild(text);
    }

    const node = document.createElement("p");
    const br = document.createElement("br");
		const textnode1 = document.createTextNode("Hello " + name);
    const textnode2 = document.createTextNode ("our intrests match "+ percent +"% , I am also interested in " + hobbie);
		node.appendChild(textnode1);
    node.appendChild(br);
  	node.appendChild(textnode2);
		document.querySelector("#result").appendChild(node);

	} else {
		alert('Cannot store user preferences as your browser do not support local storage');
	}
}

getUserData();

