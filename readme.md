graph TD
  A[하현이하민이 게임방 
		프로젝트시작] --> B{플로우차트작성}
	B ---|app.js|C[서버구동]
	B ---|index.html| D[메인페이지]
	B ---|mouseclick.html| E[마우스클릭게임 ]
	B ---|binggo.html| F[포켓몬빙고게임]
	B ---|teamlotto.html| G[포켓몬팀구성게임]
	C ---|from D,E,F,G to C| H[포켓몬 게임방]
	D --> H
	E --> H
	F --> H
	G --> H

  