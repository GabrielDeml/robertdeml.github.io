# HikeNow

A web app for hiking adventures.

1

## Setup

```
npm ci
```

## Build

```
npm run build
```

Compiles TypeScript from `src/` to `dist/` and copies static assets from `web/` to `dist/`.

## Serve

```
npm start
```

Serves the `dist/` directory on a local server (port 3000) with an HTTPS proxy on port 3001. HTTPS is required for the Geolocation API (GPS) to work on mobile devices.

Open **https://localhost:3001** in your browser (self-signed cert — accept the warning).

## Watch

```
npm run watch
```

Rebuilds on file changes.

## Android app (TWA)

```
npm i -g @bubblewrap/cli
bubblewrap init --manifest="https://robertdeml.github.io/manifest.json"
bubblewrap build
```

Use package name `io.github.robertdeml.hikenow` to match `web/.well-known/assetlinks.json`.

`bubblewrap build` prints the signing key's SHA256 fingerprint (or get it later with
`keytool -printcert -jarfile app-release-signed.apk`). Put it in
`web/.well-known/assetlinks.json` and deploy — without it the app shows a browser URL bar.


# TODOs

- able to scale image to fit the screen
- able to zoom in and out and show paths
