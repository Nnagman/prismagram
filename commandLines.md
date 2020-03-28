npm init
npm install graphql-yoga
npm install nodemon -D
npm install babel-cli -D

npm install dotenv
npm install @babel/node, @babel/preset-env, @babel/core

npm install morgan
npm install graphql-tools, merge-graphql-schemas

npm install -g prisma
prisma init

git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch prisma.yml' --prune-empty --tag-name-filter cat -- --all
git push origin master --force
//실수로 올린 파일들 전부 삭제하기

npm intall nodemailer

npm install passport passport-jwt
