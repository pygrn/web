<template>
<div>
    <div v-if="issues && issues.length > 0">
      <IssuesListItem
        v-for="(issue, index) in issues_cleaned"
        v-if="!limit || index < limit"
        v-bind="issue"
        :index="index+1"
        :key="issue.id"
      />
    </div>
    <div v-if="!issues || issues.length == 0">
      <p>{{emptyMessage}}</p>
    </div>
</div>

</template>

<script>
const axios = require('axios');

export default {
    name: "IssuesList",
    data() {
      return {
        issues: null,
      }
    },

    props: {
      emptyMessage: {
        type: String,
        required: false,
        default: "No s'han trobat entrades",
      },
      limit: {
        type: Number,
        required: false,
        default: 5,
      },
      github: {
        type: Object,
        required: true,
      },
    },

    mounted() {
      /*
      Fetch issues at mount time
      */
      const {github} = this;
      const githubParams = {
        // state: 'closed',
        sort: 'created',
        direction: 'desc',
      }

      axios.get(`https://api.github.com/repos/${github.organization}/${github.repo}/issues`, {
        params: {...githubParams, ...github.params},
      })
      .then(response => {
        this.issues = response["data"];

        console.log(this.issues);
      })
      .catch(error => {
        console.log(`Error fetching repo ${github}`, error);
      });
    },

    computed: {
      issues_cleaned() {
          return this.issues
              .filter(x => !x.pull_request)
              // .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      },
    }
}
</script>
