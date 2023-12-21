let firstForm = document.querySelector('#firstForm');
let secondForm = document.querySelector('#secondForm');

let firstRes = document.querySelector('#firstResult');
let secondRes = document.querySelector('#secondResult');

function firstBtn () {
    if (firstForm.style.display == "none"){
        firstForm.style.display = "flex";
        secondForm.style.display = "none";

        firstRes.style.display = "block";
        secondRes.style.display = "none";
    }
    else { 
        firstForm.style.display = "none";
        firstRes.style.display = "none";
    }
}

function secondBtn () {
    if (secondForm.style.display == "none"){
        secondForm.style.display = "flex";
        firstForm.style.display = "none";

        firstRes.style.display = "none";
        secondRes.style.display = "block";
    }
    else { 
        secondForm.style.display = "none";
        secondRes.style.display = "none";
    }
}

let answer = '';

let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');

function t3s () {
    let p = (Number(a.value) + Number(b.value) + Number(c.value)) / 2;
    let S = Math.sqrt(p * (p - Number(a.value)) * (p - Number(b.value)) * (p - Number(c.value)));
    firstRes.innerHTML = "Результат: " + Math.round(S);
}

function treug3s () {
    if (a.value == '' || b.value == '' || c.value == '') {
        firstRes.innerHTML = 'Введите корректное значение!'
    }
    else { 
        if(Number(a.value) >= 1 && Number(b.value) >= 1 && Number(c.value) >= 1) {
            if (Number(a.value) + Number(b.value) < Number(c.value) || Number(a.value) + Number(c.value) < Number(b.value) || Number(b.value) + Number(c.value) < Number(a.value)) {
                firstRes.innerHTML = 'Такого треугольника не существует!';
            } else {
                t3s();
                firstRecord();
            }
        } else firstRes.innerHTML = 'Стороны не могут быть меньше или равны нулю! <br> a ≠ 0; b ≠ 0; c ≠ 0.';
    }
}

let f = document.querySelector('#f');
let h = document.querySelector('#h');

function ah () {
    secondRes.innerHTML = "Результат: " + Math.round(((Number(f.value) * Number(h.value)) / 2));
}

function treugah () {
    if(f.value != '' && h.value != '') {
        if (Number(f.value) >= 1 || Number(h.value) >= 1) {
            ah();
        } else secondRes.innerHTML = 'Высота и основание не могут быть меньше или равны нулю! <br> a ≠ 0; h ≠ 0.';
    } else secondRes.innerHTML = 'Введите корректное значение!'
}

let firstRec = document.querySelector("#firstRec");
let secondRec = document.querySelector("#secondRec");
let thirdRec = document.querySelector("#thirdRec");
let fourRec = document.querySelector("#fourRec");
let fiveRec = document.querySelector("#fiveRec");

let content = document.getElementsByClassName("content__mid--slot");

function firstRecord () {
    
}

let el = document.querySelector(".main");

function firstColor () {
    el.style.setProperty('--color', 'blue');
}

function secondColor () {
    el.style.setProperty('--color', 'green');
}

function thirdColor () {
    el.style.setProperty('--color', 'black');
}

function fourColor () {
    el.style.setProperty('--color', 'red');
}

function fiveColor () {
    el.style.setProperty('--color', 'gold');
}

function sixColor () {
    el.style.setProperty('--color', 'pink');
}