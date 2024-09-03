let boxes=document.querySelectorAll(".btn");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turn0=true;

const wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [1,4,7],
    [0,3,6],
    [2,5,8],
    [2,4,6],
];

boxes.forEach((btn) => {
    btn.addEventListener("click",()=>{
        if(turn0){
            btn.innerText="O";
            turn0=false;
        }
        else{
            btn.innerText="X";
            turn0=true;
        }
        btn.disabled=true;
        checkwinner();
    })
});

const disablebtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebtns();
}

const checkwinner=()=>{
    for(let pattern of wins){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showwinner(pos1);
            }
        }
    }
}

const resetgame=()=>{
    turn0=true;
    enablebtns();
}

const enablebtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
    msgcontainer.classList.add("hide");
}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);