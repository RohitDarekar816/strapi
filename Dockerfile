FROM node:20-alpine

# Build tools for native modules (better-sqlite3, etc.)
RUN apk add --no-cache python3 make g++ git

# Enable Corepack for Yarn 4 support
RUN corepack enable

WORKDIR /app

# Copy Yarn configuration first (cache-friendly)
COPY .yarn ./.yarn
COPY .yarnrc.yml yarn.lock package.json lerna.json nx.json rollup.utils.mjs ./

# Copy all workspace members (required for yarn workspaces)
COPY packages ./packages
COPY examples/getstarted ./examples/getstarted
COPY examples/plugins ./examples/plugins
COPY scripts ./scripts
COPY .github/actions ./.github/actions

# Install all dependencies
RUN yarn install

# Build all monorepo packages
RUN yarn build

WORKDIR /app/examples/getstarted

EXPOSE 1337

CMD ["yarn", "develop"]
