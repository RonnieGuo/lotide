const raisinAlarm = function (cookie) {

for(let i=0; i<cookie.length; i++){
  if (cookie[i] === "🍇") {
    return 'Raisin alert!'
  }
}
  
  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function (cookies) {
  const output = [];
  for(let i=0; i < cookies.length; i++){
    let alert = false;
    for (let j = 0; j < cookies[i].length; j++) {
      if (cookies[i][j] === "🍇") {
        alert = true;
        break;
      } 
    }
    if (alert) {
      output.push('Raisin alert!');
    } else {
      output.push("All good!");
    }
   }
  
    return output;
  }	 
  

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);