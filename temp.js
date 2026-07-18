const textb=document.getElementById('textb');
const tof=document.getElementById('tof');
const toc=document.getElementById('toc');
const ans=document.getElementById('ans')

let temp;
   
function convert() {

   
   if(tof.checked){
      temp=Number(textb.value);
     temp=temp*9/5+32;
     ans.textContent=temp.toFixed(1)+"f";

     
   }
   else if(toc.checked){
      temp=Number(textb.value);
      temp=(temp-32)*5/9;
      ans.textContent=temp.toFixed(1)+'c';

   }
   else{
    ans.textContent='select a unit'
   }

}


        