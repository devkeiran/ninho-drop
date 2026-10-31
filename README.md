# Ninho Drop

**Suas coisas sempre à mão.**

O Ninho Drop é uma prateleira para a área de transferência no Windows. Ele guarda textos, imagens, links e arquivos que você copia e os deixa acessíveis na borda da tela, prontos para colar ou arrastar para outra janela.

O projeto é baseado no [Edge-Drop](https://github.com/Deepender25/Edge-Drop), criado por Deepender25 e colaboradores. Estamos desenvolvendo nossa própria versão a partir dessa base.

## Como funciona

1. Copie um texto, link, imagem ou arquivo normalmente.
2. Leve o cursor à borda configurada da tela ou pressione **Alt + C**.
3. Clique em um item para colar ou arraste-o para outra janela.

<p align="center"><img src=".github/readme/open.gif" alt="A prateleira se abre ao mover o cursor para a borda da tela" width="85%" /></p>

## O que você pode fazer

- **Manter o histórico à mão:** capture textos, imagens, capturas de tela, links, arquivos e pastas.
- **Arrastar e soltar:** coloque itens na prateleira ou leve-os para outros aplicativos. Agrupe arquivos e imagens em pilhas.
- **Encontrar e organizar:** pesquise, filtre por tipo, fixe itens importantes e adicione notas aos cartões.
- **Trabalhar com cada conteúdo:** visualize imagens e arquivos, cole texto sem formatação, abra links e caminhos locais, copie caminhos e converta cores entre formatos.
- **Personalizar o espaço:** escolha a borda e o monitor, ajuste o atalho e a aparência, e configure o histórico.
- **Controlar a captura:** pause o histórico no modo incógnito e escolha quando limpar itens antigos.

## Demonstrações

As demonstrações abaixo vêm do projeto original e mostram funções presentes nesta base. A identidade visual do Ninho Drop ainda está em desenvolvimento.

| Posição e captura | Arrastar e organizar |
| --- | --- |
| <img src=".github/readme/positions.gif" alt="Prateleira nas bordas esquerda, direita e superior" /> | <img src=".github/readme/drag-in-out.gif" alt="Arrastando itens para dentro e para fora da prateleira" /> |
| <img src=".github/readme/copy.gif" alt="Copiando texto e imagem para a prateleira" /> | <img src=".github/readme/stacks.gif" alt="Agrupando e separando itens em pilhas" /> |

| Prévia | Notas e pesquisa |
| --- | --- |
| <img src=".github/readme/preview.gif" alt="Visualizando arquivos de uma pilha" /> | <img src=".github/readme/notes-search.gif" alt="Adicionando uma nota e encontrando o item pela pesquisa" /> |

## Privacidade

O histórico é armazenado localmente e protegido pelo mecanismo de proteção de dados do Windows. O modo incógnito pausa a captura, e conteúdos marcados por aplicativos como privados são ignorados. A rede é usada para verificar atualizações, baixar imagens arrastadas da web e abrir links solicitados pelo usuário.

## Executar a partir do código

É necessário ter Windows 10 ou 11 e Node.js 22.12 ou mais recente.

```bash
git clone https://github.com/devkeiran/ninho-drop.git
cd ninho-drop
npm install
npm run dev
```

| Comando | Função |
| --- | --- |
| `npm run dev` | Inicia o aplicativo em desenvolvimento. |
| `npm run typecheck` | Verifica os tipos do código. |
| `npm test` | Executa os testes. |
| `npm run build` | Compila o aplicativo. |
| `npm run build:github` | Gera o instalador para Windows. |
| `npm run build:portable` | Gera a versão portátil para Windows. |

As versões prontas, quando disponíveis, ficarão na página de [releases](https://github.com/devkeiran/ninho-drop/releases).

## Licença e créditos

O Ninho Drop é baseado no [Edge-Drop](https://github.com/Deepender25/Edge-Drop), de Deepender25 e colaboradores. O código é distribuído sob a [licença Apache 2.0](LICENSE); os avisos de copyright e licença do projeto original são preservados.
