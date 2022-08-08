export function makeId(length = 5) {
    var text = '';
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export function getTransactionMapByMonths(transactions) {
    transactions = transactions.sort((a, b) => b.time - a.time);
    var transactionsMapByMonth = {};
    transactions.forEach((transaction) => {
        const date = _getDateStr(transaction.time);
        transactionsMapByMonth[date]
            ? transactionsMapByMonth[date].push(transaction)
            : (transactionsMapByMonth[date] = [transaction]);
    });
    return transactionsMapByMonth;
}

function _getDateStr(ts) {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const date = new Date(ts);
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
}
