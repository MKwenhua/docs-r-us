import { renderToString } from 'react-dom/server';
const prodEnv = process.env.NODE_ENV === 'production';
const assetBase = prodEnv ? 'https://dq8llwxgkllay.cloudfront.net/public' : '';

const RenderPage = (content, preloadedState) => (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Docs R Us</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
      <link type="image/png" rel="shortcut icon" href="https://dq8llwxgkllay.cloudfront.net/docs-r-us-logo.png">
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
      <link rel="stylesheet" href="${assetBase}/css/app_bundle.css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

      <script src="${assetBase}/app_bundle.js" defer></script>
    </head>
    <body>
      <div id="root">${renderToString(content)}</div>
      <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
    </body>
  </html>
`)

export default RenderPage;
