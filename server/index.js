import { express } from 'express';
let app = express();

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(1000, () => {
  console.log(`Server started on port`);
});
