# Los Aztecas — Dossiê Oficial

Apresentação da facção **Los Aztecas** para a staff da **Cidade dos Anjos** (servidor FiveM).
Página estática (HTML + CSS + JS vanilla), animações com GSAP + Lenis, hospedada via GitHub Pages.

## Rodar localmente

```bash
python3 -m http.server 8642
# abre http://localhost:8642
```

Dica: `http://localhost:8642/?nomotion` desliga as animações (útil pra revisar conteúdo).

## Editar o conteúdo

Todo o texto e as imagens ficam num único arquivo: **`js/content.js`**.
Qualquer trecho ainda pendente aparece **destacado em laranja** na página (ex.: `NOME DO PERSONAGEM`, `ID 000`) até ser preenchido.

- **Imagens:** coloque os arquivos em `assets/img/` e aponte o caminho no `content.js`.
- **Vídeo do QG:** cole o link (ou o ID) do YouTube no campo `qg.mapaPreferido.youtube`.

## Estrutura

```
index.html        estrutura das seções (containers vazios)
css/style.css     estilo (preto + laranja, tipografia Anton + Pirata One)
js/content.js     ← CONTEÚDO editável (o único arquivo que você precisa mexer)
js/main.js        renderização + animações
assets/img/       imagens do barrio
```
