const receiveBirth=document.querySelector(".input");
const submitButton=document.querySelector(".submit")
const show=document.querySelector("h4")

const submitHandler=()=>{
    const receive=receiveBirth.value
    const split=receive.split("/")
    const date=new Date();
    const calcDay=+split[2]+6;
    const calcYear=date.getFullYear()-split[0]-1;
    const calcMonth=split[1]-2;
    show.innerText=`Year:${calcYear} Month:${calcMonth} Day:${calcDay}`;
}
submitButton.addEventListener("click",submitHandler)


