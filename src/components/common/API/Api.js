let envURL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data'
const urlMapping = {
  dataApi : function (data) {
    return {
      url: envURL+`/users49b8675.json`,
      method: "GET",
      dataType: "json",
      cache: false,
      contentType: "application/json; charset=UTF-8",
      timeout: 40000,
    };
  }
};

export default urlMapping;
