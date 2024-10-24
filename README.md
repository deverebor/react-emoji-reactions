# (PoC) para Sistema de Reação de Emojis

Objetivo

O propósito dessa task foi criar uma Prova de Conceito (PoC) para um sistema de
reações de emojis em um chat, utilizando apenas JavaScript Vanilla, sem a
dependência de frameworks ou bibliotecas externas. A meta era comprovar que é
possível implementar uma solução funcional, mostrando a base do sistema de
reações e que ele pode ser facilmente adaptado para futuras integrações com o
backend.

Etapas Realizadas

## 1. Implementação das Reações de Emojis

Nesta primeira etapa, foi desenvolvido um sistema simples de reações a
mensagens. O usuário pode clicar em emojis que representam reações e
adicioná-los às mensagens. Se o usuário já tiver reagido com o mesmo emoji, a
reação é removida. Cada emoji tem uma contagem, indicando quantas vezes foi
utilizado.

### 1.1 Armazenamento Temporário das Reações

Como ainda não houve integração com o backend, criamos uma lógica de
armazenamento no frontend. As reações são armazenadas diretamente em uma
estrutura de dados na memória, simulando como seriam salvas e manipuladas em um
banco de dados futuro.

_Exemplo da estrutura de armazenamento:_

```js
let reactions = {
  messageId1: {
    "👍": ["userId1", "userId2"],
    "🔥": ["userId3"],
  },
  messageId2: {
    "❤️": ["userId1"],
  },
}
```

Essa estrutura permite armazenar todas as reações feitas para cada mensagem,
garantindo que um usuário só possa reagir uma vez por emoji.

## 2. Comportamento do Sistema

Ao clicar em um emoji, o sistema identifica a mensagem e o usuário, adiciona ou
remove a reação, e atualiza a contagem. Tudo isso é refletido diretamente na
interface do chat.

### 2.1 Exibição das Reações

- **Mensagens sem reações:** Exibem um botão de emoji genérico que, ao ser
  clicado, abre a bandeja de reações.

- **Mensagens com reações:** Exibem os emojis que receberam interações junto com
  a quantidade de reações, todos condensados em um único elemento visual. A
  bandeja de reações é acessada pelo mesmo botão que exibe os emojis.

## 3. Limitação de Reações por Usuário

Implementamos uma regra que limita cada usuário a reagir com um único emoji por
mensagem. O sistema impede múltiplas reações do mesmo usuário ao mesmo emoji,
simulando como o backend controlaria essas interações.

## 4. Considerações Técnicas para Futuras Integrações com o Backend

Embora a PoC tenha sido feita apenas no frontend, ela foi projetada pensando em
uma fácil adaptação para futuras integrações com o backend. A seguir, estão as
considerações técnicas que devem ser levadas em conta:

### 4.1 Armazenamento e Envio de Reações

- **Salvamento:** As reações podem ser enviadas ao backend por meio de
  requisições AJAX ou fetch. Cada requisição incluiria o ID da mensagem, o ID do
  usuário e o emoji reagido, para que o backend registre a reação corretamente.

- **Estrutura no backend:** O backend pode armazenar as reações em um formato
  semelhante ao usado no frontend. Cada mensagem armazenaria as reações
  associadas, e cada reação teria a lista de IDs de usuários que reagiram.

### 4.2 Atualização em Tempo Real

Para garantir que as reações sejam exibidas em tempo real para todos os usuários
do chat, pode-se utilizar WebSockets ou Server-Sent Events (SSE).

- O backend emitiria eventos sempre que uma reação fosse adicionada ou removida,
  e todos os clientes conectados receberiam essa atualização instantaneamente.
- O frontend ouviria esses eventos e atualizaria as reações em tempo real, de
  forma transparente.

## 5. Integração com o Fuse

Quando for necessário adaptar essa PoC ao ambiente com Fuse (ou qualquer outro
framework), a lógica implementada no JavaScript Vanilla pode ser facilmente
migrada. As principais alterações seriam:

- Migrar a lógica de reações para componentes.
- Renderizar dinamicamente as mensagens e reações utilizando o Fuse, respeitando
  a arquitetura de componentes.
- Implementar a comunicação com o backend para garantir o salvamento e a
  atualização das reações em tempo real.

## Considerações Finais

A PoC demonstrou com sucesso que o sistema de reações de emojis pode ser
implementado de forma simples e funcional com JavaScript Vanilla. Toda a lógica
necessária para gerenciar reações de usuários, controle de cliques e exibição
foi implementada, e o sistema foi projetado de forma a facilitar futuras
integrações com backend e com WebSockets para atualização em tempo real.

Além disso, com base nessa estrutura sólida, o sistema pode ser facilmente
adaptado para trabalhar com frameworks e oferecer suporte a funcionalidades mais
avançadas. Esta PoC provou a viabilidade de criar um sistema de reações de
emojis eficiente e escalável, sem a necessidade inicial de frameworks pesados.
