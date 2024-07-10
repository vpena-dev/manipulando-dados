<div align="center">
  
# Manipulando Dados com Typescript

Exercício feito para praticar a Manipulação de Dados recebidos de uma API, onde nem sempre chegam como desejamos.

<br>

<img align="center" src="https://github.com/vpena-dev/typescript-manipulando-dados/assets/107283882/73ca765e-0481-49eb-b842-d26a9b786fd1" alt="manipulação-de-dados printscreen" />

<hr>
</div>

## Funcionalidade

- Os dados são acessados da API de vendas do curso.
- Se possuir dados, eles serão normalizados e exibir a tabela das transações e suas estatísticas, contendo:
  - Total
  - Quantidade de transações realizadas com Cartão de Crédito e Boleto
  - Quantidade de transações para cada Status de Pagamento
  - Dia da semana com mais vendas

## Como foi feito

O projeto foi separado por módulos em `/modules`, onde cada um possui sua funcionalidade específica para que possa facilitar a reutilização e manutenção do código.

<br>

### `countBy.ts`

- Tem como parâmetro um Array de string ou number e vai verificar quantas vezes cada dado se repete nele. Retornando assim, um objeto contendo chave e total.

  Por exemplo: Recebe ["Boleto", "Boleto", "Cartão de Crédito"] e retorna { Boleto: 2, Cartão de Crédito: 1 }

    <img height="400" src="https://github.com/vpena-dev/typescript-manipulando-dados/assets/107283882/00a964c7-f8f0-4353-b134-1b854efbfd34" alt="countBy printscreen" />
    
### `currencyToNumber.ts`

- Converte a moeda em um número. Por exemplo: Recebe uma String '1.200,50' e converte em um Number 1200.50

    <img height="200" src="https://github.com/vpena-dev/typescript-manipulando-dados/assets/107283882/332344c6-3b15-4132-863f-1d0a2ad35789" alt="currencyToNumber printscreen" />

### `fetchData.ts`

- Uma simples função de fetch contendo uma Interface Genérica para facilitar a utilização da função e leitura do código onde está sendo utilizada.

    <img height="400" src="https://github.com/vpena-dev/typescript-manipulando-dados/assets/107283882/98a8b56f-9460-40c4-8002-8e860cb6b043" alt="fetchData printscreen" />

### `stringToDate.ts`

- Formata a string da data recebida pela API para o tipo **Date**.

    <img height="300" src="https://github.com/vpena-dev/typescript-manipulando-dados/assets/107283882/70a6ec90-7d87-4e5c-8e77-fe5eb540c85e" alt="stringToDate printscreen" />


### `normalizeTransaction.ts`

- Normalizados os dados recebidos da API, padronizando suas chaves de uma forma mais fácil para utilização.

    <img height="400" src="https://github.com/vpena-dev/typescript-manipulando-dados/assets/107283882/945c7949-bf29-4ca1-bdc9-98d87146735b" alt="normalizarTransacao printscreen" />

### `Statistics.ts`

- Resolvi utilizar as Estatísticas como classe para praticar seu uso e a POO. Tendo apenas métodos privados para declaração de seus atributos, como:
  
    <br>

    <img height="600" src="https://github.com/vpena-dev/typescript-manipulando-dados/assets/107283882/02ceedc3-8740-4a8b-bd67-518fa9ac455b" alt="Statistics printscreen" />
    
    <br>
    
    #### Métodos


  - `setTotal` : Filtra as transações que possuem vendas diferentes de _null_ (ou seja, que já foram processadas e finalizadas) e seta no atributo `total`.

      <img height="200" src="https://github.com/vpena-dev/typescript-manipulando-dados/assets/107283882/46de3a8b-885b-4a70-99c7-91f837184807" alt="setTotal printscreen" />

      <br><br>

  - `setPagamento`: Preenche o atributo `pagamento` com objeto retornado da função `countBy()`. Contendo o total de cada tipo de pagamento.

      <img height="200" src="https://github.com/vpena-dev/typescript-manipulando-dados/assets/107283882/a024eeae-7f41-4287-9607-37def7c13250" alt="setPagamento printscreen" />

      <br><br>

  - `setStatus`: Preenche o atributo `status` com objeto retornado da função `countBy()`. Contendo o total de cada tipo de status de pagamento.

      <img height="200" src="https://github.com/vpena-dev/typescript-manipulando-dados/assets/107283882/facca0e9-3f51-418a-bb22-cbdd2de768ee" alt="setStatus printscreen" />

      <br><br>

  - `setSemana`: Preenche o atributo `semana` com objeto retornado do _loop_ que contabiliza o total de vendas de cada dia da semana8.

      <img height="400" src="https://github.com/vpena-dev/manipulando-dados/assets/107283882/f33f1ad6-fc73-4ac9-90c3-37fe6dec9508" alt="setSemana printscreen" />

      <br><br>

  - `setMelhorDia`: Preenche o atributo `melhorDia` com o dia da semana com mais vendas através dos dados do atributo `semana`.

      <img height="200" src="https://github.com/vpena-dev/manipulando-dados/assets/107283882/0d19f06e-b76a-4950-ba4c-76a78fc4e061" alt="setMelhorDia printscreen" />

<hr>

### Considerações Finais

Estou adicionando aqui no GitHub, meus projetos pessoais de um bom tempo de estudo. Durante o curso de Typescript, foi proposto um desafio pelo André Rafael (professor e fundador da 
<a href="https://www.origamid.com/" target="_blank">**Origamid**</a>), um desafio utilizando uma de suas APIs para praticar a minha manipulação de dados. 
Onde ele passou o que esperava e também opções de tratamento, como a normalização das chaves do retorno da API.

Realizar o desafio foi difícil. Pensar em como resolver e os obstáculos que cada funcionalidade apresenta é um trabalho gratificante. Realizar essa documentação 
me fez entender ainda mais como tudo funciona. Confesso que subestimava o processo de documentação de um projeto. Apesar de 'simples', levei algumas horas para 
concluir esta documentação. A cada projeto, a cada prática, mais sinto que estou no caminho certo para me tornar programador. Estou empolgado!

