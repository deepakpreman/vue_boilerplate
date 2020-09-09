<template>
    <v-navigation-drawer
        v-model="drawer"
        :color="color"
        :mini-variant.sync="primaryDrawer.mini"
        app
        dark
    >
        <v-list dense>
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="@/assets/images/logo.png"></v-img>
                </v-list-item-avatar>

                <v-list-item-title
                    ><span class="project_title"
                        >DCAE Portal</span
                    ></v-list-item-title
                >

                <v-btn icon @click="setMini(!primaryDrawer.mini)">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item link to="dashboard" active-class="active-tab">
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title
                        ><span class="list_page_title"
                            >Dashboard</span
                        ></v-list-item-title
                    >
                </v-list-item-content>
            </v-list-item>

            <v-list-item link active-class="active-tab">
                <v-list-item-action>
                    <v-icon>mdi-server</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title
                        ><span class="list_page_title"
                            >Services</span
                        ></v-list-item-title
                    >
                </v-list-item-content>
            </v-list-item>

            <v-list-item link to="topics" active-class="active-tab">
                <v-list-item-action>
                    <v-icon>mdi-book-open</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title
                        ><span class="list_page_title"
                            >Topics</span
                        ></v-list-item-title
                    >
                </v-list-item-content>
            </v-list-item>

            <v-list-item link to="alerts" active-class="active-tab">
                <v-list-item-action>
                    <v-icon>mdi-alert</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title
                        ><span class="list_page_title"
                            >Alerts</span
                        ></v-list-item-title
                    >
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    props: {
        source: String
    },
    data: () => ({
        color: '#35414a',
        items: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard', to: 'dashboard' },
            { title: 'Services', icon: 'mdi-server', to: 'services' },
            { title: 'Topics', icon: 'mdi-book-open', to: 'topics' },
            { title: 'Alerts', icon: 'mdi-alert', to: 'alerts' }
        ],
        miniVariant: false
        // 030405
    }),
    computed: {
        ...mapState(['barColor', 'barImage']),
        drawer: {
            get() {
                return this.$store.state.drawer;
            },
            set(val) {
                this.$store.commit('setDrawer', val);
            }
        },
        primaryDrawer: {
            get() {
                return this.$store.state.primaryDrawer;
            },
            set(val) {
                this.$store.commit('setPrimaryDrawer', val);
            }
        }
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

<style scoped>
.active-tab {
    color: #14c26c;
}
.project_title {
    font-size: 18px !important;
}
.list_page_title {
    font-size: 16px !important;
}
</style>
