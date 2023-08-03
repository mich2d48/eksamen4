//antaltæller - produktsiden - section to

const plus = document.querySelector('.plus'),
minus = document.querySelector(".minus"),
num = document.querySelector(".num"),
mons = document.querySelector(".mons");

let a = 1;

// plus ikonets funktion - tæller en op, fjerner det foreste 0 hvis tallet er over 9, ganger beløbet med det talte tal. resultat antal varer og beløbet i alt.
plus.addEventListener("click", ()=>{
  a++;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
  mons.innerText = 995 * a;
  console.log(a);
});

//minusikonets funktion - tæller en ned hvis tallet er højere end et, ganger beløbet med det talte tal. resultat antal vare og beløbet i alt.
minus.addEventListener("click", ()=>{
  if (a > 1){
    a--;
    a = (a < 10) ? "0" + a : a;
    mons.innerText = 995 * a;
    num.innerText = a;
 }
});


//alert når der klikkes på "tilføj til kurv"-knappen på produktsiden.
var p = document.getElementById('produktnavn');

function tilKurv() {
    alert(num.innerText + " " + "stk. af" + " " + p.innerText + " " + "til" + " " + mons.innerText + " " + "kr. er nu tilføjet til kurven");
  }

//produktsiden - informationsbokse - Her kan brugeren klikke på den information de gerne vil have displayet på siden.
var x = document.getElementById('boksEt');
var y = document.getElementById('boksTo');
var z = document.getElementById('boksTre');
var u = document.getElementById('info');
var b = document.getElementById('materialer');
var c = document.getElementById('miljo');

//boks et
function info() {
    if(x.style.display == 'block')
    x.style.display = 'block';
 else
    x.style.display = 'block', y.style.display = 'none', z.style.display = 'none', u.style.textDecoration = 'underline', b.style.textDecoration = 'none', c.style.textDecoration = 'none';
}

//boks to
function materialer() {
    if(y.style.display == 'block')
    y.style.display = 'block';
 else
    y.style.display = 'block', x.style.display = 'none', z.style.display = 'none', b.style.textDecoration = 'underline', u.style.textDecoration = 'none', c.style.textDecoration = 'none';
}

//boks tre
function miljo() {
    if(z.style.display == 'block')
    z.style.display = 'block';
 else
    z.style.display = 'block', y.style.display = 'none', x.style.display = 'none', c.style.textDecoration = 'underline', b.style.textDecoration = 'none', u.style.textDecoration = 'none';
}
