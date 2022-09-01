exports.number = (req, res) => {
  try {
    if (!isNaN(req.params.id)) {
      return res.status(200).send({
        state: true,
        message: "Value is Number",
      });
    }
    throw new Error(false);
  } catch (error) {
    return res.status(500).send({
      state: false,
      message: "Value is not Number",
    });
  }
};
