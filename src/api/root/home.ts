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
      <title>Hello World</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <script src="app/index.js"></script>
    </head><body><app-component></app-component></body></html>`);
};

/**
 * Masses of planets
 */
const masses = {
  Earth: 5.972 * Math.pow(10, 24),
  Mars: 6.39 * Math.pow(10, 23),
};

/**
 * Get mass of the planet based on body with name of planet i.e. { body: 'Earth' }
 */
export const getMass = (request: http.IncomingMessage, response: http.ServerResponse) => {
  let body = '';
  request.on('data', (chunk) => body += chunk.toString());
  request.on('end', () => {
    const mass = body === 'Earth' ? masses.Earth : body === 'Mars' ? masses.Mars : NaN;
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.end(JSON.stringify({mass}));
  });
};
