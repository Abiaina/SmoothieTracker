FROM node:12.14.1-stretch-slim


ARG UID=10001
ARG GID=10001
ARG NAME=smoothie

# Creates a User/Group with uid/gid 10001 that can r/w/e to /smoothie directory.
RUN groupadd --gid "${GID}" "${NAME}group" \
    && useradd --no-log-init --create-home --gid "${NAME}group" --uid "${UID}" "${NAME}user" \
    && chmod -R 755 /usr/local



WORKDIR /smoothie
COPY package.json package-lock.json ./
RUN npm install
USER "${NAME}user"
COPY public ./public
COPY src ./src
CMD ["npm", "start"]