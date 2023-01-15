O projeto implementado foi feito com React JS com Next JS, Styles Components, AXIOS.
 
![image](https://user-images.githubusercontent.com/122547975/212551331-406eeb35-7f75-41a2-b435-6be7af7cc310.png)

Sobre arquitetura do projeto de frontend:

Foi criado uma estrutura que utilizo para separarmos os arquivos, deixando mais fácil dar manutenção e implementar novas melhorias.

Estrutura de pastas:

     Componentes: Implementados os componentes que foram usados em outras páginas do sistema.
     Context: Para o controle de estado foi usado o Context API. Aqui fizemos as requisições para a service e passamos para o front os dados e atualizações.
     Pages: Como foi usado o Next.JS usamos a PAGE para redirecionas as pastas de forma mais fácil, assim o Next.JS trabalha no redirecionamente de páginas.
     Service: Faz a chamada para o Backend.
     Style: Usado style-components para estilizar alguns itens das páginas.
     
     
     
     
     
     
********** OBSERVAÇÃO: URL DA API - CASO RODE EM OUTRA PORTA, TEM QUE MUDAR A **** baseUrl  NO SEGUINTE CAMINHO:


*********** sorteio-frontend\services\api.js ****************




![image](https://user-images.githubusercontent.com/122547975/212563692-c4c98d4d-8bcc-400f-8588-a73b3110b3cd.png)


Front-end (Layout) 

Quando rodamos o front a primeira tela mostra os participantes do sorteio.

![image](https://user-images.githubusercontent.com/122547975/212563571-fddb5ec8-d888-4aee-8434-f0a10c50ced2.png)


Ao clicar em "Realizar Sorteio" temos a segunda tela:



![image](https://user-images.githubusercontent.com/122547975/212563590-2331bb45-ae03-42d7-99c4-ea96dce14646.png)



Podemos clicar em "Voltar" para realizar o sorteio novmente.
