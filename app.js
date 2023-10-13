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

  if(request.url === "/sub") {
    console.log(request.url);
    fs.readFile("index.html",function(err,data){
      if(err){
        console.error('에러 입니다.');
      } else {        
        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data);
      }
    }
    }).listen(5050)
