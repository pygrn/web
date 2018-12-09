<template>
<div>
  <h2>
      <a target="_blank" :href="html_url" >{{ title }}</a>
  </h2>

  <p v-html="markdown(body)"></p>

  <p><a target="_blank" :href="html_url">Més informació</a></p>
</div>
</template>

<script>
const MarkdownIt = require('markdown-it'),
      md = new MarkdownIt();

export default {
    name: "IssuesListItem",

    data() {
      return {
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
    },

    methods: {
      markdown: function (content) {
        return md.render(content);
      }
    },
}
</script>
