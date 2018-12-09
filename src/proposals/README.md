---
is_index: true
---
# Propostes

Per escollir la temàtica de les trobades la comunitat proposa una sessió (xerrada, taller, formació, debat, ...), i és la pròpia comunitat qui la vota.

Abans de cada data de trobada s'escull la proposta més adient, tenint en compte:
- l'acceptació (el recompte de vots)
- el tipus de sessió (`python`, `tech`, ...)
- el format de la sessió (`xerrada`, `taller`, ...)
- la temàtica (per evitar repeticions temàtiques innecessaries)

## Vols afegir una nova proposta?

Només cal que preparis una [nova issue](https://github.com/pygrn/xerrades/issues/new) mantenint el següent format:

<FileContent
  v-bind:github="{organization:'pygrn', repo:'xerrades', path: '.github/ISSUE_TEMPLATE.md'}"
/>

::: tip
No cal que copiïs aquest exemple, si fas una [nova issue](https://github.com/pygrn/xerrades/issues/new) se't carregarà per defecte aquesta plantilla
:::

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
