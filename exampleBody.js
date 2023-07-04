const axios = require("axios");
const sepulsaBody = require("./sepulsaBody");

const sepulsaGetMobileLegend = async (idPelanggan, idServer) => {
  try {
    const generateBody = sepulsaBody["MOBILELEGEND"];
    const configForPost = {
      url: "https://api.sepulsa.com/api/v1/carts/add/",
      headers: {
        accept: "application/json",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-chital-api-key": "qQFAFT8d.6Yt44sZWZdkd1P4jFwAv4E5UyEp9QYNw",
        "x-chital-order-source": "web",
        "x-chital-requester": "https://www.sepulsa.com",
        "Referer": "https://www.sepulsa.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      data: generateBody(idPelanggan, idServer),
      method: "POST",
    };

    const { data } = await axios(configForPost);

    const attrLength = data.data.lines[0].attributes.length;
    console.log(data.data.lines[0].attributes[attrLength - 2]);
    return data.data.lines[0].attributes[attrLength - 2].value;
  } catch (error) {
    throw new Error(error.message);
  }
};

sepulsaGetMobileLegend("214885010", "2253")