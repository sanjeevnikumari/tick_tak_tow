let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turno=true;//playerx and palyery
let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("box was clicked");
       if(turno){
        box.innerText="O";
         box.style.color = "blue"
        turno=false;
        }
        else{
            box.innerText="X";
             box.style.color = "green"
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    })
});









const resetGame=()=>{
    turno=true;
    enableBoxes()
    msgcontainer.classList.add("hides");
   
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
 const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
 }
 
const showwinner = (winner) => {
    msg.innerText=`winner is ${winner}`
    msgcontainer.classList.remove("hides");
    disableBoxes();

}



const checkwinner=()=>{
    for(patterns of winpattern){
    //     console.log(patterns[0],patterns[1],patterns[2]);
    //     console.log(boxes[patterns[0]].innerText,
    //         boxes[patterns[1]].innerText,
    //         boxes[patterns[2].innerText])
    // }
    let val1=boxes[patterns[0]].innerText
    let val2= boxes[patterns[1]].innerText
    let val3=boxes[patterns[2]].innerText

    if(val1 !='' && val2 !='' && val3 !=''){
        if(val1==val2 && val2==val3){
            // console.log("winner",val1);
            showwinner(val1);
           
         
        }
        
         
    }
    

    }
}
newbtn.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)
 