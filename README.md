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

- `index.html` — página inicial ClinRef, com os guias disponíveis
- `sw.js` — faz funcionar sem internet
- `manifest-clinref.webmanifest` e `icones/` (raiz) — atalho da página inicial
- `guias/` — um guia por especialidade ou cenário de atendimento, cada um com seu
  próprio HTML, manifest e ícones (`guias/paciente_critico/`, `guias/plantao/`,
  `guias/psiquiatria/`; novas áreas — cardiologia, gastro etc. — entram aqui do
  mesmo jeito, sem mudar a estrutura)
- `farmacos/`, `procedimentos/`, `escalas/` — fichas estruturadas (fármaco, conduta/
  procedimento, escala clínica), compartilhadas entre todos os guias — um item citado
  em mais de um guia tem uma única ficha, nunca uma cópia por guia
- `referencias/` — registro central das fontes usadas nas fichas (`fontes.md`), citadas
  por chave em vez de reescritas por extenso em cada arquivo

## Se os ícones não aparecerem

Significa que alguma pasta `icones/` não subiu junto — cada guia tem a sua, dentro
de `guias/<nome-do-guia>/icones/`, além da da raiz. O upload pela web do GitHub
às vezes ignora subpastas quando se arrasta o conteúdo solto. Duas saídas:

- Arraste **cada pasta `icones/` inteira** numa operação de *Add file → Upload files*, ou
- Descompacte o `clinref.zip` e arraste a **pasta toda** de uma vez, preservando a árvore.

A página inicial funciona mesmo sem a pasta (os ícones dela estão embutidos no HTML),
mas os atalhos na tela inicial precisam dos arquivos em `icones/` para ganhar o ícone certo.

## Atualizar depois

Suba os arquivos novos por cima (*Add file → Upload files* e confirme a substituição).
No celular, abra com rede, feche e reabra o atalho — o service worker troca a versão sozinho.
