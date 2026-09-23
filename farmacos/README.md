# Fármacos — fichas estruturadas

Fichas de fármacos em formato padronizado, da molécula ao desfecho clínico. Pasta
compartilhada entre todos os guias em `guias/` — presentes (paciente crítico, plantão,
psiquiatria) e futuros (cardiologia, gastro etc.) — um fármaco citado em mais de um guia
tem uma única ficha aqui, nunca uma cópia por guia.

**Três moldes, conforme o perfil de uso do fármaco:**

- **`TEMPLATE-psicofarmaco.md`** — molécula → receptor → circuito → sintoma → efeito
  adverso, farmacocinética definindo o *timing*. Uso contínuo em psiquiatria.
- **`TEMPLATE-cronico.md`** — uso contínuo fora de psiquiatria (anti-hipertensivo,
  anticoagulante oral, hipoglicemiante...). Mecanismo consolidado, sem a profundidade
  de receptor/circuito.
- **`TEMPLATE-emergencia.md`** — uso agudo (vasopressor, indução, antídoto). Eixo
  organizador é dose por contexto/indicação, não receptor — a mesma droga pode ter
  doses bem diferentes a depender da situação clínica.

O front matter de cada ficha declara `tipo_ficha:` (`psicofarmaco`, `cronico` ou
`emergencia`) e `guias_relacionados:` (lista de guias que citam o fármaco).

Fármaco de uso duplo (ex.: midazolam — indução aguda e ansiolítico crônico) ganha **uma
ficha só**, no molde do uso dominante; o uso secundário vira seção extra dentro dela,
nunca um arquivo novo.

> Material de estudo e consulta pessoal. Não substitui bula, diretriz ou julgamento clínico. Doses e condutas devem ser conferidas na fonte primária antes de qualquer aplicação assistencial.

## Índice

| Fármaco | Tipo | Classe | Guias | Ficha |
|---|---|---|---|---|
| Fluoxetina | psicofarmaco | ISRS | psiquiatria | [fluoxetina.md](fluoxetina.md) |

## Estrutura

```
.
├── README.md                  # este arquivo — índice e convenções
├── TEMPLATE-psicofarmaco.md
├── TEMPLATE-cronico.md
├── TEMPLATE-emergencia.md
└── fluoxetina.md
```

## Como adicionar um fármaco

1. Escolher o molde certo (psicofarmaco / cronico / emergencia) e copiá-lo para
   `<nome-generico>.md`, em minúsculas e sem acento (`acido-valproico.md`).
2. Preencher o *front matter* YAML — é o que alimenta o índice e qualquer parsing futuro.
3. Preencher os blocos do molde escolhido. Bloco sem dado confiável fica com `—`, nunca
   com informação estimada.
4. Acrescentar a linha correspondente na tabela do índice acima.
5. Registrar as fontes usadas (por chave — ver `referencias/README.md`) no fim da ficha
   e atualizar `atualizado:` no front matter. Só marcar `status: revisado` depois de
   conferir de fato contra a fonte primária.
6. Conferir as tabelas do(s) guia(s) relevante(s) (`guias_relacionados:`) que citam o
   fármaco — a ficha nova não fica numa seção única lá, o conteúdo costuma estar
   espalhado por tabela clínica — e atualizar o que a ficha mudar. A ficha é a fonte
   revisada; o guia é o resumo compilado que fica em cache no celular.

## Convenções

- **Front matter** obrigatório em toda ficha, com os campos do molde correspondente.
- **Ki em nM**, como ordem de grandeza — valores variam entre ensaios; nunca citar como número exato.
- **Doses em mg/dia**, salvo indicação explícita em contrário.
- **Negrito** reservado ao que muda conduta (dose-alvo, contraindicação, interação maior).
- Uma afirmação clínica por linha nas tabelas; evitar parágrafo dentro de célula.
- Nomes comerciais só quando ajudam o reconhecimento no Brasil.
- Títulos em nível `##` e `###` apenas — mantém os âncoras estáveis para links cruzados.
- Links entre fichas sempre relativos (`x.md`, mesma pasta), para funcionar no GitHub e em build estático.

## Status

Cada ficha declara no front matter:

- `rascunho` — esqueleto preenchido, sem revisão
- `revisado` — conferido contra fonte primária
- `desatualizado` — precisa de nova conferência

## Fontes de referência

Ver `referencias/fontes.md` — registro central compartilhado com `procedimentos/` e
`escalas/`. Toda ficha cita por chave (`**Fontes:** stahl, pdsp-ki`), nunca por extenso.
