const btn=document.querySelector("button");
const show=document.querySelector("h4");

let secondsCount=0;
let minuteCount=0;
const clickHandler=()=>{
    const result=setInterval(()=>{
btn.removeEventListener("click",clickHandler);
        show.innerText=`${"0"+minuteCount}:${("0"+secondsCount++).slice(-2)}`;
        if (secondsCount===60){
            secondsCount=0;
            minuteCount++;
            if (minuteCount===2) clearInterval(result);
            btn.addEventListener("click",clickHandler);
        }
    },1000);
};
btn.addEventListener("click",clickHandler);
