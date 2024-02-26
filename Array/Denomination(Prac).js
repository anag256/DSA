function countCurrency(amount) {
    var notes = [2000, 500, 200, 100];
    var noteCounter = [0, 0, 0, 0];

    for (var i = 0; i < 4; i++) {
      if (amount >= notes[i]) {
        noteCounter[i] = Math.floor(amount / notes[i]);
        amount = amount%notes[i];
      }
    }
    // Print notes denomination
    console.log("Denomination Count:");
    for (var j = 0; j < 4; j++) {
      if (noteCounter[j] !== 0) {
        console.log(notes[j] + " : " + noteCounter[j]);
      }
    }
  }

  countCurrency(3300);