
document.getElementById("1").addEventListener('clic');
function scrivi1(){
    document.getElementById('textbox').value += '1';
}

document.getElementById("2").addEventListener('click');
function scrivi2(){
    document.getElementById('textbox').value += '2';
}

document.getElementById("3").addEventListener('click');
function scrivi3(){
    document.getElementById('textbox').value += '3';
}

document.getElementById("4").addEventListener('click');
function scrivi4(){
    document.getElementById('textbox').value += '4';
}

document.getElementById("5").addEventListener('click');
function scrivi5(){
    document.getElementById('textbox').value += '5';
}


document.getElementById("6").addEventListener('click');
function scrivi6(){
    document.getElementById('textbox').value += '6';
}

document.getElementById("7").addEventListener('click');
function scrivi7(){
    document.getElementById('textbox').value += '7';
}

document.getElementById("8").addEventListener('click');
function scrivi8(){
    document.getElementById('textbox').value += '8';
}

document.getElementById("9").addEventListener('click');
function scrivi9(){
    document.getElementById('textbox').value += '9';
}

document.getElementById("0").addEventListener('click');
function scrivi0(){
    document.getElementById('textbox').value += '0';
}

document.getElementById("punto").addEventListener('click');
function scriviPunto(){
    document.getElementById('textbox').value += '.';
}


document.getElementById("addizione").addEventListener('click');
function scriviAddizione(){
    document.getElementById('textbox').value += '+';
}

document.getElementById("sottrazione").addEventListener('click');
function scriviSottrazione(){
    document.getElementById('textbox').value += '-';
}

document.getElementById("moltiplicazione").addEventListener('click');
function scriviMoltiplicazione(){
    document.getElementById('textbox').value += '*';
}

document.getElementById("divisione").addEventListener('click');
function scriviDivisione(){
    document.getElementById('textbox').value += '/';
}

document.getElementById("modulo").addEventListener('click');
function scriviModulo(){
    document.getElementById('textbox').value += '%';
}


document.getElementById("uguale").addEventListener('click'); 

function risolvi() {
    document.getElementById("textbox").value = eval(document.getElementById("textbox").value);
};

document.getElementById("cancella").addEventListener('click'); 

function cancella() {
    document.getElementById("textbox").value = '';
};


