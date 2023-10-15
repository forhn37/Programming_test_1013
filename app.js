const http = require("http");
const fs = require('fs');
// 기본 서버 구축
http.createServer(function(request, response) {
  // mainpage
  if(request.url === "/") {
    console.log(request.url);
    fs.readFile("index.html",function(err, data) {
      if(err) {
        console.err('에러입니다.');
      } else {
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data);
      }
      })
  }

  if(request.url === "/mouseclick") {
    console.log(request.url);
    fs.readFile("mouseclick.html",function(err,data){
      if(err){
        console.error('에러 입니다.');
      } else {        
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data);
      }
    })
  }

  if(request.url === "/binggo") {
    console.log(request.url);
    fs.readFile("binggo.html",function(err,data){
      if(err){
        console.error('에러 입니다.');
      } else {        
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data);
      }
    })
  }

  if(request.url === "/teamlotto") {
    console.log(request.url);
    fs.readFile("teamlotto.html",function(err,data){
      if(err){
        console.error('에러 입니다.');
      } else {        
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data);
      }
    })
  }

  if(request.url === "/pokemonimage") {
    console.log(request.url);
    fs.readFile("pokemonimage.jpg",function(err,data){
      if(err){
        console.error('에러 입니다.');
      } else {        
        response.writeHead(200, {'Content-Type': 'image/jpeg'})
        response.end(data);
      }
    })
  }

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


  // if(request.url === "/ggobugi") {
  //   console.log(request.url);
  //   fs.readFile("ggobugi.png",function(err,data){
  //     if(err){
  //       console.error('에러 입니다.');
  //     } else {        
  //       response.writeHead(200, {'Content-Type': 'image/png'})
  //       response.end(data);
  //     }
  //   })
  // }
  }).listen(5050)
