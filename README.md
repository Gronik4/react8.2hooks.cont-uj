# "Continuous Deployment"  
блок React ДЗ №8.2(hooks-context) задача: useJsonFetch. 

## 'Описание':  
Реализуйте кастомный хук useJsonFetch, который позволяет с помощью fetch осуществлять HTTP-запросы. Использование этого хука должно выглядеть следующим образом:  
const [data, loading, error] = useJsonFetch(url, opts);  
где:  
data — данные, полученные после response.json(), не Promise, а именно данные;  
error — ошибка: ошибка сети, ошибка ответа, если код не 20x, ошибка парсинга, если пришёл не JSON;  
loading — boolean флаг, сигнализирующий о том, что загрузка идёт.
  
[Посмотреть результат]
