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




app.listen(3000, ()=>{
    console.log('App listening to 3000');
    
})