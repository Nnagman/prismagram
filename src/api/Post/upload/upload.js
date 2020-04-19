import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    upload: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { caption, files, location } = args;
      const post = await prisma.createPost({
        caption,
        location,
        //Post를 작성하는 user는 요청을 보낸 user로 connect한다.
        user: { connect: { id: user.id } }
      });
      files.forEach(
        async file =>
          await prisma.createFile({
            url: file,
            post: {
              //위의 connect처럼 생성된 post에 connect한다.
              connect: {
                id: post.id
              }
            }
          })
      );
      return post;
    }
  }
};
