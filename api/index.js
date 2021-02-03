const request = require("request-promise");
const cheerio = require("cheerio");
async function main() {
  var res = [];
  var b = "";
  var price = [];
  var final = {};
  const result = await request.get(
    "https://www.sify.com/finance/today-petrol-price/"
  );
  const $ = cheerio.load(result);
  $(
    "body > div.container > div > section > div.col-sm-12.article > div > div.fullstory-txt-wrap > div > div > div.table-responsive > table > tbody >"
  ).each((index, element) => {
    res.push($(element).text());
  });
  res.shift();
  res.sort();
  for (var i = 0; i < res.length; i++) {
    price.push(res[i].match(/\d+([\/.]\d+)?/g).shift());
  }
  final = {
    Agartala: price[0],
    Aizwal: price[1],
    Ambala: price[2],
    Bangalore: price[3],
    Bhopal: price[4],
    Bhubaneswar: price[5],
    Chandigarh: price[7],
    Chennai: price[8],
    Daman: price[9],
    Dehradun: price[10],
    Faridabad: price[11],
    Gangtok: price[12],
    Ghaziabad: price[13],
    Gurgaon: price[14],
    Hyderabad: price[15],
    Imphal: price[16],
    Itanagar: price[17],
    Jaipur: price[18],
    Jalandhar: price[19],
    Jammu: price[20],
    Kolkata: price[21],
    Lucknow: price[22],
    Mumbai: price[23],
    NewDelhi: price[24],
    Noida: price[25],
    Panjim: price[26],
    Patna: price[27],
    Pondicherry: price[28],
    PortBlair: price[29],
    Raipur: price[30],
    Shillong: price[31],
    Shimla: price[32],
    Silvassa: price[33],
    Srinagar: price[34],
    Trivandrum: price[35],
  };

  console.log(final);

  return final;
}

module.exports= async(req,res) =>{
    var send = await main();
     res.json(send)

 }