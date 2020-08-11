let numeral = require('numeral');
module.exports = {
    formatAmount(amount){
        return `¥ ${numeral(amount).format("0,0.00")}`;
    }
}