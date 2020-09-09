<template>
    <v-app>
        <Header />
        <side-bar />
        <view-container />
        <!-- <Footer /> -->
    </v-app>
</template>

<script>
export default {
    name: 'Index',

    components: {
        // SideBar: () => import('../layouts/SideBar'),
        Header: () => import('../layouts/Header'),
        // Footer: () => import('../layouts/Footer'),
        SideBar: () => import('../layouts/SideBar'),
        ViewContainer: () => import('../layouts/ViewContainer')
    },

    data: () => ({
        expandOnHover: false
    })
};
</script>
