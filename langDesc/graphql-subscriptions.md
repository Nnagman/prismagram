graphql-subscriptions는 pub/sub 시스템과 함께 GraphQL을 implement subscriptions하게 끔 GraphQL와 연결한다.

일단 pub/sub이란 받는 사람과 보내는 사람을 분리하는 다대다 비동기 메시징을 제공하는 이벤트 수집 및 전달 시스템이다.
(즉, 미들웨어의 유연성과 안정성을 제공한다.)

그럼 pub/sub시스템처럼 implement subscriptions한다는 것은 다대다 비동기 메시징을 제공하는 이벤트 수집 및 전달 시스템을 구현 한다는 것이다.
graphql-subscriptions을 사용하면 GraphQL에서 보낸 메시지는 graphql-subscriptions를 통해 처리되고 사용자(들)에게 전달된다.

추가) subscription이란 특정 이벤트가 발생했을때 서버가 클라이언트로 데이터를 전송하는 GraphQL의 기능이다.
