---
is_index: true
---
# Propostes

Per escollir la temàtica de les trobades la comunitat [proposa](#vols-afegir-una-nova-proposta) una sessió (xerrada, taller, formació, debat, ...), i és la pròpia comunitat qui la [vota](#com-votar-una-proposta).

Ens apassiona el `Python`, però també tot el que siguin tecnologies, mètodes de desenvolupament i altres llenguatges. Per això intercalem mensualment el tipus de sessió, una focalitzada en l'ecosistema `Python` i l'altre oberta a qualsevol tecnologia.

Abans de cada data de trobada s'escull la proposta més adient, tenint en compte:
- l'acceptació (el recompte de [vots](#com-votar-una-proposta))
- el tipus de sessió (`python`, `tech`)
- el format de la sessió (`xerrada`, `taller`, ...)
- la temàtica (per evitar repeticions temàtiques innecessàries)

## Vols afegir una nova proposta?

Només cal que preparis una [nova issue](https://github.com/pygrn/xerrades/issues/new) mantenint el següent format:

<FileContent
  v-bind:github="{organization:'pygrn', repo:'xerrades', path: '.github/ISSUE_TEMPLATE.md'}"
/>

Es recomana que tingui una durada màxima de 45'.

::: tip
No cal que copiïs aquest exemple, si fas una [nova issue](https://github.com/pygrn/xerrades/issues/new) se't carregarà per defecte aquesta plantilla
:::

## Com votar una proposta?

Les votacions les fem interactuant amb la pròpia `issue`.

Concretament fem una reacció `+1` (:+1:) al missatge base de la `issue`:

![Com votar?](./vote.gif#rounded)

[Més informació](https://blog.github.com/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/)

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
