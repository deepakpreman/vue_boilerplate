import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        user: null,
        apiUrl: 'https://reqres.in/api/',
        drawer: null,
        primaryDrawer: {
            model: null,
            type: 'default (no property)',
            clipped: false,
            floating: false,
            mini: false
        },
        pageName: ''
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        setDrawer(state, payload) {
            state.drawer = payload;
        },
        setPrimaryDrawer(state, payload) {
            state.primaryDrawer = payload;
        },
        setPageName(state, payload) {
            console.log(state.pageName);
            state.pageName = payload;
        }
    },
    actions: {
        async getRecipes({ state, commit }, plan) {
            try {
                let response = await axios.get(`${state.apiUrl}`, {
                    params: {
                        q: plan,
                        app_id: '69b9a22a',
                        app_key: '1279a7af24e7f204f8456f3344aecc5a',
                        from: 0,
                        to: 9
                    }
                });
                commit('setRecipes', response.data.hits);
            } catch (error) {
                commit('setRecipes', []);
            }
        }
    },
    modules: {}
});
