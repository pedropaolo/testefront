# testefrontseven -  Pedro Paolo de Oliveira Picinin

## Projeto realizado para vaga de FrontEnd - ReactJs - Seven Apps

## Tecnologias escolhidas

- NextJs - estrutura base do projeto
- ChakraUI - Estilização
- useSWR - Hook para requisições
- Axios - Utilizado em conjunto com o useSWR

## Observações

Toda a funcionalidade do projeto está contida dentro do componente userList ( Requisição , Tabela para renderização dos dados, paginação para a tabela , filtro para os dados). 

## Melhorias Possíveis

Para uma aplicação maior, seria interessante tornar o projeto mais escalável e de mais fácil edição:

- Criação de um contexto para realizar a requisição dos dados (usuários) e compartilhar os dados com os demais componentes;

- Divisão do componente userList em:
- Table.tsx (apresentação de dados, paginação);
- Filter.tsx (Filtragem de dados) ;

Todos os componentes poderiam ser invocados no componente Dashboard, para montar a aplicação aqui implementada.

## Dificuldades

Para este projeto, foi difícil armazenar e manipular os dados resgatados da API disponibilizada de maneira performática. Como o conjunto de dados era muito grande, não foi possível resgatar os mesmos através do método fetch(), que travava muito. Como solução, foi aplicado o Hook useSWR em conjunto com o Axios, que respondeu melhor que o fetch; apesar disso, a aplicação ainda demora para carregar os dados.
