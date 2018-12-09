<template>
<div>
    <div v-if="issues">
      <IssuesListItem
        v-for="(issue, index) in issues"
        v-if="!issue.pull_request && (!limit || index < limit)" v-bind="issue"
        :key="issue.id"
      />
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
}
</script>
