input = document.getElementById("Pene").value
ptag = document.getElementById("ptag").value

document.addEventListener("submit", function(event){
event.preventDefault()
if (input.lower == "a") {
    ptag.innerHTML= "Hello"
} 
});