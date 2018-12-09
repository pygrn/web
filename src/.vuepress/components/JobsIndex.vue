<template>
<div>
  <div v-if="jobs && jobs.length">
    <div v-for="(job, index) in jobs" v-if="index < limit">
      <h2>
          <router-link :to="job.path">{{ job.frontmatter.title }}</router-link>
      </h2>

      <p>{{ job.frontmatter.description }}</p>

      <p><router-link :to="job.path">Més informació</router-link></p>
    </div>
  </div>
  <div v-if="!jobs || jobs.length == 0">
    <p>No hi ha cap procés de selecció obert</p>
  </div>
</div>

</template>

<script>
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

export default {
    name: "JobsIndex",
    data() {
      return {
      }
    },

    props: {
      limit: {
        type: Number,
        required: false,
        default: 5,
      }
    },

    methods: {
      markdown: function (content) {
        return md.render(content);
      }
    },

    computed: {
        jobs() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/jobs/') && !x.path.startsWith('/jobs/hidden') && !x.frontmatter.is_index && !x.frontmatter.hidden)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        },
    },
}
</script>
