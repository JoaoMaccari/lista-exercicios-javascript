var freeSeat = ["A1", "A2", "A3" , "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
var busySeat = []
var booking = document.getElementsByClassName("booking")[0];


function select(seat) {

    
    
    console.log(freeSeat);
    
    console.log(seat.value)
    for (i in freeSeat) {
        
        if (freeSeat[i] == seat.value) {
            busySeat.push(seat.value);
            freeSeat.splice(i, 1);
            
            console.log(busySeat);
            console.log(freeSeat);
            var btn = document.getElementsByClassName[i]
            console.log(btn);
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


    
    