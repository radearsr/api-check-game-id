exports.reformatResultJson = (detailResults) => {
  const newDetailResults = JSON.parse(detailResults);
  const idServer = newDetailResults["Server ID"] ? newDetailResults["Server ID"] : null;
  if (!idServer) return {
    idPelanggan: newDetailResults["ID Pelanggan"],
    username: newDetailResults["Username"],
  }
  return {
    idPelanggan: newDetailResults["ID Pelanggan"],
    username: newDetailResults["Username"],
    idServer: idServer,
  };
};
