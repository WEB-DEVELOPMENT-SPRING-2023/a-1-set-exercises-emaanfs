
function gascalculator(){
    var gasperlitre=document.getElementById("Gaslitre").value;
    var gaspurchased=document.getElementById("GasPurchased").value;

    var TotalAmount=gasperlitre*gaspurchased;

    document.getElementById("TotalCost").innerHTML="Total Amount to be paid $" + TotalAmount;
    
}