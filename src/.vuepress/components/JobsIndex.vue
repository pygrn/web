<template>
<div>
    <div v-for="(job, index) in jobs" v-if="index < limit">
        <h2>
            <router-link :to="job.path">{{ job.frontmatter.title }}</router-link>
        </h2>

        <p>{{ job.frontmatter.description }}</p>

        <p><router-link :to="job.path">Més informació</router-link></p>

    </div>
</div>

</template>

<script>
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

    computed: {
        jobs() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/jobs/') && !x.frontmatter.blog_index && !x.frontmatter.hidden)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    },
}
</script>
