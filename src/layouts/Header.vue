<template>
    <v-app-bar app color="#35414a"
    
      dark
 >
        <v-app-bar-nav-icon @click="setDrawer(!drawer)"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ pageName }}</v-toolbar-title>
        <v-spacer></v-spacer>
            <!-- {{ user.email }} -->
        <v-btn icon>
            <v-icon>mdi-account</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    data: () => ({}),
    computed: {
        ...mapState(['drawer', 'primaryDrawer', 'pageName','user'])
    },
    methods: {
        ...mapMutations({
            setDrawer: 'setDrawer',
            setPrimaryDrawer: 'setPrimaryDrawer'
        }),
        setMini: function(mini) {
            let primaryDrawer = this.$store.state.primaryDrawer;
            primaryDrawer.mini = mini;
            this.setPrimaryDrawer(primaryDrawer);
        }
    }
};
</script>
