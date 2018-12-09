<template>

<div class="issues-list-entry">
  <h3 @click="toggleVisibility()">
      <a>{{visibilitySymbol()}} {{index && "#" + index}} {{title}}</a>
  </h3>

  <div class="issues-list-entry-collapsable" v-show="visible">
    <p v-html="markdown(body)"></p>
    <p>Creat el {{created_at_date()}} per <a target="_blank" :href="user.html_url">{{user.login}}</a></p>
    <p><a target="_blank" :href="html_url">Més informació</a></p>
  </div>
</div>

</template>

<script>
const MarkdownIt = require('markdown-it'),
      md = new MarkdownIt();

const symbols = {
  expand: "",
  collapse: "",
};

export default {
    name: "IssuesListItem",

    data() {
      return {
        visible: !this.hidden,
      }
    },

    props: {
      title: {
        type: String,
        required: true,
      },
      created_at: {
        type: String,
        required: true,
      },
      user: {
        type: Object,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      html_url: {
        type: String,
        required: true,
      },
      hidden: {
        type: Boolean,
        required: false,
        default: true,
      },
      index: {
        type: Number,
        required: false,
      },
    },

    methods: {
      markdown: function (content) {
        return md.render(content);
      },
      toggleVisibility() {
        this.visible = !this.visible;
      },
      visibilitySymbol: function () {
        return !this.visible && symbols.expand || symbols.collapse
      },
      created_at_date: function () {
        return new Date(this.created_at).toLocaleDateString('es-ES');
      },

    },
}
</script>


<style lang="stylus">
@require '~vuepress/lib/default-theme/styles/config'

.issues-list-entry-collapsable
  border-radius: $borderRadius
  padding-top: 1px
  padding-bottom: 1px
  padding-left: 25px
  padding-right: 25px
  background-color: white
  margin-bottom: 50px
  border: 1px solid darken($borderColor, 10%)
</style>
