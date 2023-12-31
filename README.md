![Discord bot logo](.github/assets/banner.svg "Discord bot logo")
[![bun-test](https://github.com/ArthurSegato/korosan/actions/workflows/workflow.yml/badge.svg)](https://github.com/ArthurSegato/korosan/actions/workflows/workflow.yml)

Korosan is a discord bot created to add extra features to my private server, such as check if my applications/servers/API's are online, calculate response times and etc...

## Requirements

- Bun v1.0.14 and above **OR** Node v21.2.0 and above

## Environment variables

.env variables for this project:

```Properties
DISCORD_TOKEN=""
CLIENT_ID=""
GUILD_ID=""
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development

Start the bot without registering slash commands:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun dev
```

## Production

Start the bot and register slash commands:

```bash
# npm
npm run start

# pnpm
pnpm run start

# yarn
yarn start

# bun
bun start
```

## Contributors

- [@ArthurSegato](https://github.com/ArthurSegato)
