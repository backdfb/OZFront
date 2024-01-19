let img = document.getElementById("img");
let scissors = document.getElementById("scissors");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let score = document.getElementById("score");
let user = document.getElementById("user");
let conputer_score = document.getElementById("computer_score");
let reset_btn = document.getElementById("reset_btn");
let end_btn = document.getElementById("end_btn");

let imgArray = new Array();
imgArray[0]="paper.png";
imgArray[1]="rock.png";
imgArray[2]="scissors.png";

let a;
let userscore = 0;
let computerscore = 0;

function imagetime() {
    a = Math.floor(Math.random()*3);
    img.src = imgArray[a];
}

setInterval(imagetime,150);

scissors.onclick = ()=>{
    clearInterval();

    if(a==0)
    {
        alert("승리");
        userscore++;
        user_score.textContent=userscore;
    }
    else if(a==2)
    {
        alert("비겼습니다.");
    }
    else
    {
        alert("패배");
        computerscore++;
        computer_score.textContent=computerscore;        
    }
    
}

rock.onclick= () =>{
    clearInterval();
    if(a==0)
    {
        alert("패배");
        computerscore++;
        computer_score.textContent=computerscore;  
    }
    else if(a==2) 
    {
        alert("승리");
        userscore++;
        user_score.textContent=userscore;
    }
    else 
    {
        alert("비겼습니다.");
    }
}

paper.onclick=()=>{
    clearInterval();
    if(a==0)
    {
        alert("비겼습니다");
    }
    else if(a==2) 
    {
        alert("패배.");
        computerscore++;
        computer_score.textContent=computerscore;  
    }
    else 
    {
        alert("승리");
        userscore++;
        user_score.textContent=userscore;
    }
}

reset_btn.onclick=()=>{
    let check=confirm("다시 시작하시겠습니까?");
    if(check==true)
    {
        alert("행운을 빕니다!");
        location.reload();
    }
}

end_btn.onclick=()=>{
    let check=confirm("게임을 종료하시겠습니까?");
    if(check==true)
    {
        alert("게임 승리 : " + userscore  + " 게임 패배 : " + computerscore);
        location.reload();
    }
}
