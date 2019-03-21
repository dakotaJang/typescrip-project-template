import * as http from 'http';

/**
 * Send the response for navigating to home
 * @param response
 */
export const home = (response: http.ServerResponse) => {
  response.setHeader('Content-Type', 'text/html');
  response.end(`<!DOCTYPE html><html><head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Page Title</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <script src="app/index.js"></script>
    </head><body><app-component></app-component></body></html>`);
};
