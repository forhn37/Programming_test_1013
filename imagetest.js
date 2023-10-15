const fs = require("fs");
const path = require('path');
let arr =[];
fs.readdir("./pokemon", function(err, filelist) {
  if(err) {
    console.log("err")
  } 
  pathparse = "";
  for(let i=0; i<filelist.length; i++ ) {
    arr[i] = filelist[i];
    let pathparse = path.basename(arr[i], ".png");
    console.log(pathparse);
    if(request.url === `/${pathparse}`) {
        console.log(request.url);
        fs.readFile(`./pokemon/${arr[i]}` ,function(err,data){
            if(err){
                console.error('에러 입니다.');
              } else {        
                  response.writeHead(200, {'Content-Type': 'image/jpg'})
                  response.end(data);
                }
    })
  }
}
})