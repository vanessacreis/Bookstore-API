const indexController = () => {
  app.get("/", (req, res) => {
    res.send(
      `<h1 align="center">Bookstore API</h1>
      <p align="center">Repositório <a href="https://github.com/vanessacreis/Bookstore-API">aqui</a></p>`
    );
  });
};

export default indexController;
