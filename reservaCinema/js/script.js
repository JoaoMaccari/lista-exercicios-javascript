var freeSeat = ["A1", "A2", "A3" , "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
var busySeat = []



function select(s) {
    let seat = s.value
    console.log(s)
    let booking = document.getElementsByClassName("booking")[0];
    
        if (freeSeat.indexOf(seat) != -1 ) {
            
            ocupar(seat)
            abv(s)
          
        }else {
        
            booking.innerHTML = `OCUPADO` 
        }


                
}


function ocupar (s){
   let booking = document.getElementsByClassName("booking")[0];
   
    var index = freeSeat.indexOf(s);
    freeSeat.splice(index,1);
    console.log(freeSeat);

    busySeat.push(s);
    console.log(busySeat);
    booking.innerHTML = `Cadeira ${s} reservada`;

    
    
   
}


function abv(marca){

    

        marca.classList.toggle("ocupado");
        marca.addEventListener("click", abv);

    }
    
    
    