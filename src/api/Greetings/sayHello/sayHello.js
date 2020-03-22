import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    sayHello: async () => {
      console.log(await prisma.users());
      //client가 서버에 정보를 요청하고 서버가 prisma에 요청을 한다.
      //이렇게 하면 엔드포인트를 client단에서 노출하지 않고 정보를 요청할 수 있어서 보안에 좋다.
      return "Hello";
    }
  }
};
