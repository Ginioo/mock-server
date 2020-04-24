import express from "express";
import mockServerRouter from "express-mock-server-router";
import morgan from 'morgan';

const app = express();
const port = 3001;
const url = "/api/v1.mock";
const fakeEndpoint = `${url}/fake`;
const path = "data/";
// `data/` is a under your project root.
app.use(
  mockServerRouter({
    routes: [{ url, path }]
  })
);

app.use(morgan('tiny'));

app.get("/", (req, res) => {
  res.send(
    `Mock API endpoint is running. ([GET] <a href="${fakeEndpoint}"}>${fakeEndpoint}</a>)
    <div>
      response:
      <code>
        {
          "data": "Sample data"
        }
      </code>
    </div>`
  );
});

app.listen(port, () => {
  console.log(`mock server is running on port ${port}`);
});

