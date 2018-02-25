// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    };

    let halfDollars = Math.floor(currency / 50);
    let quarters = Math.floor((currency - halfDollars * 50) / 25);
    let dimes = Math.floor((currency - halfDollars * 50 - quarters * 25) / 10);
    let nickels = Math.floor((currency - halfDollars * 50 - quarters * 25 - dimes * 10) / 5);
    let pennies = Math.floor((currency - halfDollars * 50 - quarters * 25 - dimes * 10 - nickels * 5) / 1);

    let change = {};

    if (halfDollars > 0) {
        change.H = halfDollars;
    };
    if (quarters > 0) {
        change.Q = quarters;
    };
    if (dimes > 0) {
        change.D = dimes;
    };
    if (nickels > 0) {
        change.N = nickels;
    };
    if (pennies > 0) {
        change.P = pennies;
    };
    if (currency <= 0) {
        return change;
    };
    return change;
}