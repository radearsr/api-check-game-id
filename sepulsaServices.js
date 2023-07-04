const axios = require("axios");

const sepulsaGetFreeFire = async () => {
  try {
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
      data: "{\"url\":\"http://api.sepulsa.com/api/v1/oscar/products/564/\",\"quantity\":1,\"options\":[{\"option\":\"https://api.sepulsa.com/api/v1/oscar/options/1/\",\"value\":\"7693574908\"}]}",
      method: "POST",
    };
    const { data } = await axios(configForPost);
    const attrLength = data.data.lines[0].attributes.length;
    console.log(data.data.lines[0].attributes[attrLength - 2]);
    return data.data.lines[0].attributes[attrLength - 2].value;
  } catch (error) {
    throw new Error(error.message);
  }
}

const sepulsaGetMobileLegend = async () => {
  try {
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
      data: "{\"url\":\"http://api.sepulsa.com/api/v1/oscar/products/2202/\",\"quantity\":1,\"options\":[{\"option\":\"https://api.sepulsa.com/api/v1/oscar/options/1/\",\"value\":\"214885010\"},{\"option\":\"https://api.sepulsa.com/api/v1/oscar/options/21/\",\"value\":\"2253\"}]}",
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

const sepulsaGetAov = async () => {
  try {
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
      data: "{\"url\":\"http://api.sepulsa.com/api/v1/oscar/products/576/\",\"quantity\":1,\"options\":[{\"option\":\"https://api.sepulsa.com/api/v1/oscar/options/1/\",\"value\":\"1491384713217181\"}]}",
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

const sepulsaGetTomAndJerry = async () => {
  try {
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
      data: "{\"url\":\"http://api.sepulsa.com/api/v1/oscar/products/2338/\",\"quantity\":1,\"options\":[{\"option\":\"https://api.sepulsa.com/api/v1/oscar/options/1/\",\"value\":\"113313323\"},{\"option\":\"https://api.sepulsa.com/api/v1/oscar/options/21/\",\"value\":\"1232\"}]}",
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

(async () => {
  sepulsaGetAov();
})();

module.exports = {
  sepulsaGetFreeFire,
  sepulsaGetMobileLegend,
  sepulsaGetAov,
}