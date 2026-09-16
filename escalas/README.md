# Escalas — fichas estruturadas

Escalas e scores clínicos em formato padronizado. Pasta compartilhada entre os guias —
uma escala citada em mais de um guia (ex.: CIWA-Ar em plantão e psiquiatria) tem uma
única ficha aqui, nunca uma cópia por guia.

> Material de estudo e consulta pessoal. Não substitui bula, diretriz ou julgamento clínico.

## Índice

| Escala | Tipo | Ficha |
|---|---|---|

## Estrutura

```
.
├── README.md      # este arquivo — índice e convenções
├── TEMPLATE.md     # modelo em branco, base de toda ficha nova
└── <nome>.md
```

## Como adicionar uma escala

1. Copiar o `TEMPLATE.md` para `<nome-da-escala>.md`, em minúsculas e sem acento
   (`escala-de-coma-de-glasgow.md`).
2. Preencher o *front matter* YAML.
3. Preencher itens/domínios, interpretação e limitações. Campo sem dado confiável
   fica com `—`, nunca com informação estimada.
4. Acrescentar a linha correspondente na tabela do índice acima.
5. Registrar as fontes usadas no fim da ficha e atualizar `atualizado:` no front matter.
6. Conferir as tabelas do(s) guia(s) relevante(s) que citam a escala e atualizar o que
   a ficha mudar — a ficha é a fonte revisada, o guia é o resumo compilado que fica em
   cache no celular.

## Convenções

- **Front matter** obrigatório em toda ficha, com os campos do `TEMPLATE.md`.
- Uma afirmação por linha nas tabelas; evitar parágrafo dentro de célula.
- Títulos em nível `##` e `###` apenas — mantém as âncoras estáveis para links cruzados.
- Links entre fichas sempre relativos (`x.md`, mesma pasta).

## Status

Cada ficha declara no front matter:

- `rascunho` — esqueleto preenchido, sem revisão
- `revisado` — conferido contra fonte primária
- `desatualizado` — precisa de nova conferência

## Fontes de referência

Ver `referencias/fontes.md` — registro central compartilhado com `farmacos/` e
`procedimentos/`. Toda ficha cita por chave (`**Fontes:** nihss-hunt-hess-fisher`),
nunca por extenso.
