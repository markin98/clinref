# Procedimentos e condutas — fichas estruturadas

Condutas, algoritmos e procedimentos técnicos em formato padronizado. Pasta
compartilhada entre os guias — um procedimento citado em mais de um guia (ex.: síndrome
serotoninérgica em psiquiatria, plantão e paciente crítico) tem uma única ficha aqui,
nunca uma cópia por guia.

> Material de estudo e consulta pessoal. Não substitui bula, diretriz, protocolo
> institucional ou julgamento clínico.

## Índice

| Procedimento | Categoria | Ficha |
|---|---|---|

## Estrutura

```
.
├── README.md      # este arquivo — índice e convenções
├── TEMPLATE.md     # modelo em branco, base de toda ficha nova
└── <nome>.md
```

## Como adicionar um procedimento

1. Copiar o `TEMPLATE.md` para `<nome>.md`, em minúsculas e sem acento
   (`sindrome-serotoninergica.md`).
2. Preencher o *front matter* YAML.
3. Preencher os 6 blocos. Bloco sem dado confiável fica com `—`, nunca com
   informação estimada.
4. Acrescentar a linha correspondente na tabela do índice acima.
5. Registrar as fontes usadas no fim da ficha e atualizar `atualizado:` no front matter.
6. Conferir as tabelas/cards do(s) guia(s) relevante(s) que citam o procedimento e
   atualizar o que a ficha mudar — a ficha é a fonte revisada, o guia é o resumo
   compilado que fica em cache no celular.

## Convenções

- **Front matter** obrigatório em toda ficha, com os campos do `TEMPLATE.md`.
- `categoria` é livre (ex.: emergência psiquiátrica, técnico, distúrbio metabólico,
  emergência infecciosa) — não existe lista fechada, mas mantenha consistência com
  o que já está no índice antes de inventar uma categoria nova.
- Uma afirmação clínica por linha nas tabelas; evitar parágrafo dentro de célula.
- Negrito reservado ao que muda conduta (dose-alvo, contraindicação, critério de
  internação).
- Títulos em nível `##` e `###` apenas — mantém as âncoras estáveis para links cruzados.
- Links entre fichas sempre relativos (`x.md`, mesma pasta).

## Status

Cada ficha declara no front matter:

- `rascunho` — esqueleto preenchido, sem revisão
- `revisado` — conferido contra fonte primária
- `desatualizado` — precisa de nova conferência

## Fontes de referência

Ver `referencias/fontes.md` — registro central compartilhado com `farmacos/` e
`escalas/`. Toda ficha cita por chave (`**Fontes:** abp-emergencias, ciwa-cows`),
nunca por extenso.
