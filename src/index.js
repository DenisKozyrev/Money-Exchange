// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let halfDollars = Math.floor(currency / 50);
    let quarters = Math.floor((currency - halfDollars * 50) / 25);
    let dimes = Math.floor((currency - halfDollars * 50 - quarters * 25) / 10);
    let nickels = Math.floor((currency - halfDollars * 50 - quarters * 25 - dimes * 10) / 5);
    let pennies = Math.floor((currency - halfDollars * 50 - quarters * 25 - dimes * 10 - nickels * 5) / 1);

    let change = {
        'H': halfDollars,
        'Q': quarters,
        'D': dimes,
        'N': nickels,
        'P': pennies,
    };

    let errorObject = { error: "You are rich, my friend! We don't have so much coins for exchange" };

    for (var key in change) {
        if (change[key] === 0) {
            delete change[key];
        } else if (currency <= 0) {
            delete change[key];
        } else if (currency > 10000) {
            return errorObject;
        }
    };
    return change;
}