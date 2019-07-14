import { App } from './App';

const port = process.env.PORT || 3000;

const server = App.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
