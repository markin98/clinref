# ClinRef — como publicar no GitHub Pages

## Passo a passo

1. Crie uma conta em **github.com** (gratuita).
2. Clique em **New repository**. Nome do repositório: `clinref`. Marque **Public** e crie.
3. Na página do repositório: **Add file → Upload files**. Arraste **todo o conteúdo desta pasta**,
   incluindo a subpasta `icones`. Clique em **Commit changes**.
4. Vá em **Settings → Pages**. Em *Source*, escolha **Deploy from a branch**,
   branch **main** e pasta **/ (root)**. Salve.
5. Aguarde 1 a 2 minutos. O endereço será:
   `https://SEU-USUARIO.github.io/clinref/`

## No celular

1. Abra esse endereço no **Chrome**.
2. Toque num guia.
3. Menu ⋮ → **Adicionar à tela inicial**.
4. O atalho aparece com o ícone próprio do guia e abre em tela cheia, sem barra do navegador.

Repita para os três. A página inicial (`index.html`) também pode ser adicionada: vira um atalho único
chamado **ClinRef**, que leva aos três guias.

## Funciona sem sinal

Depois da primeira visita, os guias ficam guardados no aparelho e abrem
mesmo sem internet — inclusive em plantão sem cobertura.
Para atualizar depois de subir uma versão nova: abra com rede,
feche e reabra o atalho.

## Se quiser deixar privado

O GitHub Pages em repositório público deixa os arquivos acessíveis a quem tiver o link.
Não há dado de paciente aqui, mas se preferir restringir, alternativas são o
Netlify (com proteção por senha) ou manter os arquivos apenas no aparelho.

## Conteúdo desta pasta

- `index.html` — página inicial ClinRef, com os três guias
- `guia_bolso_paciente_critico.html`
- `guia_bolso_plantao.html`
- `guia_bolso_psiquiatria.html`
- `manifest-*.webmanifest` — define nome e ícone de cada atalho
- `sw.js` — faz funcionar sem internet
- `icones/` — ícones nos tamanhos usados pelo Android e iOS
