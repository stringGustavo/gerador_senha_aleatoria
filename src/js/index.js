var slider = document.getElementById("passwordSize");
var output = document.getElementById("output");

output.innerHTML = slider.value;

slider.oninput = function () {
    
    output.innerHTML = this.value;
}

function clickCopy() {
    var content = document.querySelector('#result').innerHTML;

    navigator.clipboard.writeText(content);
}