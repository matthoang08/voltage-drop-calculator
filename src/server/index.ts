import App from './App';

const port = process.env.PORT || 3000;

const server = App.listen(port, () => {
  // if (err) {
  //   return console.log(err);
  // }

  return console.log(`server is listening on ${port}`);
});