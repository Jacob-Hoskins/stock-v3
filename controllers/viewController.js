const SymbolModel = require("../models/symbolsModel");

///DO THIS DEPLOY FIRST THING IN THE MORNING, TEST TIME DEPLOYMENTS ON RENDER

exports.homePage = async (req, res) => {
  const symbols = await SymbolModel.find();
  const first_symbol = symbols[1];
  const comp_symbol = first_symbol.symbol;
  const comp_name = first_symbol.name;
  //nested indicators
  const weekly_rsi = first_symbol.weeklyRsi;
  const biweekly_rsi = first_symbol.biweeklyRsi;
  const monthly_rsi = first_symbol.rsiMonthly;

  // //indicators output
  const weekly_rsi_output = weekly_rsi[0].rsiOutput;
  const biweekly_rsi_output = biweekly_rsi[0].rsiOutput;
  const monthly_rsi_output = monthly_rsi[0].rsiOutput;

  res.status(200).render("base", {
    StockSyms: symbols,
    // companyName: comp_name,
    // companySymbol: comp_symbol,
  });
};
