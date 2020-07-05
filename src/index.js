import express from 'express';
import Response from './helpers/Response';
import routes from './routes';

const app = express();


app.use('/', routes);

app.get('/', (req, res) =>
  Response.successMessage(
    res,
    'Free API that provides provinces, districts, sectors, villages and cells found in Rwanda',
    '',
    200
  )
);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}...`);
});
