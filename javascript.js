// Poruszanie się kwadratu

let mTop = 0;
let mLeft = 0;


window.addEventListener("keydown", function(event) {

       switch(event.key){
        case "ArrowDown":   
            mTop += 10;
            document.getElementById("square").style.marginTop = mTop + "px";
            break;
            
        case "ArrowUp":
            mTop -= 10;
            document.getElementById("square").style.marginTop = mTop + "px";
            break;
            
        case "ArrowRight":
            mLeft += 10;
            document.getElementById("square").style.marginLeft = mLeft + "px";
            break;
            
        case "ArrowLeft":                   
            mLeft -= 10;
            document.getElementById("square").style.marginLeft = mLeft + "px";
            break;       
        }
});



