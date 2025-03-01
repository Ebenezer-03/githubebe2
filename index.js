let input = document.querySelector("input")
function addvalue(elementval){
      input.value+=elementval
}

function clearval(){
    input.value =""
}
function delval(){
    input.value = input.value.slice(length,length-1)
}
function evalu(){
    input.value = eval(input.value)
}