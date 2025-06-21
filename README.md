# 💸 Simulador Financeiro 50 • 30 • 20

Um aplicativo **React** que ajuda o usuário a aplicar a regra de orçamento **50 % Necessidades • 30 % Desejos • 20 % Poupança**.  
Permite digitar a renda, ajustar os percentuais, visualizar um gráfico de pizza animado e baixar o resultado em imagem.  
Também inclui uma página de **dicas práticas** para implantar a estratégia no dia-a-dia.

---

## ✨ Funcionalidades

- **Entrada de renda mensal** com validação numérica.
- **Sliders** que permitem customizar a alocação (mín. 40 % / 20 % / 20 %).
- **Gráfico de pizza animado** (Framer Motion + Recharts).
- **Legenda automática** indicando a cor de cada categoria.
- **Download do gráfico** em PNG via **html2canvas**.
- **Cards de resumo** com total em reais para cada categoria.
  - Necessidades
  - Desejos
  - Poupança
- **Página de Dicas**.

---

## 🛠️ Tecnologias

| Biblioteca           | Uso principal                                     |
|----------------------|---------------------------------------------------|
| **React 18**         | UI e estado                                       |
| **Recharts**         | Gráfico de pizza                                  |
| **Framer Motion**    | Animações de entrada                              |
| **html2canvas**      | Exportação do gráfico para PNG                    |
| **styled-components**| Estilização dos cards                             |
| **rc-slider**        | Sliders de percentuais                            |
| **Create React App** | Configuração base do projeto (`react-scripts`)    |

---

## 🚀 Como rodar localmente

```bash
# 1. clone o projeto
git clone https://github.com/KelvinLazzaris/SimuladorFinanceiro.git
cd SimuladorFinanceiro

# 2. instale as dependências
npm install      # ou yarn / pnpm

# 3. inicie o servidor de desenvolvimento
npm start        # abre em http://localhost:3000
