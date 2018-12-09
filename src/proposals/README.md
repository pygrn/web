---
is_index: true
---
# Propostes

## Últimes propostes publicades

<IssuesList
  :limit=0
  emptyMessage="No s'ha trobat cap proposta pendent"
  v-bind:github="{organization:'pygrn', repo:'xerrades', params:{state: 'open'}}"
/>

## Propostes tancades

<IssuesList
  :limit=0
  emptyMessage="No s'ha trobat cap proposta tancada"
  v-bind:github="{organization:'pygrn', repo:'xerrades', params:{state: 'closed'}}"
/>

## Vols afegir una nova proposta?

Només cal que preparis una [nova issue](https://github.com/pygrn/xerrades/issues/new) mantenint el següent format:

<FileContent
  v-bind:github="{organization:'pygrn', repo:'xerrades', path: '.github/ISSUE_TEMPLATE.md'}"
/>

::: tip
No cal que copiïs aquest exemple, si fas una [nova issue](https://github.com/pygrn/xerrades/issues/new) se't carregarà per defecte aquesta plantilla
:::
