var freeSeat = ["A1", "A2", "A3" , "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
var busySeat = []
var booking = document.getElementsByClassName("booking")[0];
  let click =0

function select(seat) {
    click++
    let allFree = true
    
    if (click < 1) {
        
            for (i in freeSeat) {
        
                if (freeSeat[i] == seat.value) {
                 busySeat.push(seat.value);
                freeSeat.splice(i, 1);
            
                console.log(busySeat);
                console.log(freeSeat);
            }else if (seat.value == freeSeat[i]) {

        }
      
    }

    }
    
    

    
    
    
    
    booking.innerHTML = `cadeira ${seat.value} reservada!`

    // newbooking(seat);
}

// function newbooking(seat) {
//     let cadeira = seat.value
    

//     let flag = true;

//     while (flag == true) {
//         let newb = prompt("Deseja fazer uma nova reserva?");
        
//         if (newb == "s") {
//             if (busySeat.indexOf(cadeira) != -1) {
//                 alert("ocupado")
                
//             }else{

//             }
//         }

        
        
//     }

// }


    
    