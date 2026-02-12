const serverless =  require('serverless-http');
const app = require("../../public/index.js");
MediaSourceHandle.export.handler = serverless(app);
