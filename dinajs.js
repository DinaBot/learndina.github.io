

function myFunction(x) {
    x.classList.toggle("change2");
  }
function Refresh(){
    if(screen.width>1000){location.reload();}
}
function ToggleMenuShow(j){
    var menuj = document.getElementById("Menu"+j);
    if(menuj.style.display==="none"){
        menuj.style.display="block";
    }
    else{
        menuj.style.display="none";
    }
}
   function BodyLoadFunction(){
       $('.topicdivm').addClass('rounded-lg');
	   $('.topicdivm').addClass('px-8');
	   
       $('.divexample').addClass('rounded-lg px-8');
   if(window.innerWidth<700){var menudiv=document.getElementById("LeftDiv");
   var maincontent=document.getElementById("MainContent");
   if(window.innerWidth<700){
   if(menudiv.style.display==="none"){
      menudiv.style.display="block";
      document.getElementById("GreySpace").style.display="block";
      
   } else{
      menudiv.style.display="none";
      document.getElementById("GreySpace").style.display="none";
      maincontent.style.display="block";
   }}
   }
   $('#blurdiv').css('display','none');
   $('#loadanimation').css('display','none');
   }
   function LeftMenuButtonClick(){
       
    var menudiv=document.getElementById("LeftDiv");
    var maincontent=document.getElementById("MainContent");
    if(window.innerWidth<700){
        document.getElementById("LeftMenuButton").classList.toggle("change2");
    if(menudiv.style.display==="none"){
       menudiv.style.display="block";
       document.getElementById("GreySpace").style.display="block";
       document.getElementById("LeftMenuButton").style.transform='rotate(0deg)';
       
    } else{
       menudiv.style.display="none";
       document.getElementById("GreySpace").style.display="none";
       maincontent.style.display="block";
       document.getElementById("LeftMenuButton").style.transform='rotate(0deg)';
    }}
    else{
    if(menudiv.style.display==="none"){
        // document.getElementsByClassName("bar1").style.backgroundColor="#333";
        // document.getElementsByClassName("bar2").style.backgroundColor="#333";
        // document.getElementsByClassName("bar3").style.backgroundColor="#333";
        menudiv.style.display.right="245px";
        menudiv.style.display="block";
    document.getElementById("MainContent").style.left="245px";

    document.getElementById("youtubecontainerdiv").style.marginLeft="-7%";
    document.getElementById("youtubecontainerdiv").style.marginTop="-3%";
    document.getElementById("youtubecontainerdiv").style.width="114%";
    document.getElementById("LeftMenuButton").style.border='1px solid black';
    }
    else{
        // document.getElementsByClassName("bar1").style.backgroundColor="#f7f7f7";
        // document.getElementsByClassName("bar2").style.backgroundColor="#f7f7f7";
        // document.getElementsByClassName("bar3").style.backgroundColor="#f7f7f7";
        menudiv.style.right="0px";
      menudiv.style.display="none";
      document.getElementById("MainContent").style.left="0px";
    document.getElementById("youtubecontainerdiv").style.marginLeft="-2%";
    document.getElementById("youtubecontainerdiv").style.marginTop="-2%";
    document.getElementById("youtubecontainerdiv").style.width="104%";
    document.getElementById("LeftMenuButton").style.border='2px solid black';
    }
    }
   }
   var d= 0;
   function DarkMode(){
	   if(d==0){
        d=1;
		document.cookie="d=1";
       document.body.style.backgroundColor="#121212";
       document.body.style.color="white";
       document.getElementById("TopHeaderSVG").src="https://dinalearn.dinaacademy.org/darkSVG.svg";
       $('#buttondl').css('background-color','white');
       $('#buttondl').css('color','#121212');
       document.getElementById('buttondl').innerHTML='<CENTER>LightMode</CENTER>';
       $('.topicdivm').css('background-color','orange');
       $('.LessonHead').css('color','white');
       $('.LessonHead').css('background-color','#121212');
       $('#MiniContent').css('background-color','#121212');
       $('#MiniContent').css('color','white');
       $('.LessonItem').css('background-color','#121212');
       $('.LeftDiv').css('background-color','#121212 !important');
       $('.LessonItemIcon').css('filter','invert(100%) sepia(100%) saturate(0%) hue-rotate(360deg) brightness(104%) contrast(103%)');
       $('#DownloadButton').css('filter','invert(100%) sepia(100%) saturate(0%) hue-rotate(360deg) brightness(104%) contrast(103%)');
       $('.LessonItemText').css('color','white');
       $('.CurrentLessonItem').css('background-color','#332940');
       $('.bar1').css('background-color','white');
       $('.bar2').css('background-color','white');
       $('.bar3').css('background-color','white');
       $('.LessonItem:hover').css('background-color','white');
       $('.LessonItem').css('background-color','#121212');
       $('.LessonItemIcon').css({ fill: "white" });
       $('.divexample').css('color','white');
       $('.divexample').css('background-color','#332940');
	   $('#MainContent').css('color','white');
    }

       else{
        d=0;
		document.cookie="d=0";
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        $('#buttondl').css('color','white');
       $('#buttondl').css('background-color','#121212');
       document.getElementById('buttondl').innerHTML='<CENTER>DarkMode</CENTER>';
        document.getElementById("TopHeaderSVG").src="https://dinalearn.dinaacademy.org/DinaAcademySVG.svg";
        $('.LessonHead').css('color','black');
        $('.topicdivm').css('background-color','aqua');
        $('.LessonHead').css('background-color','white');
        $('#MiniContent').css('background-color','white');
        $('.LessonItemIcon').css('filter','invert(0%) sepia(11%) saturate(17%) hue-rotate(199deg) brightness(94%) contrast(100%)');
        $('#DownloadButton').css('filter','invert(0%) sepia(11%) saturate(17%) hue-rotate(199deg) brightness(94%) contrast(100%)');
        $('#MiniContent').css('color','#373A3C');
        $('.LessonItem').css('background-color','white');
        $('.LessonItemText').css('color','#373A3C');
        $('.CurrentLessonItem').css('background-color','#FFFF66');
        $('.bar1').css('background-color','#333');
        $('.bar2').css('background-color','#333');
        $('.bar3').css('background-color','#333');
        $('.LessonItem:hover').css('background-color','#FFFF66');
        $('.LessonItem').css('background-color','white');
        $('.divexample').css('color','black');
        $('.divexample').css('background-color','lightsalmon');
		$('#MainContent').css('color','#373A3C');
       }

   }
