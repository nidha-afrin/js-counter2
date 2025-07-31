let main=document.getElementById("count");
let num=parseInt(main.textContent);
console.log(num);
function increase(){
    num=parseInt(num)+1;
    main.textContent=num;
}
function decrease(){
    num=parseInt(num)-1;
    main.textContent=num;
}
function reset(){
    num=0;
    main.textContent=num;
}