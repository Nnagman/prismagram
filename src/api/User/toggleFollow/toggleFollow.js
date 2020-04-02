import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    toggleFollow: async (_, args, { request }) => {
      isAuthenticated(request);
      const { id } = args;
      const { user } = request;
      try {
        //prisma에서 제공하는 함수 $exists는 1개 이상의 요소가
        //해당 조건에 만족한다면 true를 반환한다.
        const existingFollow = await prisma.$exists.user({
          AND: [{ id: user.id }, { following_some: { id: id } }]
        });

        if (existingFollow) {
          await prisma.updateUser({
            where: { id: user.id },
            data: {
              following: {
                connect: { id }
              }
            }
          });
        } else {
          await prisma.updateUser({
            where: { id: user.id },
            data: {
              following: {
                connect: { id }
              }
            }
          });
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};
