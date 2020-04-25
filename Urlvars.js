function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


var name = getUrlVars()["name"];
var where = getUrlVars()["where"];
var hobbie = getUrlVars()["hobbie"];

var node = document.createElement("p");
var textnode = document.createTextNode(petname + " and "  + gender);
node.appendChild(textnode);
document.querySelector("#result").appendChild(node);
