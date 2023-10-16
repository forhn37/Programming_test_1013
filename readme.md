아이디어 기본안
하현,하민이의 게임사이트를 만들기로 하였다. 게임은 3가지 (pokemonclick, binggogame, teamlotto)를 넣을 예정이며 아이들의 나이가 어려 쉽게 할 수 있도록 인터페이스를 제작할 예정이다. 또한, 본 서비스는 serving을 통해 localhost에서 작동 될 예정이므로, app.js파일은 서버가동 목적, 나머지는 3개의 게임은 html파일로 작성될 예정이다. 

기본절차
1. app.js파일에서 http module, fs module을 활용하여 server를 구축한다.
2. index파일은 3가지 파일을 넘어갈 수 있도록 하이퍼링크를 기반으로 main page를 제작한다. css는 기본적인 사항만 구성한다.
3. pokemon click game은 기존의 mouse click game을 토대로 dot자리에 포켓몬 이미지를 설정한다. css는 기본적으로 설정되어 있으므로 따로 수정하지 않는다.
4. binggo game은 경쟁하는 구조로 만들어져있으므로 게임은 같은 그림 찾기 게임을 토대로 제작한다. 시작시 제한시간이 시작되고 빨리 같은 그림을 클릭 후 stop버튼을 누르는 식으로 수정한다. 앞으로 binggo game은 same card game이라고 명명한다.
5. teamlotto game은 랜덤함수를 기반으로 pokemon리스트의 인덱스를 무작위로 가져와 5명을 화면에 표시한다. random button 클릭시 새로운 포켓몬이 구성된다. 
6. server 구현시 readfile을 통하여 각각의 파일들(pokemonclick game, samecard game, teamlotto)을 읽어와 server에 호스팅 한다. 
7. 6번과정 확인 후 각각의 게임들의 css파일을 수정하여 pokemon image에 맞게 수정한다. 


  