const btndec=document.getElementById('btndec');
const btninc=document.getElementById('btninc');
const btres=document.getElementById('btnres');
const countl=document.getElementById('countl');
let count=0;
btndec.onclick=function(){
    count--;
    countl.textContent=count;
}
btninc.onclick=function(){
    count++;
    countl.textContent=count;
}
btnres.onclick=function(){
    count=0;
    countl.textContent=count;
}
