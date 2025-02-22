let number = document.querySelector("#prime");
let output = document.querySelector("#output");
let enter = document.querySelector("#enter");
let reset = document.querySelector("#reset");


enter.onclick = () =>{
if(number%2 === 0){
   output.innerText = `${number} this is even number`;
}else{
    output.innerText = `${number} this is odd number`;
   
}
}

reset.onclick = () => {
    output.innerText = "";
}

