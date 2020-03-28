import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import passport from "passport";
import schema from "./schema";
import "./passport";

//process.new.PORT를 읽어서 PORT변수에 추가
//만약 없다면 4000으로 설정. 모든 설정값들을 env에 추가하는건 좋은 습관이다.
const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));
// 인증을 한 접근만 허용하도록 하는 코드
server.express.use(passport.authenticate("jwt"));

server.start({ port: PORT }, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
