var freeSeat = ["A1", "A2", "A3" , "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
var busySeat = []



function select(seat) {
            var booking = document.getElementsByClassName("booking")[0];
            for (i in freeSeat) {
                freeSeat[i] = true
            }

            disponiveis(seat)

            for (i in freeSeat) {
        
                if (freeSeat[i] == true) {
                    booking.innerHTML = `cadeira ${seat.value} reservada!`
                }else{
                    booking.innerHTML = `RESERVADA!`
                }
            }
    
    

    // newbooking(seat);
}

function disponiveis(s) {
    let set = s.value
    for (i in freeSeat) {
        if (freeSeat[i] == true) {
                busySeat.push(set);
                freeSeat.splice(i, 1);
                freeSeat[i] = false;
                return freeSeat[i]
                
        }
    }
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


    
    