function bringSingara(money){

    console.log("Total Money: ",money);
    var price=10;
    var amount = money/price;

    return amount;
}

var singaras= bringSingara(150);
console.log("Totall Singara Buys:",singaras);