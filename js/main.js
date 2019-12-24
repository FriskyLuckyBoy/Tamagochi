let food;
let clean;
let happiness;
let money;
let helth;
let socialization;
let time;
function checkGame() {
    let e = document.getElementById("levelup");
    let level = e.options[e.selectedIndex].value;
    if (level==='0') {
      document.getElementById("start").onclick = startGameHard();
      document.getElementById("start").style.display = "none";
    }
    else if (level==='1'){
       document.getElementById("start").onclick =  startGameEasy(); 
       document.getElementById("start").style.display = "none";
    } else {
      document.getElementById("start").onclick =  startGameNinja();
      document.getElementById("start").style.display = "none";
     
    }
  }
  function startGameEasy(){
    food = Math.floor(Math.random() * 51) + 50;
    clean =Math.floor(Math.random() * 51) + 50;
    happiness = Math.floor(Math.random() * 51) + 50;
    time =3;
    document.getElementById('food').innerHTML = food + '%';
    document.getElementById('food').style.width = food + 'px';
    document.getElementById('clean').innerHTML = clean + '%';
    document.getElementById('clean').style.width = clean + 'px';
    document.getElementById('happiness').innerHTML = happiness + '%';
    document.getElementById('happiness').style.width = happiness + 'px';
    game();
    }
  function startGameHard(){
    food = Math.floor(Math.random() * 21) + 50;
    clean =Math.floor(Math.random() * 21) + 50;
    happiness = Math.floor(Math.random() * 21) + 50;
    time = 5;
    document.getElementById('food').innerHTML = food + '%';
    document.getElementById('food').style.width = food + 'px';
    document.getElementById('clean').innerHTML = clean + '%';
    document.getElementById('clean').style.width = clean + 'px';
    document.getElementById('happiness').innerHTML = happiness + '%';
    document.getElementById('happiness').style.width = happiness + 'px';
    game();
  }
   function startGameNinja(){
     document.getElementById('blockAktive1').style.display = 'flex';
      document.getElementById('buy').style.display = 'block';
      document.getElementById('buy').style.marginLeft = 5 + 'px';
      document.getElementById('buy').style.marginRight = 5 + 'px';
      document.getElementById('eat').style.marginLeft = 5 + 'px';
      document.getElementById('eat').style.marginRight = 5 + 'px';
      document.getElementById('wash').style.marginLeft = 10 + 'px';
      document.getElementById("container").style.flexDirection = 'row';
    food = Math.floor(Math.random() * 51) + 50;
    clean =Math.floor(Math.random() * 51) + 50;
    happiness = Math.floor(Math.random() * 51) + 50;
    money = Math.floor(Math.random() * 51) + 50;
    helth = Math.floor(Math.random() * 51) + 50;
    socialization = Math.floor(Math.random() * 51) + 50;
    time = 7;
    document.getElementById('food').innerHTML = food;
    document.getElementById('food').style.width = food + 'px';
    document.getElementById('clean').innerHTML = clean;
    document.getElementById('clean').style.width = clean + 'px';
    document.getElementById('happiness').innerHTML = happiness;
    document.getElementById('happiness').style.width = happiness + 'px';
    document.getElementById('money').innerHTML ='$'+ money;
    document.getElementById('money').style.width = money + 'px';
    document.getElementById('helth').innerHTML = helth;
    document.getElementById('helth').style.width = helth + 'px';
    document.getElementById('socialization').innerHTML = socialization;
    document.getElementById('socialization').style.width = socialization + 'px';
    gameNinja();
  }
function game(){
function GameOver(){
  document.getElementById("cat").src="img/gameover.gif";
  document.getElementById('message').innerHTML = "GAME OVER"+"<br>"+"SCORE: "+score;
  document.getElementById('help').innerHTML = '  ';
  clearInterval(Loop);
  clearInterval(life);
  long=0;
  food=0;
  clean=0;
  happiness=0;
  rewriteFood(0);
  rewriteClean(0);
  rewriteHappiness(0);
  rewriteFoodStyle(0);
  rewriteCleanStyle(0);
  rewriteHappinessStyle(0);
  stopTimer();
}
function rewriteFood(x){
  document.getElementById('food').innerHTML = x +'%';
}
function rewriteFoodStyle(x){
  document.getElementById('food').style.width = x + 'px';
}

function rewriteClean(x){
  document.getElementById('clean').innerHTML = x + '%';
}

function rewriteCleanStyle(x){
  document.getElementById('clean').style.width = x + 'px';
}

function rewriteHappiness(x){
  document.getElementById('happiness').innerHTML = x+'%';
}

function rewriteHappinessStyle(x){
  document.getElementById('happiness').style.width = x + 'px';
}



function Loop(){
  let sum = food + clean + happiness;
  if (sum >210){
    document.getElementById("cat").src="img/almostgood.gif";
    document.getElementById('help').innerHTML = '  ';
  } else if(food <= clean && food <= happiness){
     document.getElementById("cat").src="img/wantEat.gif";
     document.getElementById('help').innerHTML = 'Want Eat...';
  } else if(clean < food && clean <= happiness){
     document.getElementById("cat").src="img/wantClean.gif";
     document.getElementById('help').innerHTML = 'Clean my bad! Please...';
  } else if(happiness < food && happiness <  clean){
     document.getElementById("cat").src="img/wantrun.gif";
      document.getElementById('help').innerHTML = 'Please... Play with me!';
  }
  food = food - parseInt(time);
  clean = clean - parseInt(time);
  happiness = happiness - parseInt(time);
  rewriteFoodStyle(food);
  rewriteCleanStyle(clean);
  rewriteHappinessStyle(happiness);
 
  if (food>0){
  rewriteFood(food);
  } else if (food<=0){
    food=0; 
    rewriteFood(0);
    rewriteFoodStyle(0);
    GameOver();
  }

  if (clean>0){
    rewriteClean(clean);
  } else if (clean<=0){
    clean=0; 
    rewriteClean(0);
    rewriteCleanStyle(0);
    GameOver();
  }

  if (happiness>0){
    rewriteHappiness(happiness);
} else if (happiness<=0) {
    happiness=0;
    rewriteHappiness(happiness);
    rewriteHappinessStyle(0);
    GameOver();
  }
}

function Start(){
  let speed = setInterval(Loop, 5000);
}
Start();
document.getElementById('eat').onclick = function eat(){

  if (clean>20){
  clean-=20;
  rewriteClean(clean);
  rewriteCleanStyle(clean);
} else if (clean>0 &&clean<=20){
  clean-=clean;
  rewriteClean(0);
  rewriteCleanStyle(0);
  GameOver();
} else if (clean=0){
  GameOver();
}
  if( food<=70 && food>0 ){
    food += 30;
    rewriteFood(food);
    rewriteFoodStyle(food);
  } else if (food>70){
    rewriteFood(100);
    rewriteFoodStyle(100);
  }
}
document.getElementById('wash').onclick = function wash(){
  if (happiness>20){
    happiness -= 20;
    rewriteHappiness(happiness);
    rewriteHappinessStyle(happiness);
  } else if(happiness>=0 && happiness<=20){
    happiness -= happiness;
    rewriteHappiness(0);
    rewriteHappinessStyle(0);
    GameOver();
}
  if( clean<=60 && clean>0){
    clean += 40;
    rewriteClean(clean);
    rewriteCleanStyle(clean);
  } else if (clean>60){
    rewriteClean(100);
    rewriteCleanStyle(100);
  }
}
document.getElementById('run').onclick = function run(){

   if (food>10){
  food-=10;
  rewriteFood(food);
  rewriteFoodStyle(food);
   } else if (food>=0 && food<=20){
    food-=food;
  rewriteFood(0);
  rewriteFoodStyle(0);
  GameOver();
}

  if(happiness <= 85 && happiness>0){
    happiness += 15;
    rewriteHappiness(happiness);
    rewriteHappinessStyle(happiness);
  } else if (happiness>60){
    rewriteHappiness(100);
    rewriteHappinessStyle(100);
  }
}

let score=0;
function life (){
  score++;
  document.getElementById('score').innerHTML = "SCORE: " + score;
}
 
let timer = setInterval(life, 1000);
function stopTimer() { clearInterval(timer); 0}; 
}

function gameNinja(){
function GameOver(){
  document.getElementById("cat").src="img/gameover.gif";
  document.getElementById('message').innerHTML = "GAME OVER"+"<br>"+"SCORE: "+(score-1);
  document.getElementById('help').innerHTML = '  ';
  long=0;
  food=0;
  clean=0;
  happiness=0;
  money = 0;
  helth = 0;
  socialization = 0;
  rewriteFood(0);
  rewriteClean(0);
  rewriteHappiness(0);
  rewriteFoodStyle(0);
  rewriteCleanStyle(0);
  rewriteHappinessStyle(0);
  rewriteMoney(0);
  rewriteMoneyStyle(0);
  rewriteSocialization(0);
  rewriteSocializationStyle(0);
  rewriteHelth(0);
  rewriteHelthStyle(0);
  stopTimer();
}
function rewriteFood(x){
  document.getElementById('food').innerHTML = x;
}
function rewriteFoodStyle(x){
  document.getElementById('food').style.width = x + 'px';
}

function rewriteClean(x){
  document.getElementById('clean').innerHTML = x;
}

function rewriteCleanStyle(x){
  document.getElementById('clean').style.width = x + 'px';
}

function rewriteHappiness(x){
  document.getElementById('happiness').innerHTML = x;
}

function rewriteHappinessStyle(x){
  document.getElementById('happiness').style.width = x + 'px';
}

function rewriteMoney(x){
  document.getElementById('money').innerHTML ='$' + x;
}

function rewriteMoneyStyle(x){
  document.getElementById('money').style.width = x + 'px';
}

function rewriteSocialization(x){
  document.getElementById('socialization').innerHTML = x;
}

function rewriteSocializationStyle(x){
  document.getElementById('socialization').style.width = x + 'px';
}

function rewriteHelth(x){
  document.getElementById('helth').innerHTML = x;
}

function rewriteHelthStyle(x){
  document.getElementById('helth').style.width = x + 'px';
}
function Loop(){
 
  food = food - time;
  clean = clean - time;
  happiness = happiness - time;
  money = money - time;
  socialization = socialization - time;
  helth = helth - time;
  
 if (food <=0 || clean<=0 || happiness<=0 || helth<=0){
    GameOver();
    stopTimer();
  }
  let sum = food + clean + happiness;
  if (sum >210){
    document.getElementById("cat").src="img/almostgood.gif";
    document.getElementById('help').innerHTML = '  ';
  } else if(food <= clean && food <= happiness){
     document.getElementById("cat").src="img/wantEat.gif";
     document.getElementById('help').innerHTML = 'Want Eat...';
  } else if(clean < food && clean <= happiness){
     document.getElementById("cat").src="img/wantClean.gif";
     document.getElementById('help').innerHTML = 'Clean my bad! Please...';
  } else if(happiness < food && happiness <  clean){
     document.getElementById("cat").src="img/wantrun.gif";
      document.getElementById('help').innerHTML = 'Please... Play with me!';
  }

  if (food>0 && food<100){
  rewriteFood(food);
  rewriteFoodStyle(food);
  } else if (food>=100){ 
    rewriteMoney(food);
    rewriteMoneyStyle(100);
  } else if (food<=0){
    food=0; 
    rewriteFood(0);
    rewriteFoodStyle(0);
    GameOver();
  }

  if (clean>0&&clean<100){
    rewriteClean(clean);
    rewriteCleanStyle(clean);
  } else if (clean<=0){
    clean=0; 
    rewriteClean(0);
    rewriteCleanStyle(0);
    GameOver();
  }else if (clean>=100){
    rewriteClean(clean);
    rewriteCleanStyle(100);
  }

  if (happiness>0 && happiness<100){
    rewriteHappiness(happiness);
    rewriteHappinessStyle(happiness);
  } else if (happiness<=0) {
    happiness=0;
    rewriteHappiness(0);
    rewriteHappinessStyle(0);
    GameOver();
  }else if (happiness>=100) {
    rewriteHappiness(happiness);
    rewriteHappinessStyle(100);
  }

   if (money>0 && money<100){
  rewriteMoney(money);
  rewriteMoneyStyle(money);
  } else if (money<=0){
    money=0; 
    rewriteMoney(0);
    rewriteMoneyStyle(0);
  } else if (money>=100){ 
    rewriteMoney(money);
    rewriteMoneyStyle(100);
   
  }

   if (socialization>0 && socialization<100){
  rewriteSocialization(socialization);
  rewriteSocializationStyle(socialization);
  } else if (socialization<=0){
    socialization=0; 
    rewriteSocialization(0);
    rewriteSocializationStyle(0);
  } else if (socialization>=100){ 
    rewriteSocialization(socialization);
    rewriteSocializationStyle(100);
   
  }

   if (helth>0 && helth<100){
  rewriteHelth(helth);
  rewriteHelthStyle(helth);
  } else if (helth<=0){
    helth=0; 
    rewriteHelth(0);
    rewriteHelthStyle(0);
  } else if (helth>=100){ 
    rewriteHelth(helth);
    rewriteHelthStyle(100);
   
  }
}

document.getElementById('eat').onclick = function eat(){

  if (clean>20&&clean<120){
  clean-=20;
  rewriteClean(clean);
  rewriteCleanStyle(clean);
} else if (clean>=120){
  clean-=20;
  rewriteClean(clean);
  rewriteCleanStyle(100);
} else if (clean>=0 &&clean<=20){
  clean-=clean;
  rewriteClean(0);
  rewriteCleanStyle(0);
  GameOver();
}
  if( food<70 && food>0 ){
    food += 30;
    rewriteFood(food);
    rewriteFoodStyle(food);
  } else if (food>=70){
    food += 30;
    rewriteFood(food);
    rewriteFoodStyle(100);
  }
}
document.getElementById('wash').onclick = function wash(){
 
  if (happiness>20 && happiness<120){
    happiness -= 20;
    rewriteHappiness(happiness);
    rewriteHappinessStyle(happiness);
  } else if(happiness>=120){
    happiness -= 20;
    rewriteHappiness(happiness);
    rewriteHappinessStyle(100);
}else if(happiness>=0 && happiness<=20){
    happiness -= happiness;
    rewriteHappiness(0);
    rewriteHappinessStyle(0);
    GameOver();
}

  if( clean<60 && clean>0){
    clean += 40;
    rewriteClean(clean);
    rewriteCleanStyle(clean);
  } else if (clean>=60){
    clean += 40;
    rewriteClean(clean);
    rewriteCleanStyle(100);
  }
}
document.getElementById('run').onclick = function run(){
 
   if (food>10 && food<110){
  food-=10;
  rewriteFood(food);
  rewriteFoodStyle(food);
   } else if (food>=110){
    food-=10;
  rewriteFood(food);
  rewriteFoodStyle(100);
} else if (food>=0 && food<=10){
    food-=food;
  rewriteFood(0);
  rewriteFoodStyle(0);
  GameOver();
}

  if(happiness < 85 && happiness>=0){
    happiness += 15;
    rewriteHappiness(happiness);
    rewriteHappinessStyle(happiness);
  } else if (happiness>=85){
    happiness += 15;
    rewriteHappiness(happiness);
    rewriteHappinessStyle(100);
  }
}

document.getElementById('buy').onclick = function buy(){
  if (food<=0||clean<=0||happiness<=0){
     GameOver();
  }
  if (money>=20){
    if (money>=20&&money<120){
        money-=20;
        rewriteMoney(money);
        rewriteMoneyStyle(money);
    } else if (money>=120){
      money-=20;
      rewriteMoney(money);
      rewriteMoneyStyle(100); 
    }

    if(food <= 80 && food>0 && money>=20){
      food += 20;
      rewriteFood(food);
      rewriteFoodStyle(food);
    } else if (food>80){
      food += 20;
      rewriteFood(food);
      rewriteFoodStyle(100);
    }
  }
}

document.getElementById('work').onclick = function work(){
   document.getElementById("cat").src="img/work.gif";
   if (food<=0||clean<=0||happiness<=0){
     GameOver();
  }
    if (food>10 && food<110){
  food-=10;
  rewriteFood(food);
  rewriteFoodStyle(food);
   } else if (food>=110){
    food-=10;
  rewriteFood(food);
  rewriteFoodStyle(100);
} else if (food>=0 && food<=10){
    food-=food;
  rewriteFood(0);
  rewriteFoodStyle(0);
  GameOver();
}

if (helth>10&&helth<110){
  helth-=10;
  rewriteHelth(helth);
  rewriteHelthStyle(helth);
   } else if (helth>=110){
  helth-=10;
  rewriteHelth(helth);
  rewriteHelthStyle(100);
   } else if (helth>=0 && helth<=10){
    helth-=helth;
  rewriteHelth(0);
  rewriteHelthStyle(0);
  GameOver();
}

if (socialization>20 && socialization<120){
  socialization-=20;
  rewriteSocialization(socialization);
  rewriteSocializationStyle(socialization);
   } else if (socialization>=0 && socialization<=20){
    socialization-=socialization;
  rewriteSocialization(0);
  rewriteSocializationStyle(0);
} else if (socialization>=120){
    socialization -= 20;
    rewriteSocialization(socialization);
    rewriteSocializationStyle(100);
  }

  if(money < 50 && money>=0){
    money += 50;
    rewriteMoney(money);
    rewriteMoneyStyle(money);
  } else if (money>=50){
    money += 50;
    rewriteMoney(money);
    rewriteMoneyStyle(100);
  }
}
document.getElementById('bar').onclick = function bar(){
 document.getElementById("cat").src="img/bar.gif";
   if (food<=0||clean<=0||happiness<=0){
     GameOver();
  }
   if (money>=20){
     if (money>=20&&money<120){
    money-=20;
    rewriteMoney(money);
    rewriteMoneyStyle(money);
     } else if (money>=120){
    money-=20;
    rewriteMoney(money);
    rewriteMoneyStyle(100);
  }

   if (helth>10&&helth<110){
    helth-=10;
    rewriteHelth(helth);
    rewriteHelthStyle(helth);
     } else if (helth>=110){
    helth-=10;
    rewriteHelth(helth);
    rewriteHelthStyle(100);
     } else if (helth>=0 && helth<=10){
      helth-=helth;
    rewriteHelth(0);
    rewriteHelthStyle(0);
    GameOver();
  }

    if(food <= 90 && food>0 && money>=20){
      food += 10;
      rewriteFood(food);
      rewriteFoodStyle(food);
    } else if (food>90){
      food += 10;
      rewriteFood(food);
      rewriteFoodStyle(100);
    }
      if(socialization>=0 && socialization < 60){
      socialization += 40;
      rewriteSocialization(socialization);
      rewriteSocializationStyle(socialization);
    } else if (socialization>=60){
      socialization += 40;
      rewriteSocialization(socialization);
      rewriteSocializationStyle(100);
    }
  }
}

document.getElementById('doctor').onclick = function doctor(){
  document.getElementById("cat").src="img/doctor.png";
  if (food<=0||clean<=0||happiness<=0){
     GameOver();
  }
   if (money>=20){
     if (money>=20&&money<120){
    money-=20;
    rewriteMoney(money);
    rewriteMoneyStyle(money);
     } else if (money>=120){
    money-=20;
    rewriteMoney(money);
    rewriteMoneyStyle(100);
     } 

   if(helth <= 70 && helth>0 && money>=20){
      helth += 30;
      rewriteHelth(helth);
      rewriteHelthStyle(helth);
    } else if (helth>70){
      rewriteHelth(100);
      rewriteHelthStyle(100);
    }
     if(helth>=0 && helth < 70 && money>=20){
      helth += 30;
      rewriteHelth(helth);
      rewriteHelthStyle(helth);
    } else if (helth>=70 ){
      helth += 30;
      rewriteHelth(helth);
      rewriteHelthStyle(100);
    }
  }
}
document.getElementById('business').onclick = function business(){

   if (food<=0||clean<=0||happiness<=0 ){
     GameOver();
  }
if (helth>100){
  if (helth>100&&helth<200){
    helth-=100;
    rewriteHelth(helth);
    rewriteHelthStyle(helth);
     } else if (helth>=200){
    helth-=100;
    rewriteHelth(helth);
    rewriteHelthStyle(100);
     } else if (helth>=0 && helth<=100){
      helth-=helth;
    rewriteHelth(0);
    rewriteHelthStyle(0);
    GameOver();
  }
    if (money>=0){
      money += 100;
      rewriteMoney(money);
      rewriteMoneyStyle(100);
    }

    if (happiness>0){
      happiness += 100;
      rewriteHappiness(happiness);
      rewriteHappinessStyle(100);
    }

    if(socialization>=0 && socialization < 80){
      socialization += 20;
      rewriteSocialization(socialization);
      rewriteSocializationStyle(socialization);
    } else if (socialization>=80){
      socialization += 20;
      rewriteSocialization(socialization);
      rewriteSocializationStyle(100);
    }
  }
}


  function Start(){
    let speed = setInterval(Loop, 7000);
  }
  Start();

  let score=1;
  function life (){
   
    document.getElementById('score').innerHTML = "SCORE: " + score;
     score++;
  }

let randomTimer = setInterval(randoms,1000)
  function randoms (){
    let array = [food,clean,happiness,helth,money,socialization];
    if (score%60 == 0){

    array[Math.floor(Math.random() * 5) + 1]+=Math.floor(Math.random() * 41) + 10;
    food =array[0];
    clean=array[1];
    happiness=array[2];
    helth=array[3];
    money=array[4];
    socialization=array[5];
  console.log(array);
  if (food>0 && food<100){
  rewriteFood(food);
  rewriteFoodStyle(food);
  } else if (food>=100){ 
    rewriteMoney(food);
    rewriteMoneyStyle(100);
  } else if (food<=0){
    food=0; 
    rewriteFood(0);
    rewriteFoodStyle(0);
    GameOver();
  }

  if (clean>0&&clean<100){
    rewriteClean(clean);
    rewriteCleanStyle(clean);
  } else if (clean<=0){
    clean=0; 
    rewriteClean(0);
    rewriteCleanStyle(0);
    GameOver();
  }else if (clean>=100){
    rewriteClean(clean);
    rewriteCleanStyle(100);
  }

  if (happiness>0 && happiness<100){
    rewriteHappiness(happiness);
    rewriteHappinessStyle(happiness);
  } else if (happiness<=0) {
    happiness=0;
    rewriteHappiness(0);
    rewriteHappinessStyle(0);
    GameOver();
  }else if (happiness>=100) {
    rewriteHappiness(happiness);
    rewriteHappinessStyle(100);
  }

   if (money>0 && money<100){
  rewriteMoney(money);
  rewriteMoneyStyle(money);
  } else if (money<=0){
    money=0; 
    rewriteMoney(0);
    rewriteMoneyStyle(0);
  } else if (money>=100){ 
    rewriteMoney(money);
    rewriteMoneyStyle(100);
   
  }

   if (socialization>0 && socialization<100){
  rewriteSocialization(socialization);
  rewriteSocializationStyle(socialization);
  } else if (socialization<=0){
    socialization=0; 
    rewriteSocialization(0);
    rewriteSocializationStyle(0);
  } else if (socialization>=100){ 
    rewriteSocialization(socialization);
    rewriteSocializationStyle(100);
   
  }

   if (helth>0 && helth<100){
  rewriteHelth(helth);
  rewriteHelthStyle(helth);
  } else if (helth<=0){
    helth=0; 
    rewriteHelth(0);
    rewriteHelthStyle(0);
  } else if (helth>=100){ 
    rewriteHelth(helth);
    rewriteHelthStyle(100);
   
  }
  }
  }
 randoms ();
  let timer = setInterval(life, 1000);
  function stopTimer() { clearInterval(timer);
  } 
}

