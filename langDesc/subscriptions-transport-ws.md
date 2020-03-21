subscriptions-transport-ws의 README.md의 내용이다.

A GraphQL WebSocket server and client to facilitate GraphQL queries, mutations and subscriptions over WebSocket.
GraphQL query들을 WebSocket을 통해 mutations 그리고 subscriptions을 GraphQL의 WebSocket server 및 client가 할 수 있게해준다.

subscriptions-transport-ws is an extension for GraphQL, and you can use it with any GraphQL client and server (not only Apollo).
subscriptions-transport-ws는 GraphQL의 extension으로 당신은 GraphQL 사용자와 서버 (아폴로뿐만아니라 다른곳에서도) 사용가능하다.

subscriptions-transport-ws는 설치만하면 바로 Pus/sub 인스턴스를 생성하여 publisher가 보낸 메시지를 처리하여 사용자(subscriber)들에게
전달할 수 있다. (graphql-subscriptions를 사용함.)

또 한, 단순히 subscription들만 처리하는 것이 아닌 일반적인 HTTP network interface도 같이 처리할 수 있다.
