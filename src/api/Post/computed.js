import { prisma } from "../../../generated/prisma-client";

export default {
  Post: {
    isLiked: (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.like({
        AND: [
          {
            user: {
              id: user.id
            }
          },
          {
            post: {
              id
            }
          }
        ]
      });
    },
    likeCount: parent =>
      prisma
        .likesConnection({
          where: { post: { id: parent.id } }
        })
        //aggregate 함수 내부의 count 함수로 쿼리문에 입력한 id를 가진 포스트의 좋아요 수를 likeCount에 담는다.
        .aggregate()
        .count()
  }
};
