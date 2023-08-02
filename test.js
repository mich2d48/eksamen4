const plus = document.querySelector('.plus'),
minus = document.querySelector(".minus"),
num = document.querySelector(".num"),
mons = document.querySelector(".mons");

let a = 1;

plus.addEventListener("click", ()=>{
  a++;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
  mons.innerText = 995 * a;
  console.log(a);
});



minus.addEventListener("click", ()=>{
  if (a > 1){
    a--;
    a = (a < 10) ? "0" + a : a;
    mons.innerText = 995 * a;
    num.innerText = a;
 }
});