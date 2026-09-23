# Referências — registro central

Um único lugar que sabe a edição, o ano e a situação de cada fonte usada em qualquer
ficha do repositório (`farmacos/`, `procedimentos/`, `escalas/`). Evita duas fichas
citarem a mesma diretriz com edições diferentes sem ninguém perceber, e evita reescrever
a mesma bibliografia por extenso em cada arquivo.

## Como citar

No final de cada ficha, a linha `**Fontes:**` lista chaves separadas por vírgula, nunca
a referência completa:

```
**Fontes:** surviving-sepsis, stahl, pdsp-ki
```

A chave e o que ela representa vivem só em `fontes.md`. Se uma fonte que uma ficha
precisa ainda não está lá, adicione a linha em `fontes.md` antes de citar — nunca cite
uma fonte que não está no registro.

## O que significa "revisado"

`status: revisado` no front matter de uma ficha não é "escrevi com o que eu já sabia" —
é **conferido de fato contra a fonte primária** no momento da revisão: ler a diretriz
vigente, a edição atual do livro-texto ou a bula corrente, e confirmar (ou corrigir) o
que a ficha afirma. Ficha marcada `revisado` sem essa conferência é uma ficha mentindo
sobre o próprio status.

Isso vale tanto para ficha nova quanto para ficha antiga sendo revisitada — inclusive
quando o texto não muda: uma conferência que confirma que nada mudou ainda conta como
revisão e deve atualizar `atualizado:` no front matter.

## Quando uma fonte fica desatualizada

1. Atualizar a linha correspondente em `fontes.md` (nova edição/ano) e marcar a coluna
   Situação com `⚠` + uma nota curta do que mudou.
2. Buscar (`grep` pela chave) todas as fichas que citam essa fonte.
3. Cada ficha encontrada muda `status:` para `desatualizado` até ser conferida contra
   a nova versão da fonte.
4. Depois de conferida e corrigida, a ficha volta para `status: revisado` e a linha em
   `fontes.md` perde o `⚠` (ou o mantém, se a nota ainda for relevante — ex.: fontes que
   divergem entre si permanecem sinalizadas mesmo revisadas).

Não existe checagem automática nisso — é um site estático, sem esteira de atualização.
A confiabilidade do sistema depende de quem revisa realmente ter ido à fonte, não de
qualquer mecanismo do repositório.

## Hierarquia de autoridade, quando fontes divergem

1. Diretriz vigente (nacional, se houver; internacional, quando a nacional for omissa
   ou mais antiga).
2. Livro-texto de referência na área, edição mais recente disponível.
3. Base de dados / consulta viva (PDSP Ki, UpToDate, bula) — para dado pontual, não
   para conduta.

Quando duas fontes de mesmo nível divergem (ex.: duas tabelas de equivalência de
benzodiazepínico com valores diferentes), a ficha registra a divergência explicitamente
em vez de escolher uma silenciosamente — ver `nhs-equivalencia-bzd` em `fontes.md` como
exemplo desse caso.
