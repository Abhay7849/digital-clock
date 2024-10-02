let hour=document.getElementById("hour")
let minute=document.getElementById("minute")
let second=document.getElementById("second")


setInterval(()=>{


let currenttime =new Date()
console.log(currenttime)

hour.innerHTML=currenttime.getHours()
minute.innerHTML=currenttime.getMinutes()
second.innerHTML=currenttime.getSeconds()
},1000)
