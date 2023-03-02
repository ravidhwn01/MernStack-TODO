// function getTotal(numbers){
// console.log(`hello there are ${numbers} numbers `);
// }
// setTimeout(getTotal, 1000,12);
// function countdown(seconds) {
//     function tick() {
//       console.log(seconds + " seconds left");
//       seconds--;
//       if (seconds >= 0) {
//         setTimeout(tick, 1000);
//       } else {
//         console.log("Timer completed");
//       }
//     }
//     tick();
//   }
  
//   countdown(10); // start a 10-second countdown
  

  function coutNumber(number){
    function tick(){
        console.log(number+" seconds left");
        number--;
        if(number>=0){
            setTimeout(tick, 1000);
        }
        else{
            console.log('time khatm!');
        }
    }
    tick();
  
  }
  coutNumber(20)

  //promises
  function getdata(data){
    return new Promise((res,rej)=>{
        if(data>0){
            res(data);
        }
    }).then()
  }