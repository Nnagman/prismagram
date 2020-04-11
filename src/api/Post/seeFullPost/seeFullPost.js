import { prisma } from "../../../../generated/prisma-client";
import { COMMENT_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeFullPost: async (_, args) => {
      const { id } = args;
      const post = await prisma.post({ id });
      const comments = await prisma
        .post({ id })
        .comments()
        //fragment를 사용하여 특정한 쿼리문에선 schema의 내용을 부분적으로 불러 올 수 있게 강제할 수 있다.
        //아래 fragment는 user란 schema에서 username만 불러 올 수 있다.
        .$fragment(COMMENT_FRAGMENT);
      const likeCount = await prisma
        .likesConnection({
          where: { post: { id } }
        })
        //aggregate 함수 내부의 count 함수로 쿼리문에 입력한 id를 가진 포스트의 좋아요 수를 likeCount에 담는다.
        .aggregate()
        .count();
      const files = await prisma.post({ id }).files();
      const user = await prisma.post({ id }).user();
      return {
        post,
        comments,
        likeCount,
        files,
        user
      };
    }
  }
};
