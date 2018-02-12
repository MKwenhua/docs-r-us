import { renderToString } from 'react-dom/server';
const prodEnv = process.env.NODE_ENV === 'production';
const assetBase = prodEnv ? 'https://dq8llwxgkllay.cloudfront.net/public' : '';

const RenderBookingPage = (content, preloadedState) => (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Find Doctors</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
      <link type="image/png" rel="shortcut icon" href="https://dq8llwxgkllay.cloudfront.net/xing-icon.png">
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <link rel="stylesheet" href="${assetBase}/css/booking.css">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

      <script src="${assetBase}/booking.js" defer></script>
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

export default RenderBookingPage;
