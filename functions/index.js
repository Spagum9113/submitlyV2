// const functions = require('firebase-functions');
// const { parse } = require('url');
// const next = require('next');

// const app = next({ dev: false, conf: { distDir: '.next' } });
// const handle = app.getRequestHandler();

// // Explicitly specify the region
// exports.nextApp = functions
//     .https.onRequest((req, res) => {
//         const parsedUrl = parse(req.url, true);
//         return app.prepare().then(() => handle(req, res, parsedUrl));
//     });


const functions = require('firebase-functions');
const { createServer } = require('http');
const next = require('next');

const app = next({ dev: false, conf: { distDir: '.next' } });
const handle = app.getRequestHandler();

exports.nextApp = functions.https.onRequest(async (req, res) => {
    await app.prepare();
    handle(req, res);
});

