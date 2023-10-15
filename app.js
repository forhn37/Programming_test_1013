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

  if(request.url === "/pikachubg") {
    console.log(request.url);
    fs.readFile("pikachubg.jpg",function(err,data){
      if(err){
        console.error('에러 입니다.');
      } else {        
        response.writeHead(200, {'Content-Type': 'image/jpeg'})
        response.end(data);
      }
    })
  }
// 이미지파일을 사용해야하므로 이미지를 호스팅는 코드작성
// path 모듈 사용
  const path = require('path');
  // 빈 배열 arr 선언
  let arr =[];
  // 경로에 있는 파일을 읽는 메소드(readdir) 사용
  fs.readdir("./pokemon", function(err, filelist) {
    if(err) {
      console.log("err")
    } 
    // pathparse 빈 문자열 선언 후
    pathparse = "";
    // 반복문을 통하여 filelist를 arr란 배열에 넣어준 후 
    for(let i=0; i<filelist.length; i++ ) {
      arr[i] = filelist[i];
      // url부분의 /다음에 넣어줄 title을 확인하기 위하여 .png 확장자를 제외한 부분을 pathparse에 넣어줌
      let pathparse = path.basename(arr[i], ".png");
      // 파일명 잘 들어오는지 확인
      // console.log(pathparse);
      // title은 파일명
      if(request.url === `/${pathparse}`) {
          // console.log(request.url);
          // 배열의 순서를 읽어옴
          fs.readFile(`./pokemon/${arr[i]}` ,function(err,data){
              if(err){
                  console.error('에러 입니다.');
                } else {        
                    response.writeHead(200, {'Content-Type': 'image/png'})
                    response.end(data);
                  }
      })
    }
  }
  })
  }).listen(5050)
