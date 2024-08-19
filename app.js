
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
let count=0;
const winPatterns=
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=() =>
{
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");

};
boxes.forEach((box) => {
    box.addEventListener("click",() =>
    {
        if(turnO===true)
        {
            box.innerText="O";
            box.style.color="#ffffff";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="#e09f3e";
            turnO=true;
        }
        box.disabled=true;
        count++;
        // checkWinner(); 
        let isWinner=checkWinner();
        if(count===9 && !isWinner)
        {
            gameDraw();
        }
    });
    
});

const gameDraw=() =>
{
    //msg.innerText=`Game Was Draw.`
    var msg = document.getElementById("msg");
    msg.innerHTML = "<b style='color: yellow; font-size: 3rem;'>Game was Draw</b>";
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const enableBoxes= () =>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};

const disableBoxes=() =>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const showWinner= (Winner)=>
{
    //msg.innerText=`Congratulations, winner is ${Winner}`;
    var msg = document.getElementById("msg");
    msg.innerText = "Congratulations, winner is " + Winner;
    msg.style.color = "#65B741";
    msg.style.fontSize = "3rem";
    msgcontainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner =() =>
{
    for(let pattern of winPatterns)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos2val=== pos3val)
            {
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


