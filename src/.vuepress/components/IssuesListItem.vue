<template>

<div class="issues-list-entry">
  <h3 @click="toggleVisibility()">
      <a>{{visibilitySymbol()}} {{ title }}</a>
  </h3>

  <div class="collapsed" v-show="visible">
    <p v-html="markdown(body)"></p>

    <p><a target="_blank" :href="html_url">Més informació</a></p>
  </div>
</div>

</template>

<script>
const MarkdownIt = require('markdown-it'),
      md = new MarkdownIt();

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
    },

    methods: {
      markdown: function (content) {
        return md.render(content);
      },
      toggleVisibility() {
        this.visible = !this.visible;
      },
      visibilitySymbol: function () {
        return !this.visible && "[+]" || "[-]"
      }
    },
}
</script>


<style>

</style>
