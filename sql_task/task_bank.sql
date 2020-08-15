select * from bank.client where length(FirstName) < 6;
select * from bank.department where DepartmentCity = 'lviv';
select * from bank.client where Education = 'high' order by LastName;
select * from bank.client order by idClient desc limit 5, 5;
select * from bank.client where LastName like '%iv' or LastName like '%iva';
select FirstName, LastName, DepartmentCity from bank.client join bank.department on Department_idDepartment = idDepartment where DepartmentCity = 'Kyiv';
select FirstName, Passport from bank.client group by LastName;
select * from bank.client join bank.application on idClient = Client_idClient where Sum >= 5000 and CreditState = 'Not returned' and Currency = 'Gryvnia';
select count(idClient) CountClient from bank.client join bank.department on Department_idDepartment = idDepartment;
select idClient, FirstName, LastName, max(Sum) Max_Credit from bank.client join bank.application on idClient = Client_idClient group by LastName;
select idClient, FirstName, LastName, count(sum) Count_of_Credit from bank.client join bank.application on idClient = Client_idClient group by LastName;
select Currency, max(sum) Max_Credit, min(sum) Min_Credit from bank.application group by Currency;
select count(idApplication) Count_Credit, Education from bank.application join bank.client on idClient = Client_idClient where Education = 'high';
select FirstName, LastName, avg(Sum) Average_Credit from bank.client join bank.application on idClient = Client_idClient group by idClient order by Average_Credit desc limit 1;
select idDepartment, DepartmentCity, sum(Sum) Sum_of_Credit from bank.application join bank.client join bank.department on idClient = Client_idClient and Department_idDepartment = idDepartment group by idDepartment order by Sum_of_Credit desc limit 1;
select idDepartment, DepartmentCity, max(Sum) Sum_of_Credit from bank.application join bank.client join bank.department on idClient = Client_idClient and Department_idDepartment = idDepartment group by idDepartment order by Sum_of_Credit desc limit 1;
update bank.application join bank.client on idClient = Client_idClient set sum = 6000, currency = 'Gryvnia' where education = 'high';
update bank.client join bank.department on Department_idDepartment = idDepartment set city = 'Kyiv' where DepartmentCity = 'Kyiv';
delete from bank.application where CreditState = 'Returned';
delete app from bank.application app join bank.client on idClient = Client_idClient where LastName like '_[aeoiuy]%'; #  не разобрался с регулярным выражением. не хочет работать
select idDepartment, DepartmentCity, Sum_of_Credit from (select idDepartment, DepartmentCity, sum(Sum) Sum_of_Credit from bank.application join bank.client join bank.department on idClient = Client_idClient and Department_idDepartment = idDepartment group by idDepartment) sumCrd where DepartmentCity = 'lviv' and Sum_of_Credit > 5000;
select idClient, firstname, lastname, Sum_Returned from (select idClient, firstname, lastname, sum(sum) Sum_Returned  from bank.client join bank.application on idClient = Client_idClient where CreditState = 'returned' group by idClient) rt where Sum_Returned > 5000;
select idClient, firstname, lastname, sum from bank.client join bank.application on idClient = Client_idClient where CreditState = 'Not returned' order by sum desc limit 1;
select idClient, firstname, lastname, sum(sum) Sum  from bank.client join bank.application on idClient = Client_idClient group by idClient order by Sum limit 1;
select Client_idClient, SumCredit from (select Client_idClient, sum(sum) SumCredit from bank.application group by Client_idClient) SC where SumCredit > (select avg(sum) from bank.application);
select * from bank.client where city = (select city from (select City, count(sum) Count_Credit from bank.application join bank.client on idClient = Client_idClient group by Client_idClient order by count_credit desc limit 1) maxCredit);  # 1 variant
select * from bank.client join (select City, count(sum) Count_Credit from bank.application join bank.client on idClient = Client_idClient group by Client_idClient order by count_credit desc limit 1) maxCredit where bank.client.City = maxCredit.City; # 2 variant
select City, count(sum) Count_Credit from bank.application join bank.client on idClient = Client_idClient group by Client_idClient order by count_credit desc limit 1;
