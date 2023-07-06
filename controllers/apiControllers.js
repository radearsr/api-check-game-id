const sepulsaServices = require("../services/sepulsaServices");

const postCheckGameId = async (req, res) => {
  try {
    const { idPelanggan, idServer, gameTitle } = req.body;
    const result = await sepulsaServices.sepulsaGetDetailId(idPelanggan, idServer, gameTitle);
    return res.json({
      status: "success",
      message: "Berhasil melakukan check",
      data: {...result, gameTitle },
    });
  } catch (error) {
    console.log(error.message);
    res.statusCode = 500;
    res.json({
      status: "error",
      message: "Terjadi kegagalan pada server",
    });
  }
};

module.exports = {
  postCheckGameId,
};
