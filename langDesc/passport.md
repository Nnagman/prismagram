Passport는 Node.js용 인증 미들웨어입니다.

passport는 인증에 관련된 모든 일을 한다. jwt이나 cookie에서 정보를 가져와 사용자 정보에 serialize(저장) 하며 가져어온 정보를 해독한 후 사용자 객체를 (express의) request에 붙여준다.

이 project에서는 JSON web token을 사용하여 endpoints 인증을 할 수 있게해주는 모듈인 passport-jwt을 사용하였다.

passport-jwt를 사용하는 이유는 JWT(JSON web token)을 인증에 사용 및 session없이 RESTful endpoint를 보호하기 위해서다.
