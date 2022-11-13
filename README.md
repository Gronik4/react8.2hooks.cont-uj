# "Continuous Deployment"  
блок React ДЗ №8.2(hooks-context) задача: useJsonFetch. 

## 'Описание':  
Реализуйте кастомный хук useJsonFetch, который позволяет с помощью fetch осуществлять HTTP-запросы. Использование этого хука должно выглядеть следующим образом:  
const [data, loading, error] = useJsonFetch(url, opts);  
где:  
data — данные, полученные после response.json(), не Promise, а именно данные;  
error — ошибка: ошибка сети, ошибка ответа, если код не 20x, ошибка парсинга, если пришёл не JSON;  
loading — boolean флаг, сигнализирующий о том, что загрузка идёт.

**Project Sample** [![Build status](https://ci.appveyor.com/api/projects/status/gfxg4c0986v04jyl?svg=true)](https://ci.appveyor.com/project/Gronik4/react8-2hooks-cont-uj)
  
[Посмотреть результат](https://gronik4.github.io/react8.2hooks.cont-uj/)
