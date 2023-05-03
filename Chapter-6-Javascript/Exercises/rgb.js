
//floating point numbers and integers are being used as parameters due to math floor (rounds numbers down to integer)//
var arr =[0,1,2];
var r= Math.floor((Math.random())*256);
var g= Math.floor((Math.random())*256);
var b= Math.floor((Math.random())*256);


//Get element's purpose is to return an elements'/'s object which shows whose id matchs a described string//
document.getElementById("colorcode").innerHTML="( "+r+" , "+g+" , "+b+" )";


//index will provide direct access to the data or other function //
var index=Math.floor((Math.random())*3);

document.getElementById(index).style.backgroundColor="rgb("+r+","+g+","+b+")";

//splice helps to overwrite the original array by removing, replacing and adding elements//
arr.splice(index,1);

var r1= Math.floor((Math.random())*256);
var g1= Math.floor((Math.random())*256);
var b1= Math.floor((Math.random())*256);
document.getElementById(arr[0]).style.backgroundColor="rgb("+r1+","+g1+","+b1+")";


//MAth Random is used for selecting random numbers or data from larger numbers or data group//
var r2= Math.floor((Math.random())*256);
var g2= Math.floor((Math.random())*256);
var b2= Math.floor((Math.random())*256);
document.getElementById(arr[1]).style.backgroundColor="rgb("+r2+","+g2+","+b2+")";


function guess(){
    //inner html is used to get all the internal elements/content which are in the html file//
    if(document.activeElement.id==index){
        document.getElementById("colorcode").innerHTML="CORRECT !!";
        document.getElementById("colorcode").style.color="darkgreen";
    }
    else{
        document.getElementById("colorcode").innerHTML="WRONG !!";
        document.getElementById("colorcode").style.color="red";
    }
 //Element by class name is used to get/return all the elements which are in 'btn' class()//
    document.getElementsByClassName("btn")[0].removeAttribute("onclick");
    document.getElementsByClassName("btn")[1].removeAttribute("onclick");
    document.getElementsByClassName("btn")[2].removeAttribute("onclick");


}

//restart function is set to the button created in html, so when clicked the game would restart//
function restart(){
    window.location.reload();
}