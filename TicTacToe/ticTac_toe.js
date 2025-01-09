let buttns=document.querySelectorAll(".box");
let reset =document.querySelector("#reset")
let xTry=true;
let win=document.querySelector(".message");
let newGame = document.querySelector("#newGame");
const winning =[
    [0,1,2],[0,3,6],[ 0, 4,8],[1,4,7],[2,5,8],[2,4,6],[6,7,8],[3,4,5]

];

let i=0,j=0;

buttns.forEach((button) => {
    button.onclick = () => {
        
        if(xTry){
            button.innerText="x";
            xTry=false;
            button.disabled=true;
        }
        else{
            button.innerText="o";
            xTry=true;
            button.disabled=true;
        }
        checkWinner();
    };
});

reset.onclick=()=>{
   buttns.forEach(button=>{
    button.disabled=false;
    button.innerText="";
    xTry=true;
    win.classList.add("hide");

   })
}

const showWinner=(winner)=>{
      
      win.innerText=`Congratulations, winner is ${winner}`;
      win.classList.remove("hide");
      win.classList.add("winner");
      dissableBoxes();

}

checkWinner=()=>{
      for(let pattern of winning){
         

        let firstVal=buttns[pattern[0]].innerText;
        let secondVal=buttns[pattern[1]].innerText;
        let thirdVal=buttns[pattern[2]].innerText;


     if(firstVal !="" && secondVal != "" && thirdVal != ""){


        
        if(firstVal === secondVal && secondVal=== thirdVal)
            {
                   
                
                showWinner(firstVal);
                     
            }
    
    
          }
     }
}

newGame.onclick() = ()=> {
    win.classList.add("hide");
    buttns.forEach(button=>{
        button.disabled=false;
        button.innerText="";
        xTry=true;
        win.classList.add("hide");
    
       })
    }



 
const dissableBoxes=()=>
{
    for(let box of buttns){
        box.disabled=true;
    }   
};





