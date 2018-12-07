<template>
<div>
    <div v-for="(job, index) in jobs" v-if="index < limit">
        <h2>
            <router-link :to="job.path">{{ job.frontmatter.title }}</router-link>
        </h2>

        <p>{{ job.frontmatter.description }}</p>

        <p><router-link :to="job.path">Més informació</router-link></p>

    </div>

    <div v-if="issues">
      <div v-for="(job, index) in issues" v-if="index < limit">

        <p v-html="markdown(job.body)"></p>

        <p><router-link :to="job.url">Més informació</router-link></p>
      </div>
    </div>

</div>

</template>

<script>
const axios = require('axios');

var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

export default {
    name: "JobsIndex",
    data() {
      return {
        issues: null,
      }
    },

    props: {
      limit: {
        type: Number,
        required: false,
        default: 5,
      }
    },

    mounted() {
        const organization = "pygrn";
        const repo = "xerrades";

        axios.get(`https://api.github.com/repos/${organization}/${repo}/issues`, {
          params: {
            type: 'all',
          },
        })
        .then(response => {
          this.issues = response["data"];
        })
        .catch(error => {
          console.log("Error fetching repo", error);
        });
    },

    methods: {
      markdown: function (content) {
        return md.render(content);
      }
    },

    computed: {
        jobs() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/jobs/') && !x.frontmatter.blog_index && !x.frontmatter.hidden)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        },
    },
}
</script>
