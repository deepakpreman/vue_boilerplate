<template>
    <div id="topics">
        <v-container
      id="dashboard"
      fluid
      tag="section"
      >
         <Table/>
           </v-container>
    </div>   
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'Topics',
    computed: {
        ...mapState(['pageName'])
    },
    methods: {
        ...mapMutations({
            setPageName: 'setPageName'
        })
    },
    beforeMount() {
        this.setPageName('Topics');
    },
    components: {
        Table: () => import('../components/Table'),
    }
};
</script>
