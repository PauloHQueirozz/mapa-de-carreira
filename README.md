# Mapa de Carreira - Paulo Henrique Queiroz Vieira

Página de portfólio e trajetória profissional orientada por dados, com conteúdo carregado dinamicamente a partir de um arquivo JSON.

## Sobre o projeto

O Mapa de Carreira é uma página web estática que exibe de forma visual e organizada a minha jornada profissional — incluindo etapas de carreira, habilidades técnicas, soft skills e idiomas.

A arquitetura segue uma separação clara de responsabilidades:
* **HTML** — estrutura e marcação semântica da página
* **JSON** (`assets/data/carreira.json`) — fonte de dados editável com meus textos, listas e configurações
* **JavaScript** (`assets/js/carreira-json.js`) — lê o JSON via `fetch` e injeta os dados nos elementos da página

Essa abordagem permite atualizar todo o meu conteúdo sem alterar o HTML, tornando a manutenção simples e acessível.

## 📁 Estrutura de arquivos

```text
mapa-de-carreira/
├── index.html                  # Estrutura principal da página
├── README.md                   # Documentação do projeto
└── assets/
    ├── data/
    │   └── carreira.json       # Meus dados editáveis (perfil, carreira, skills, idiomas)
    ├── js/
    │   └── carreira-json.js    # Script que carrega e renderiza os dados
    ├── css/
    │   └── bootstrap-*.css     # Temas visuais disponíveis
    └── images/
        └── profile.png.jpeg    # Minha foto de perfil