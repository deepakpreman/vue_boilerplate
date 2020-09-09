<template>
    <div id="policy"></div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'Policy',
    computed: {
        ...mapState(['pageName'])
    },
    methods: {
        ...mapMutations({
            setPageName: 'setPageName'
        })
    },
    beforeMount() {
        this.setPageName('Policy');
    }
};
</script>
