const fs = require("fs");
let arr =[];
fs.readdirSync("./pokemon", function(err, filelist) {
  if(err) {
    console.log("err")
  } 
  for(let i=0; i<filelist.length; i++) {
    arr[i] = filelist[i];
  }
})
console.log(arr);