
//function for gas calculator has been declared to sum up a section of code.//
function gascalculator(){

    //document has been used to allow script to change and format  //
    var gasperlitre=document.getElementById("Gaslitre").value;
    var gaspurchased=document.getElementById("GasPurchased").value;

    //variable has been declared to calculate the gas//
    var TotalAmount=gasperlitre*gaspurchased;

    //function created to fetch the html element by its id or class to act upon it//
    document.getElementById("TotalCost").innerHTML="Total Amount to be paid $" + TotalAmount;
    
}