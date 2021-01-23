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
   if(window.innerWidth<700){LeftMenuButtonClick();}
   document.getElementById("LeftMenuButton").style.transform='rotate(0deg)';
   }
   function LeftMenuButtonClick(){
    var menudiv=document.getElementById("LeftDiv");
    var maincontent=document.getElementById("MainContent");
    if(window.innerWidth<700){
    if(menudiv.style.display==="none"){
       menudiv.style.display="block";
       document.getElementById("GreySpace").style.display="block";
      //  maincontent.style.display="none";
       document.getElementById("LeftMenuButton").style.transform='rotate(0deg)';
       
    } else{
       menudiv.style.display="none";
       document.getElementById("GreySpace").style.display="none";
       maincontent.style.display="block";
       document.getElementById("LeftMenuButton").style.transform='rotate(0deg)';
    }}
    else{
    if(menudiv.style.display==="none"){
        menudiv.style.display.right="245px";
        menudiv.style.display="block";
    document.getElementById("MainContent").style.left="245px";

    document.getElementById("youtubecontainerdiv").style.marginLeft="-7%";
    document.getElementById("youtubecontainerdiv").style.marginTop="-3%";
    document.getElementById("youtubecontainerdiv").style.width="114%";
    document.getElementById("LeftMenuButton").style.border='1px solid black';
    }
    else{
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
   
   
   function scrollMain(){
   }
   
