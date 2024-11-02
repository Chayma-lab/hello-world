import { createServer } from 'http';
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
  response.end('Hello World from AWS Elastic Beanstalk!');
};

const server = createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});