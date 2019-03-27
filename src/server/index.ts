import * as http from 'http';
import * as url from 'url';
import { getMass, home } from '../api/root/home';
import { getStaticFile } from './static';

const HOST = '127.0.0.1';
const PORT = 3000;

/**
 * Handle routing for API calls
 * @param request request from client
 * @param response response for client
 */
const API = (request: http.IncomingMessage, response: http.ServerResponse) => {
  const parsedURL = url.parse(request.url!, true);

  if (parsedURL.pathname && parsedURL.pathname.includes('.')) {
    getStaticFile(parsedURL.pathname, response);
  } else {
    switch (parsedURL.pathname) {
      case '/':
        if (request.method === 'GET') {
          home(response);
        } else if (request.method === 'POST') {
          getMass(request, response);
        } else {
          response.statusCode = 403;
        }
        break;
      default:
        response.statusCode = 404;
        break;
    }
  }
};

/**
 * Create server
 */
const SERVER = http.createServer(API);

/**
 * Start server
 */
// tslint:disable-next-line
SERVER.listen(PORT, HOST, () => console.log(`server running at http://${HOST}:${PORT}`));
