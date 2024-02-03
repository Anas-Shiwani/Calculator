var displayInput=document.getElementById("displayInput")
function getval(a){
    displayInput.value+=a;
}
function calculate(){
displayInput.value = eval(displayInput.value);
}
function clearAll(){
    displayInput.value = "";
}