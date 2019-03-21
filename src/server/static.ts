import * as fs from 'fs';
import * as http from 'http';
import { join } from 'path';

/**
 * Root path (i.e. /src directory)
 */
const rootPath = join(__dirname, '..');

/**
 * Get static files
 */
export const getStaticFile = (path: string, response: http.ServerResponse) => {
  fs.readFile(rootPath + path, (error, data) => {
    if (error) {
       response.writeHead(404);
       response.end();
    } else {
       response.writeHead(200);
       response.write(data);
       response.end();
    }
 });
};
