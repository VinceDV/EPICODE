function scrivi(parametro) {
    document.getElementById('textbox').value += parametro;
}
function risolvi() {
    document.getElementById("textbox").value = eval(document.getElementById("textbox").value);
};
function cancella() {
    document.getElementById("textbox").value = '';
};


