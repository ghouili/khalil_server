const Hello = (req, res) => {
  const { name } = req.params;
  return res.json({ staus: "success", message: `welcome Mr ${name}`, error: false });
};

exports.Hello = Hello;
