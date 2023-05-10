function clearScreen(){
    document.getElementById("result").value="";
   }
function display(value){
    document.getElementById("result").value +=value;
}
function calculate(){
    let cal=document.getElementById("result").value;
    
    document.getElementById("result").value=eval(cal);
}
