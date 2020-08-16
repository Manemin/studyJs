#Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select * from bank.client where length(FirstName) < 6;

#Вибрати львівські відділення банку.
select * from bank.department where DepartmentCity = 'lviv';

#Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select * from bank.client where Education = 'high' order by LastName;

#Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
select * from bank.application order by idApplication desc limit 5, 5;

#Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA
select * from bank.client where LastName like '%iv' or LastName like '%iva';

#Вивести клієнтів банку, які обслуговуються київськими відділеннями
select FirstName, LastName, DepartmentCity from bank.client join bank.department on Department_idDepartment = idDepartment where DepartmentCity = 'Kyiv';

#Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.
select FirstName, Passport from bank.client group by FirstName;

#Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
select * from bank.client join bank.application on idClient = Client_idClient where Sum >= 5000 and Currency = 'Gryvnia';

#Порахувати кількість клієнтів усіх відділень та лише львівських відділень
select count(idClient) CountClient from bank.client join bank.department on Department_idDepartment = idDepartment union select count(idClient) CountClientLviv from bank.client join bank.department on Department_idDepartment = idDepartment where DepartmentCity = 'lviv';

#Знайти кредити, які мають найбільшу суму для кожного клієнта окремо
select idClient, FirstName, LastName, max(Sum) Max_Credit from bank.client join bank.application on idClient = Client_idClient group by LastName;

#Визначити кількість заявок на крдеит для кожного клієнта
select idClient, FirstName, LastName, count(sum) Count_of_Credit from bank.client join bank.application on idClient = Client_idClient group by LastName;

# Визначити найбільший та найменший кредити
select Currency, max(sum) Max_Credit, min(sum) Min_Credit from bank.application group by Currency;

#Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
select count(idApplication) Count_Credit, Education from bank.application join bank.client on idClient = Client_idClient where Education = 'high';

#Вивести дані про клієнта, в якого середня сума кредитів найвища
select FirstName, LastName, avg(Sum) Average_Credit from bank.client join bank.application on idClient = Client_idClient group by idClient order by Average_Credit desc limit 1;

#Вивести відділення, яке видало в кредити найбільше грошей
select idDepartment, DepartmentCity, sum(Sum) Sum_of_Credit from bank.application join bank.client join bank.department on idClient = Client_idClient and Department_idDepartment = idDepartment group by idDepartment order by Sum_of_Credit desc limit 1;

#Вивести відділення, яке видало найбільший кредит.
select idDepartment, DepartmentCity, max(Sum) Sum_of_Credit from bank.application join bank.client join bank.department on idClient = Client_idClient and Department_idDepartment = idDepartment group by idDepartment order by Sum_of_Credit desc limit 1;

#Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update bank.application join bank.client on idClient = Client_idClient set sum = 6000, currency = 'Gryvnia' where education = 'high';

# Усіх клієнтів київських відділень пересилити до Києва.
update bank.client join bank.department on Department_idDepartment = idDepartment set city = 'Kyiv' where DepartmentCity = 'Kyiv';

#Видалити усі кредити, які є повернені.
delete from bank.application where CreditState = 'Returned';

# Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
delete app from bank.application app join bank.client on idClient = Client_idClient where LastName rlike '^.[aeoiuy].*';

# Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select idDepartment, DepartmentCity, Sum_of_Credit from (select idDepartment, DepartmentCity, sum(Sum) Sum_of_Credit from bank.application join bank.client join bank.department on idClient = Client_idClient and Department_idDepartment = idDepartment group by idDepartment) sumCrd where DepartmentCity = 'lviv' and Sum_of_Credit > 5000;

#Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select idClient, firstname, lastname, Sum_Returned from (select idClient, firstname, lastname, sum(sum) Sum_Returned  from bank.client join bank.application on idClient = Client_idClient where CreditState = 'returned' group by idClient) rt where Sum_Returned > 5000;

#Знайти максимальний неповернений кредит
select idClient, firstname, lastname, sum from bank.client join bank.application on idClient = Client_idClient where CreditState = 'Not returned' order by sum desc limit 1;

#Знайти клієнта, сума кредиту якого найменша
select idClient, firstname, lastname, sum(sum) Sum  from bank.client join bank.application on idClient = Client_idClient group by idClient order by Sum limit 1;

#Знайти кредити, сума яких більша за середнє значення усіх кредитів
select Client_idClient, SumCredit from (select Client_idClient, sum(sum) SumCredit from bank.application group by Client_idClient) SC where SumCredit > (select avg(sum) from bank.application);

#Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів
select * from bank.client where city = (select city from (select City, count(sum) Count_Credit from bank.application join bank.client on idClient = Client_idClient group by Client_idClient order by count_credit desc limit 1) maxCredit);  # 1 variant
select * from bank.client join (select City, count(sum) Count_Credit from bank.application join bank.client on idClient = Client_idClient group by Client_idClient order by count_credit desc limit 1) maxCredit where bank.client.City = maxCredit.City; # 2 variant

#місто чувака який набрав найбільше кредитів
select City, count(sum) Count_Credit from bank.application join bank.client on idClient = Client_idClient group by Client_idClient order by count_credit desc limit 1;
