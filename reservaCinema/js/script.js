var freeSeat = ["A1", "A2", "A3" , "A4", "A5", "A6", "A7", "A8", "A9"];
var busySeat = []

function select(seat) {
    
    console.log(freeSeat);

    for (i in freeSeat) {
        if (freeSeat[i] == seat.value) {
            busySeat.push(seat.value);
            freeSeat.splice(i, 1);
            
            console.log(busySeat);
            console.log(freeSeat)
        }

    }

    isBusy(seat.value)

}


function isBusy(bSeat) {
     if (busySeat.indexOf(bSeat.value) !== -1) {
         alert("ocupado")
     }

}

    
    