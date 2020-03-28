import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { prisma } from "../generated/prisma-client";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const verifyUser = async (payload, done) => {
  try {
    const user = await prisma.user({ id: payload.id });
    if (user !== null) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};

// 미들웨어 함수는 req(request) res(response) next를 인자로 받는다.
export const authenticateJwt = (req, res, next) =>
  //해당 함수에서는 passport에 어떤 것도 입력되지 않기를 원하기 때문에 seesion: false 옵션을 추가한다.
  //passport는 함수에 user의 정보를 보내준다. 어디서? verifyUser 함수에서.
  passport.authenticate("jwt", { sessions: false }, (error, user) => {
    //user가 존재한다면 정보를 req객체에 붙여준다.
    if (user) {
      req.user = user;
    }
    //express에서는 미들웨어를 지나서 라우트가 실행된다.
    //토큰을 받아서 해석하고, 사용자를 찾고, 사용자가 존재한다면 req 객체에 사용자를 추가하고 나면 grqphql함수를 실행한다.
    next();
    //여기 있는 내용들은 함수이기때문에 인자를 전달해야 한다. 그리고 리턴된 함수를 fn(req res, next)와 같이 실행한다.
    //여기선 graphql 함수가 실행된다.
  })(req, res, next);

passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();
