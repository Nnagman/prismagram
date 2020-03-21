require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4000;
//process.new.PORT를 읽어서 PORT변수에 추가
//만약 없다면 4000으로 설정. 모든 설정값들을 env에 추가하는건 좋은 습관이다.

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
