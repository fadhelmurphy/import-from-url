# import-from-url
This repo for example I use urlImport to load component through url with Next.js 12 or later. You can check pages/index.js, The Header menu component load from https://raw.githubusercontent.com/fadhelmurphy/import-from-url/main/components-app/public/share-components/navbar.js and it can be render on server-side.

## How to run Project

```bash
git clone https://github.com/fadhelmurphy/import-from-url.git

cd import-from-url/host-app

yarn install

yarn dev
```

## Tech Stack

- Next.js 12 or later
- Webpack 5

## Reference

- https://nextjs.org/docs/api-reference/next.config.js/url-imports
- https://github.com/TomasHubelbauer/next-url-import-react-component