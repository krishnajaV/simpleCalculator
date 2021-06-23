function displayvalue(num){
    let inputbox=document.getElementById("result")
    inputbox.value+=num
}
function evaluateExpression(){
    let cur_value=result.value;// get textbox value
    let resul=eval(cur_value)// evaluate expression
    result.value=resul;
}
function clearBox()
{
    result.value="";
}
function removeElement(){
    result.value=result.value.slice(0,-1)
}