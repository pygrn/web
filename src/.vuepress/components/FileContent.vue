<template>
<div class="language-md extra-class">
    <pre
      v-if="content && content.type=='file'"
      class="language-md"
    >{{content_decoded}}</pre>
    <p v-if="!content">{{emptyMessage}}</p>
</div>

</template>

<script>
const axios = require('axios');

export default {
    name: "FileContent",
    data() {
      return {
        content: null,
      }
    },

    props: {
      emptyMessage: {
        type: String,
        required: false,
        default: "No s'han trobat cap versió pel fitxer demanat",
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
        ref: 'master',
      }

      axios.get(`https://api.github.com/repos/${github.organization}/${github.repo}/contents/${github.path}`, {
        params: {...githubParams, ...github.params},
      })
      .then(response => {
        this.content = response["data"];
        console.log(this.content);
      })
      .catch(error => {
        console.log(`Error fetching repo ${github}`, error);
      });
    },

    computed: {
      content_decoded() {
        return decodeURIComponent(escape(window.atob(this.content.content)));
      },
    }
}
</script>
