-D는 --save-dev의 줄임말이다.
npm install --production으로 해당 npm패키지를 설치할때 모든 의존성을 받는 것.
하지만 -D 옵션을 붙이고 설치하면 --production으로 자동설치되는 의존성에서 제외된다. ( 즉, 설치X )
nodemon은 src/server.js에 있는 코드를 실행하는 script를 작성하는데 필요하다.
또 한, node application의 js파일이 수정되었을때 그걸 감지하고 자동으로 서버를 재시작해준다. ( node.js는 그걸 못함. )
