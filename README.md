# 🚀 NFT Marketplace (Web3 Frontend Challenge)

Marketplace de NFTs moderno desenvolvido em React, TypeScript, Vite e Tailwind CSS, simulando um ecossistema Web3 completo em tempo real.

## 🎨 Funcionalidades

- **Catálogo Dinâmico:** Listagem de NFTs com busca em tempo real e filtros por categoria.
- **Detalhes e Preços:** Visualização detalhada de ativos digitais com suporte a atualizações via WebSockets (`Socket.IO`).
- **Carrinho de Compras:** Adição, remoção e cálculo seguro de valores (subtotal e taxas).
- **Checkout Seguro:** Simulação de pagamento com chave de idempotência (`x-idempotency-key`).
- **Autenticação & Perfil:** Telas de Login, Cadastro e Painel do Colecionador.
- **Integração Web3:** Modal interativo para simulação de conexão com carteiras (MetaMask, WalletConnect, Phantom).

## 🛠️ Tecnologias Utilizadas

- **React 18** + **TypeScript**
- **Vite** (Build tool ultrarrápido)
- **Tailwind CSS v4** (Estilização com identidade visual personalizada)
- **Axios** (Requisições HTTP)
- **MSW (Mock Service Worker)** + `@mswjs/socket.io-binding` (Simulação de API REST e WebSockets)

## 📦 Como Executar o Projeto Localmente
npm run dev

