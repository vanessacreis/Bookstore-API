const indexController = (app) => {
  app.get("/", (req, res) => {
    res.send(
      `<h1 align="center">Bookstore API</h1>
      <p align="center">Projeto de finalização de módulo 4. <br/>Repositório <a href="https://github.com/vanessacreis/Bookstore-API">aqui</a></p>`
    );
  });
};

export default indexController;
