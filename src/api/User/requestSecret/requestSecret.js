import { sendSecretMail, generateSecret } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    requestSecret: async (_, args, { request }) => {
      const { email } = args;
      const loginSecret = generateSecret();
      try {
        throw Error();
        await sendSecretMail("nnagman@gmail.com", loginSecret);
        await prisma.updateUser({
          data: { loginSecret },
          where: { email }
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};
