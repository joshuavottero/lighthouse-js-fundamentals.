
const finalPosition = function (moves) {
  let location = [0,0];
  for (let i = 0; i < moves.length; i++){
    if (moves[i] == "north"){
        location[1] += 1;
    }
    else if(moves[i] == "south"){
      location[1] -= 1;
    }
    else if(moves[i] == "east"){
      location[0] += 1;
    }
    else if(moves[i] == "west"){
      location[0] -= 1;
    }
  }
  return location;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));

//705-337-6111 ex 2518