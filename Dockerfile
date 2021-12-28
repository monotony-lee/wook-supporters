FROM node:16.13.0

ENV PORT 4000

ENV MONGO_URI mongodb://localhost:27017/docker-node-mongo

#ENV MONGO_URL mongodb://mongo-0.mongo:27017

WORKDIR /usr/src/app

# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./

# RUN npm install
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production

# 앱 소스 추가
COPY ./ .

EXPOSE 3000
CMD [ "node", "app.js" ]