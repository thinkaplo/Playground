// Create your API key in: https://www.exchangerate-api.com/
// Select between the available currencies and modify the script as needed.
/*
CUP, KID, GNF, TTD, GYD, SOS, MZN, LYD, KGS, ISK, IRR, FKP, BOB, SSP, KWD, HRK, IDR, XDR, LAK,
PGK, SCR, GMD, SHP, CLP, UGX, TJS, CNY, YER, JOD, BHD, BRL, PEN, TMT, CZK, MKD, JEP, RON, NZD,
MGA, HNL, RWF, GEL, CHF, GIP, DKK, MRU, MMK, MVR, NPR, BSD, HTG, SRD, MWK, SAR, SBD, WST,
VND, KRW, GGP, PKR, AZN, LBP, RUB, CRC, THB, AUD, BDT, VUV, KMF, XCD, MOP, QAR, MUR, ANG,
CDF, KHR, ZMW, JMD, AFN, MDL, TRY, AOA, ALL, GBP, LKR, BAM, TZS, MXN, HUF, SGD, SEK, TOP,
AMD, DJF, MNT, XPF, XOF, STN, BYN, INR, PAB, EGP, ZWL, UYU, UZS, ARS, NIO, IQD, GTQ, NGN, MAD,
KYD, NOK, USD, CVE, NAD, SZL, FOK, BND, HKD, BIF, ZAR, CAD, BBD, COP, SDG, BGN, SLL, MYR,
BZD, PLN, KES, KZT, TVD, AWG, FJD, PHP, UAH, JPY, ERN, RSD, EUR, DZD, OMR, VES, BMD, SYP, XAF,
BWP, ETB, DOP, BTN, AED, LRD, PYG, ILS, GHS, IMP, TWD, LSL, TND, SLE
*/

function getCurrency() {
  const API_KEY = 'YOUR_KEY';
  let url = 'https://v6.exchangerate-api.com/v6/'+API_KEY+'/latest/USD';

  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("ExchangeRate");
  let usd_value = sheet.getRange("A2").getValue();

  let request = url;
  let response = UrlFetchApp.fetch(request);
  let data = JSON.parse(response.getContentText()); 

  let to_GBP = sheet.getRange("B2");
  to_GBP.setValue(usd_value*data.conversion_rates.GBP)

  Logger.log(data)
}
