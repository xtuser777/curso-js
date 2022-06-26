exports.indexGet = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="qualquercoisa"><br>
    Outro campo: <input type="text" name="aquioutrocampo">
    <button>Olá mundo</button>
    </form>
    `);
};

exports.indexPost = (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.qualquercoisa}`);
};