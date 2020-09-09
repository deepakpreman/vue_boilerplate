import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            component: () => import('@/views/Login'),
        },
        {
    
            path: '/',
            component: () => import('@/views/Index'),
            children: [
                // Dashboard
                {
                    name: 'Dashboard',
                    path: 'dashboard',
                    component: () => import('@/views/Dashboard')
                },
                // Configuration
                {
                    name: 'Configuration',
                    path: 'configuration',
                    component: () => import('@/views/Configuration')
                },
                // Policy
                {
                    name: 'Policy',
                    path: 'policy',
                    component: () => import('@/views/Policy')
                },
                // Alerts
                {
                    name: 'Alerts',
                    path: 'alerts',
                    component: () => import('@/views/Alerts')
                },
                // Topics
                {
                    name: 'Topics',
                    path: 'topics',
                    component: () => import('@/views/Topics')
                }
            ]
        }
    ]
});
