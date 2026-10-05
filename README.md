# L.E.S React

Projeto acadêmico desenvolvido em React para a disciplina de Laboratório de Engenharia de Software (L.E.S.). As quatro atividades recriam interfaces propostas em aula e foram organizadas em páginas independentes.

## Demonstração

A aplicação está publicada em [l-e-s-react-qgk6.vercel.app](https://l-e-s-react-qgk6.vercel.app/).

## Atividades

- **Atividade 1 — Relógio e apresentação:** exibe o horário atual, uma mensagem de apresentação da Fatec e o retorno à página inicial.
- **Atividade 2 — Contador:** contabiliza homens e mulheres, mantém o total geral e permite adicionar, remover e zerar os valores. Os controles `+`, contador e `−` ficam alinhados e impedem valores negativos.
- **Atividade 3 — Reprodução de interface:** recria em React a interface fornecida pela professora, preservando a estrutura visual solicitada.
- **Atividade 4 — Reprodução de interface:** transforma outra referência visual da disciplina em uma página React navegável.

O fundo estrelado animado é uma personalização do projeto para dar unidade visual às atividades; as interfaces e regras principais seguem as propostas da disciplina.

## Tecnologias

- React
- JavaScript
- React Router
- CSS

## Executar localmente

```bash
npm install
npm start
```

Depois, acesse [http://localhost:3000](http://localhost:3000).

Para gerar a versão de produção:

```bash
npm run build
```

## Estrutura

As páginas ficam em `src/semana01` até `src/semana04`. A página inicial em `src/Home` apresenta os links para cada atividade e `src/App.js` concentra o roteamento.

## Contexto

Trabalho acadêmico realizado em 2024 para praticar componentização, estado, eventos, navegação e estilização de interfaces com React.
