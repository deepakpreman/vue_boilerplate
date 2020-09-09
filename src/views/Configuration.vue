<template>
    <div id="configuration"></div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'Configuration',
    computed: {
        ...mapState(['pageName'])
    },
    methods: {
        ...mapMutations({
            setPageName: 'setPageName'
        })
    },
    beforeMount() {
        this.setPageName('Configuration');
    }
};
</script>
