    // alert message for users

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (window.innerWidth <= 768) {
            window.location.href = "blocked.html";
        }
    } else {
        alert("i haven't fully completed this game yet due to a lack of time, but i plan to finish it in the upcoming days")
    }

    // trigger function while animations

    const animatedElement = document.querySelector ('.human');

    animatedElement.addEventListener('animationend', () => { 
      document.getElementById('human-head').style="background:linear-gradient(red, tan)";
      document.getElementById('blood').style="display:block;";
      document.getElementById('make_ambu_btn').style="display:block;";
      document.getElementById('blood').style.animationPlayState = "running"; 
    });
    
    const animatedElement2 = document.querySelector('.ambulance');

    animatedElement2.addEventListener('animationend', () => { 
        document.getElementById('human').style="display:none;";
        document.getElementById('ambu-tier').style.animationPlayState = "paused";
        document.getElementById('ambu-front-tier').style.animationPlayState = "paused";
        document.getElementById('make_hospital_btn').style="display:block";
    });

    // other buttons

    function callAmbulance(){
      document.getElementById('ambulance').style="display:block;";
      document.getElementById('ambu-sound').play();
    }

    function makeAccident(){
      document.getElementById('human').style="display:block;";
      document.getElementById('human').style.animationPlayState = "running";
      document.getElementById('lorry').style="display:block;";
    }

    function goHospital(){
        document.getElementById('ambu-sound').pause();
        document.getElementById('ambulance').style="display:none";       
    }
  
    // direction buttons

    function up() {
        document.getElementById("car").style = "top:-30px";
        document.getElementById('car').style.animationPlayState = "running";
        document.getElementById('skit2').pause();
        document.getElementById('skit').play();
    }

    function down() {
        document.getElementById("car").style = "top:130px";
        document.getElementById('car').style.animationPlayState = "running";
        document.getElementById('skit').pause();
        document.getElementById('skit2').play();  
    }

    // engine button

    function startEngine(){   
        document.getElementById('startengine').play();
    }

    function horn(){
        document.getElementById('horn').play();
    }

    function start(){   
        document.getElementById('movesound').play();
        document.getElementById('car').style.animationPlayState = "running";  
        document.getElementById('tier1').style.animationPlayState = "running";
        document.getElementById('tier2').style.animationPlayState = "running";

        const nodeList = document.querySelectorAll('.center_code');
        for(let i = 0; i< nodeList.length; i++){
            nodeList[i].style.animationPlayState = "running";
        } 

        const nodeList2 = document.querySelectorAll('.road-tree');
        for(let i = 0; i< nodeList2.length; i++){
            nodeList2[i].style.animationPlayState = "running";
        } 
    }

    function stop(){   
        document.getElementById('busstop').play();
        document.getElementById('movesound').pause();
        document.getElementById('car').style.animationPlayState = "paused";  
        document.getElementById('tier1').style.animationPlayState = "paused"; 
        document.getElementById('tier2').style.animationPlayState = "paused"; 

        const nodeList = document.querySelectorAll('.center_code');
        for(let i = 0; i< nodeList.length; i++){
            nodeList[i].style.animationPlayState = "paused";
        } 

        const nodeList2 = document.querySelectorAll('.road-tree');
        for(let i = 0; i< nodeList2.length; i++){
            nodeList2[i].style.animationPlayState = "paused";
        } 
    }

    // music buttons

    function play() {
        document.getElementById("rolex").play()
    }

    function pause() {
        document.getElementById("rolex").pause()
    }

    // weather buttons
    
    function changeDay() {
        document.getElementById("sun").style = "background-color: yellow;box-shadow: 0px 0px 20px 6px #e7e401;";
        document.getElementById("sky").style = "background:linear-gradient(0deg, white, skyblue)";
        document.getElementById("wholedisplay").style = "background:white";
    }

    function changeNight() {
        document.getElementById("sun").style = "background-color: #ffffff;box-shadow: rgb(208 208 198) 0px 0px 20px 6px;";
        document.getElementById("sky").style = "background:linear-gradient(0deg, #000000, #2d1754)";
        document.getElementById("wholedisplay").style = "background:black";
    }
