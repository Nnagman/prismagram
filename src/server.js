import "./env";

import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import passport from "passport";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport";

//process.new.PORT를 읽어서 PORT변수에 추가
//만약 없다면 4000으로 설정. 모든 설정값들을 env에 추가하는건 좋은 습관이다.
const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  // context는 resolver 사이에서 정보를 공유할 때 사용한다.
  // 예를 들어, 이 prisma를 server.js에서 한 번만 import 한 후에 prisma를 context에 추가할 수 있다.
  schema,
  context: ({ request }) => ({ request })
});

server.express.use(logger("dev"));
// 인증을 한 접근만 허용하도록 하는 코드
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
