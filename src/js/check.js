const numeros = '6937502814';
const letras = 'FbGjHstKLEJdISerBOnogWQRUfcVXAuTvMDxlNwzChPmiqkZap';
const especiais = '!#$%&*-=?@';

const resultado = document.querySelector('#result');
const parametros = document.querySelector('#parameters');

function teste () {
    resultado.innerHTML = '';
    var tamanhoSenha = document.querySelector('#passwordSize').value;

    const checkNumeros = document.querySelector('#chk-number');
    const checkLetras = document.querySelector('#chk-letter');
    const checkEspeciais = document.querySelector('#chk-special');

    if (checkNumeros.checked && !checkLetras.checked && !checkEspeciais.checked) {
        
        senhaTipo1(numeros, tamanhoSenha, 'numeros');

    } else if (!checkNumeros.checked && checkLetras.checked && !checkEspeciais.checked) {

        senhaTipo1(letras, tamanhoSenha, 'letras');

    } else if (!checkNumeros.checked && !checkLetras.checked && checkEspeciais.checked) {
        
        senhaTipo1(especiais, tamanhoSenha, 'especiais');

    } else if (checkNumeros.checked && checkLetras.checked && !checkEspeciais.checked) {

        senhaTipo2(numeros, letras, tamanhoSenha, 'numeros, letras');

    } else if (checkNumeros.checked && !checkLetras.checked && checkEspeciais.checked) {

        senhaTipo2(numeros, especiais, tamanhoSenha, 'numeros, especiais');

    } else if (!checkNumeros.checked && checkLetras.checked && checkEspeciais.checked) {

        senhaTipo2(letras, especiais, tamanhoSenha, 'letras, especiais');

    } else if (checkNumeros.checked && checkLetras.checked && checkEspeciais.checked) {

        senhaTipo3(numeros, letras, especiais, tamanhoSenha, 'numeros, letras, especiais');

    } else {

        alert("Marque pelo menos uma opção de caractere!");
    }
}

function noCharRepeat (senha, caractere) {

    for (let i = 0; i < senha.length; i++) {

        if (caractere == senha.charAt(i)) {

            return false;
        }
    }

    return true;
}

function evitarLoop(tamanhoMax) {
    let range = document.getElementById('passwordSize');
    let output = document.getElementById('output');
    
    output.innerHTML = tamanhoMax;
    range.value = tamanhoMax;
    tamanho = tamanhoMax;

    return tamanho;
}

function gerarSenha (senha, tamanho, caracteres) {

    for (let i = 0; i < tamanho; i++) {
        
        let x = Math.floor(Math.random() * caracteres.length);
        
        if (noCharRepeat(senha, caracteres.charAt(x))) {
            
            senha += caracteres.charAt(x);

        } else {

            tamanho++;

            if (tamanho >= 60) {
                break;
            }
        }
    }
    
    return senha;
}
 
function senhaTipo1 (caracteres, tamanho, tipo) {
    
    let senha = '';

    if (tipo != 'letras' && tamanho > 10) {
        
        tamanho = evitarLoop(10);
    }

    senha = gerarSenha(senha, tamanho, caracteres);
    
    parametros.innerHTML = `${tipo}`;
    resultado.innerHTML += ` ${senha} `;
}

function senhaTipo2 (caracteres1, caracteres2, tamanho, tipos) {
    
    var senha = '';

    if (tipos == 'numeros, especiais' && tamanho > 20) {
        
        tamanho = evitarLoop(20);
    }
    
    for (let i = 0; i < tamanho; i++) {
        
        let x = Math.floor(Math.random() * 2);
        
        if (x > 0) {
            
            senha = gerarSenha(senha, 1, caracteres1);
            
        } else {
            
            senha = gerarSenha(senha, 1, caracteres2);
        }    
    }
    
    parametros.innerHTML = `${tipos}`;
    resultado.innerHTML += ` ${senha} `;
}

function senhaTipo3 (caracteres1, caracteres2, caracteres3, tamanho, tipos) {
    
    var senha = '';
    
    for (let i = 0; i < tamanho; i++) {
        
        let rnd = Math.floor(Math.random() * 3);

        if (rnd == 0) {
            
            senha = gerarSenha(senha, 1, caracteres1);
            
        } else if (rnd == 1) {
            
            senha = gerarSenha(senha, 1, caracteres2);
            
        } else {
            
            senha = gerarSenha(senha, 1, caracteres3);
        }
    }
    
    parametros.innerHTML = `${tipos}`;
    resultado.innerHTML += `${senha}`;
}