import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const userProfile = await prisma.user({ id: user.id });
      const posts = await prisma.user({ id: user.id }).posts();
      return {
        user: userProfile,
        posts
      };
    }
  },
  User: {
    // parent는 해당 resolver를 call하는 사용자의 User 정보를 준다.
    fullName: parent => {
      return `${parent.firstName} ${parent.lastName}`;
    }
  }
};
