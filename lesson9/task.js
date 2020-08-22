/* eslint-disable arrow-parens */
/* eslint-disable max-len */
const limitErr = (option) => console.error(option ? 'No money' : 'Limit Transaction');
const addLog = (type, balance) => ({ operationType: type, credits: balance, operationTime: new Date().toLocaleString() });

function userCard(id) {
    return {
        key: id,
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        getCardOptions() {
            return ({
                key: this.key,
                balance: this.balance,
                transactionLimit: this.transactionLimit,
                historyLogs: this.historyLogs,
            });
        },
        putCredits(sum) {
            this.balance += sum;
            this.historyLogs.push(addLog('Received credits', sum));
        },
        takeCredits(cost) {
            if (cost < this.balance && this.transactionLimit > cost) {
                this.balance -= cost;
                this.historyLogs.push(addLog('Withdrawal credits', cost));
            } else {
                limitErr(cost >= this.balance);
            }
        },
        setTransactionLimit(lim) {
            this.transactionLimit = lim;
            this.historyLogs.push(addLog('Transaction limit chahge', lim));
        },
        transferCredits(credit, card) {
            if (credit < this.balance && this.transactionLimit > credit) {
                this.balance -= (credit + credit / 200); // 0.5% ==> (num / 100) * 1/2
                card.putCredits(credit);
                this.historyLogs.push(addLog('Withdrawal credits', credit));
            } else {
                limitErr(credit >= this.balance);
            }
        },
    };
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard(id) {
        this.cards.push(userCard(id));
    }

    getCardByKey(key) {
        const i = this.cards.indexOf(this.cards.find(el => el.key === key));
        return this.cards[i];
    }
}

const user = new UserAccount('Bob');

user.addCard(1);
user.addCard(2);

const card1 = user.getCardByKey(1);
const card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
// =================================================================

// =================================================================
// Треба реалізувати свій розпорядок дня.
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають
// мати описані успішні та не успішні варіанти виконання.
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути
// викинута помилка і решта функцій виконуватись не мають.
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.
