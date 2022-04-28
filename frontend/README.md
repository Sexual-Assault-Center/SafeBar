<div style="text-align: center;">
<img width="500" alt="next supabase and storybook logos" src="https://user-images.githubusercontent.com/29741570/147683398-ea745d9c-efcd-483c-a5be-0f68ea23ace0.png" />
</div>

This starter was created using the [Supabase Quick Start Guide](https://supabase.com/docs/guides/with-nextjs) and the [Storybook/Next JS Guide](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/)

This starter also includes a branch [without Storybook](https://github.com/drteresavasquez/next-supabase-storybook-starter/tree/no-storybook).

## Getting Started with Next JS and Storybook

First, do the installations, then run the development server:

Install Yarn
```bash
npm install --global yarn
```
Then run the following commands in order

```bash
yarn install
```
```bash
npm run prepare
```
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
## Getting started with Storybook

In a new terminal, start the storybook server (make sure you are in the `frontend` directory)

```bash
npm run storybook
```

Open [port 6006](http://localhost:6006/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Netlify
- Build settings:
  - base directory: `/frontend`
  - build directory: `/frontend/out` 
  - build command: `yarn build`

## Authentication
We are authenticating users using Firebase Authentication thorugh Google.
We will not be saving any user info, so the UID will be attached to user specific POST to database

- Setup .env file with secrets
