<template>
<div>
    <div v-for="job in jobs">
        <h2>
            <router-link :to="job.path">{{ job.frontmatter.title }}</router-link>
        </h2>

        <p>{{ job.frontmatter.description }}</p>

        <p><router-link :to="job.path">Read more</router-link></p>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        jobs() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/jobs/') && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>
