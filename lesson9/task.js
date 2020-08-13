const limitErr = () => console.error((cost > this.balance) ? 'No money' : 'Limit Transaction');

function userCard(id) {
    return ({
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
            this.historyLogs.push(this.log('put money', sum));
            return sum;
        },
        takeCredits(cost) {
            if (cost < this.balance && this.transactionLimit > 0) {
                this.balance -= cost;
                this.transactionLimit -= 1;
            } else {
                limitErr();
            }
            return cost;
        },
        setTransactionLimit(lim) {
            this.transactionLimit = lim;
            return lim;
        },
        transferCredits(credit, card) {
            if (credit < this.balance && this.transactionLimit > 0) {
                this.balance -= credit;
                card.putCredits(credit - credit / 200); // (0.5% => num / 100 * 0.5 === num / 200 )
                this.transactionLimit -= 1;
            } else {
                limitErr();
            }
        },
        log(type, money) {
            return ({ operationType: type, credits: money, operationTime: new Date().toLocaleString() })
        }
    });
}

const card1 = userCard(1);
card1.putCredits(1000);
console.log('card1:', card1);


// 1) Створити карту користувача(User Card):
// Створити функцію «userCard» яка приймає число(будь-яке число) і повертає
// об’єкт з методами:
// const card3 = userCard(3); // returns an object with methods
// User Card методи:
// getCardOptions. Дана функція повертає об’єкт котрий містить інформацію про
// карту:
// card3.getCardOptions(); // returns options object with card info
// Об’єкт має містити такі властивості:
// • balance (по замовчуванням 100)
// • transactionLimit (по замовчуванням 100. Це ліміт коштів які ви можете взяти з
// карти)
// • historyLogs (масив об’єктів який містить інформацію про операції та трансакції
// данної карти)
// • key (число в діапазоні[1; 3] залежить від числа яке ви передали в userCard
// функції. Кожна карта повинна мати унікальний key)
// putCredits. Ця функція отримує певну кількість грошей і заповнює баланс
// карти:
// card3.putCredits(150);
// takeCredits. Ця функція отримує певну кількість грошей і віднімає ці кошти з
// баланса карти (протилежний за дією від метода putCredits):
// card3.takeCredits(100);
// Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів
// перевищують кількість коштів, які ви бажаєте взяти. Якщо ні, то слід записати
// відповідне повідомлення у консолі (скористайтеся console.error)
// setTransactionLimit.Ця функція приймає як аргумент число і встановлює його
// як ліміт транзакцій на картці
// card3.setTransactionLimit(5000);
// transferCredits.
// Ця функція отримує два аргументи - кількість кредитів, які потрібно передати,
// та карту одержувача (інший об’єкт, створений функцією `userCard` - card1):
// card3.transferCredits(50, card1);
// Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
// Не забудьте перед перерахуванням перевірити залишок балансу та ліміт
// транзакцій відправника кредитів (card3).
// Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit
// change операції і зберігайте history log. History log (Дивитись зображення 1)
// інформація має зберігатись в об’єктах з такими властивостями:
// • operationType (стрічка яка описує здійснену операцію)
// • credits (кількість коштів)
// • operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)
// Зображення 1 — Приклад виклику функції
// getCardOptions
// 2) Створити UserAccount:
// Створити класс `UserAccount` (для цього завдання можна використати ES6 класс
// або звичайну функцію):
// const user = new UserAccount('Bob');
// Класс має містити:
// Властивості акаунту користувача:
// - name (передати в конструкторі)
// - cards (Масив карток користувача. Масив не має бути довшим ніж 3)
// Методи акаунту користувача:
// - addCard. Створює нову карту (використовуйте ‘userCard’ функцію) та додайте її до
// cards:
// user.addCard();
// Користувач повинен мати <= 3 карти.
// - getCardByKey. Приймає число в діапазоні {1; 3} і повертає об’єкт карти
// /*
//  * Повертає об’єкт {
//  * key: 1,
//  * balance: 150,
//  * ...other card properties
//  * }
//  */
// user.getCardByKey(1);
// Код
// Приклад переказу коштів:
// let user = new UserAccount('Bob');
// user.addCard()
// user.addCard()
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);
// card2.takeCredits(50);

// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.