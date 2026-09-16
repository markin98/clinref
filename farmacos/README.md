# Fármacos — fichas estruturadas

Fichas de fármacos em formato padronizado, da molécula ao desfecho clínico. Pasta
compartilhada entre os três guias (`paciente_critico/`, `plantao/`, `psiquiatria/`) —
um fármaco citado em mais de um guia tem uma única ficha aqui, nunca uma cópia por guia.

**Lógica do modelo atual:** molécula → receptor → circuito → sintoma → efeito adverso, com
a farmacocinética definindo o *timing*. Esse molde (`TEMPLATE.md`) nasceu para psicofármaco
e ainda é o único que existe — fármaco de uso contínuo fora de psiquiatria e fármaco de
emergência (dose por contexto/diluição, sem a profundidade de receptor) vão precisar de
moldes próprios, planejados mas ainda não escritos.

> Material de estudo e consulta pessoal. Não substitui bula, diretriz ou julgamento clínico. Doses e condutas devem ser conferidas na fonte primária antes de qualquer aplicação assistencial.

## Índice

| Fármaco | Classe | Alvo primário | t½ | Ficha |
|---|---|---|---|---|
| Fluoxetina | ISRS | SERT | 4–6 d (norfluox. 4–16 d) | [fluoxetina.md](fluoxetina.md) |

## Estrutura

```
.
├── README.md              # este arquivo — índice e convenções
├── TEMPLATE.md            # modelo em branco, base de toda ficha nova
└── fluoxetina.md
```

## Como adicionar um fármaco

1. Copiar o `TEMPLATE.md` para `<nome-generico>.md`, em minúsculas e sem acento (`acido-valproico.md`).
2. Preencher o *front matter* YAML — é o que alimenta o índice e qualquer parsing futuro.
3. Preencher os 6 blocos. Bloco sem dado confiável fica com `—`, nunca com informação estimada.
4. Acrescentar a linha correspondente na tabela do índice acima.
5. Registrar as fontes usadas no fim da ficha e atualizar `atualizado:` no front matter.
6. Conferir as tabelas do guia relevante (psiquiatria, plantão ou paciente crítico, conforme
   onde o fármaco aparece) — a ficha nova não fica numa seção única lá, o conteúdo costuma
   estar espalhado por tabela clínica — e atualizar o que a ficha mudar. A ficha é a fonte
   revisada; o guia é o resumo compilado que fica em cache no celular.

## Convenções

- **Front matter** obrigatório em toda ficha, com os campos do `TEMPLATE.md`.
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

Stahl, *Essential Psychopharmacology*; Goodman & Gilman; bulas da Anvisa e do FDA; PDSP Ki Database; UpToDate; diretrizes da ABP, APA e NICE.

Um registro central de fontes (`referencias/fontes.md`, compartilhado com `procedimentos/`
e `escalas/`) está planejado — cada ficha vai passar a citar por chave em vez de reescrever
a bibliografia por extenso. Até lá, a lista acima permanece por extenso nesta pasta.
