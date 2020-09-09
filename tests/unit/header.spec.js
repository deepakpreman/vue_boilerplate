import { shallowMount ,shallow, createLocalVue } from '@vue/test-utils';
import Header from '@/layouts/Header.vue';
import Vuex from 'vuex'
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Header.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Header, {
            mocks: {
                $store: {
                  state: {
                    primaryDrawer: true
                  }
                }
              },
              localVue,
        });
    })
    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    });
});
