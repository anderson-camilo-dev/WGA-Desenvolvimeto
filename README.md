# WGA Desenvolvimento — Site de Portfólio

Site estático (HTML, CSS e JS puro) pronto pra deploy na Vercel.

## Estrutura

```
wga-portfolio/
├── index.html      → todo o conteúdo do site
├── style.css        → cores, fontes, layout (tudo editável no topo, em :root)
├── script.js         → menu mobile, animações de rolagem
└── assets/
    ├── wga-logo-horizontal.png
    └── wga-logo-circle.png
```

## O que editar antes de publicar

1. **Número de WhatsApp**: abra `index.html` e troque `SEU-NUMERO-AQUI` (aparece
   3 vezes) pelo número real, no formato `5521999999999`.

2. **Textos**: procure por `<!-- EDITAR: ... -->` dentro do `index.html`.
   Marca os pontos principais: apresentação, diferenciais, depoimentos e time.

3. **Projetos**: cada projeto é um bloco `<article class="project-card">`.
   Pra trocar a imagem de fundo do card, troque o `style="background: ..."`
   por uma imagem real, por exemplo:
   ```html
   <div class="project-thumb" style="background-image:url('assets/julia-berto.jpg'); background-size:cover; background-position:center;">
   ```

4. **Time**: cada pessoa é um `.team-card`. A foto é um círculo vazio
   (`.team-photo`) — pra colocar foto real, troque a `<div class="team-photo">`
   por `<img class="team-photo" src="assets/foto-nome.jpg">`.

5. **Cores**: tudo fica no início do `style.css`, dentro de `:root`.
   Trocando os valores de `--gold`, `--amber` etc., o site inteiro muda.

6. **Redes sociais**: no rodapé (`<footer>`), troque os `href="#"` pelos
   links reais do Instagram etc.

## Deploy na Vercel

1. Suba esta pasta pra um repositório no GitHub (ou arraste a pasta direto
   no [vercel.com/new](https://vercel.com/new), que também aceita upload).
2. Na Vercel, escolha "Other" como framework (é um site estático, sem build).
3. Deploy. Pronto — a Vercel já entrega em HTTPS com domínio `.vercel.app`,
   e depois dá pra apontar um domínio próprio (tipo `wgadesenvolvimento.com`)
   nas configurações do projeto.

## Responsivo

O layout é mobile-first: no celular tudo empilha em coluna única, com o
menu virando um botão de três traços (hamburger). A partir de 760px os
cards viram grade, e a partir de 900px o menu aparece completo no topo.
