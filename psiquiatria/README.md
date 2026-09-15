# Psicofarmacologia — fichas estruturadas

Fichas de psicofármacos em formato padronizado, da molécula ao desfecho clínico.

**Lógica do modelo:** molécula → receptor → circuito → sintoma → efeito adverso. A farmacocinética define o *timing*.

> Material de estudo e consulta pessoal. Não substitui bula, diretriz ou julgamento clínico. Doses e condutas devem ser conferidas na fonte primária antes de qualquer aplicação assistencial.

## Índice

| Fármaco | Classe | Alvo primário | t½ | Ficha |
|---|---|---|---|---|
| Fluoxetina | ISRS | SERT | 4–6 d (norfluox. 4–16 d) | [farmacos/fluoxetina.md](farmacos/fluoxetina.md) |

## Estrutura

```
.
├── README.md              # este arquivo — índice e convenções
├── TEMPLATE.md            # modelo em branco, base de toda ficha nova
└── farmacos/
    └── fluoxetina.md
```

## Como adicionar um fármaco

1. Copiar o `TEMPLATE.md` para `farmacos/<nome-generico>.md`, em minúsculas e sem acento (`acido-valproico.md`).
2. Preencher o *front matter* YAML — é o que alimenta o índice e qualquer parsing futuro.
3. Preencher os 6 blocos. Bloco sem dado confiável fica com `—`, nunca com informação estimada.
4. Acrescentar a linha correspondente na tabela do índice acima.
5. Registrar as fontes usadas no fim da ficha e atualizar `atualizado:` no front matter.
6. Conferir as tabelas de `guia_bolso_psiquiatria.html` que citam o fármaco (comparação de doses,
   trocas, populações especiais, interações — a ficha nova não fica numa seção única, o conteúdo
   está espalhado por tabela clínica) e atualizar o que a ficha mudar. A ficha é a fonte revisada;
   o guia é o resumo compilado que fica em cache no celular.

## Convenções

- **Front matter** obrigatório em toda ficha, com os campos do `TEMPLATE.md`.
- **Ki em nM**, como ordem de grandeza — valores variam entre ensaios; nunca citar como número exato.
- **Doses em mg/dia**, salvo indicação explícita em contrário.
- **Negrito** reservado ao que muda conduta (dose-alvo, contraindicação, interação maior).
- Uma afirmação clínica por linha nas tabelas; evitar parágrafo dentro de célula.
- Nomes comerciais só quando ajudam o reconhecimento no Brasil.
- Títulos em nível `##` e `###` apenas — mantém os âncoras estáveis para links cruzados.
- Links entre fichas sempre relativos (`../farmacos/x.md`), para funcionar no GitHub e em build estático.

## Status

Cada ficha declara no front matter:

- `rascunho` — esqueleto preenchido, sem revisão
- `revisado` — conferido contra fonte primária
- `desatualizado` — precisa de nova conferência

## Fontes de referência

Stahl, *Essential Psychopharmacology*; Goodman & Gilman; bulas da Anvisa e do FDA; PDSP Ki Database; UpToDate; diretrizes da ABP, APA e NICE.
