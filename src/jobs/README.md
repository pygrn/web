---
is_index: true
---
# Feines

## Últimes feines publicades

<!-- <JobsIndex :limit=3 /> -->

<IssuesList
  :limit=0
  emptyMessage="No s'ha trobat cap procés de selecció obert"
  v-bind:github="{organization:'pygrn', repo:'feina', params:{state: 'open'}}"
/>

## Vols afegir una nova feina?

Només cal que preparis una [nova issue](https://github.com/pygrn/feina/issues/new) mantenint el següent format:

<FileContent
  v-bind:github="{organization:'pygrn', repo:'feina', path: '.github/ISSUE_TEMPLATE.md'}"
/>

::: tip
No cal que copiïs aquest exemple, si fas una [nova issue](https://github.com/pygrn/feina/issues/new) se't carregarà per defecte aquesta plantilla
:::
