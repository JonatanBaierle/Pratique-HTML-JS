const numA = document.getElementById('numA');
const numB = document.getElementById('numB');
const form = document.getElementById('form');



form.addEventListener('submit', function(e){
    e.preventDefault();
    var eNum = true;
    const msgErroA = `Caractere "${numA.value}" é inválido`;
    const msgErroB = `Caractere "${numB.value}" é inválido`;
    const areamsgA = document.querySelector('.textErroA');
    const areamsgB = document.querySelector('.textErroB');
    const areamsgC = document.querySelector('.textErroC');
    const msgParabens = document.querySelector('.parabens');
    const Bmaior = `Número B tem que ser maior que A!`;
    const parabens = `Parabens!`;

    //Validação de caractere Numerio A
    var validaA = numA.value;
    if (isNaN(validaA) || validaA === '') {
        document.querySelector('.textErroA').style.display = 'block';
        areamsgA.innerHTML = msgErroA;
        eNum = false;
    } else {
        document.querySelector('.textErroA').style.display = 'none';
    }

    //Validação de caractere Numerio B
    var validaB = numB.value;
    if (isNaN(validaB) || validaB === '') {
        document.querySelector('.textErroB').style.display = 'block';
        areamsgB.innerHTML = msgErroB;
        eNum = false;
    } else {
        document.querySelector('.textErroB').style.display = 'none';
    }

    //B e maior?
    if (eNum === true){
        if (numB.value <= numA.value) {
            document.querySelector('.textErroC').style.display = 'block';
            areamsgC.innerHTML = Bmaior;
        } else {
            document.querySelector('.textErroC').style.display = 'none';
        }
    }
    if (numB.value > numA.value && !isNaN(validaB)) {
        document.querySelector('.parabens').style.display = 'block';
        msgParabens.innerHTML = parabens;
    } else {
        document.querySelector('.parabens').style.display = 'none';
    }

    console.log(eNum)
})

// Imput A vermelho caso esteja errado 
numA.addEventListener('keyup', function(e){
    var valida = e.target.value
    if (isNaN(valida)) {
        numA.classList.add('erro');
    } else {
        numA.classList.remove('erro');
    }
})

// Imput B vermelho caso esteja errado 
numB.addEventListener('keyup', function(e){
    var valida = e.target.value
    if (isNaN(valida)) {
        numB.classList.add('erro');
    } else {
        numB.classList.remove('erro');
    }
})








