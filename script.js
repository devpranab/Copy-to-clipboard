// define element
const input = document.querySelector("#input");
const btn = document.querySelector("button.btn");


// event listener
btn.addEventListener("click", clickCopy);


// clickCopy Function()
function clickCopy(){
    input.select();
    document.execCommand("copy");
    alert("copied!");
    console.log("yes code is copied");
}