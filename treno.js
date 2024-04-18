const z = 0.21;
let sconto=0;
document.getElementById("submit").onclick = function(){
    let a = document.getElementById("km").value;
    let b = document.getElementById("eta").value;
    console.log(a)
    console.log(b)
    console.log(z)
  
    let costo = a*z;
    if(b<18){
        sconto=(costo*20)/100;
        costo-=sconto;
        console.log(costo)
    }
    else if(b>65)
    {
        sconto=(costo*40)/100;
        costo-=sconto;
        console.log(costo)
    }
    document.getElementById("costo").innerHTML=costo+"$";

}