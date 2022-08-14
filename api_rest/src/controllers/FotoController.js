class FotoController {
  async create(req, res) {
    return res.json(req.file);
  }
}

export default new FotoController();
