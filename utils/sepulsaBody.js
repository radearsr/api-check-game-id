module.exports = {
  FREEFIRE: (idPelanggan) => ({
    url: "http://api.sepulsa.com/api/v1/oscar/products/564/",
    quantity: 1,
    options: [
      {
        option: "https://api.sepulsa.com/api/v1/oscar/options/1/",
        value: idPelanggan,
      },
    ],
  }),
  MOBILELEGEND: (idPelanggan, idServer) => ({
    url: "http://api.sepulsa.com/api/v1/oscar/products/2203/",
    quantity: 1,
    options: [
      {
        option: "https://api.sepulsa.com/api/v1/oscar/options/1/",
        value: idPelanggan,
      },
      {
        option: "https://api.sepulsa.com/api/v1/oscar/options/21/",
        value: idServer,
      },
    ],
  }),
  AOV: (idPelanggan) => ({
    url: "http://api.sepulsa.com/api/v1/oscar/products/576/",
    quantity: 1,
    options: [
      {
        option: "https://api.sepulsa.com/api/v1/oscar/options/1/",
        value: idPelanggan,
      },
    ],
  }),
  TOMANDJERRY: (idPelanggan, idServer) => ({
    url: "http://api.sepulsa.com/api/v1/oscar/products/2338/",
    quantity: 1,
    options: [
      {
        option: "https://api.sepulsa.com/api/v1/oscar/options/1/",
        value: idPelanggan,
      },
      {
        option: "https://api.sepulsa.com/api/v1/oscar/options/21/",
        value: idServer,
      },
    ],
  }),
  CALLOFDUTY: (idPelanggan) => ({
    url: "http://api.sepulsa.com/api/v1/oscar/products/708/",
    quantity: 1,
    options: [
      {
        option: "https://api.sepulsa.com/api/v1/oscar/options/1/",
        value: idPelanggan,
      },
    ],
  }),
  LORDSMOBILE: (idPelanggan) => ({
    url: "http://api.sepulsa.com/api/v1/oscar/products/746/",
    quantity: 1,
    options: [
      {
        option: "https://api.sepulsa.com/api/v1/oscar/options/1/",
        value: idPelanggan,
      },
    ],
  }),
  MARVELSUPERWAR: (idPelanggan) => ({
    url: "http://api.sepulsa.com/api/v1/oscar/products/2274/",
    quantity: 1,
    options: [
      {
        option: "https://api.sepulsa.com/api/v1/oscar/options/1/",
        value: idPelanggan,
      },
    ],
  }),
};
