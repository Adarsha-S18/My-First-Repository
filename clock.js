function updateclock(){
    const now=new Date();
    const hours=now.getHours().toString().padStart(2,'0');
    const Miniutes=now.getMinutes().toString().padStart(2,'0');
    const Second=now.getSeconds().toString().padStart(2,'0');
    const merdian=hours>=12?'pm':'Am'
    
    
    const timestring=`${hours}:${Miniutes}:${Second}`;
    document.getElementById('clocks').textContent=timestring;
      
}
updateclock().stop();
setInterval(updateclock,100);
