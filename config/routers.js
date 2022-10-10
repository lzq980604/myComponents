export default [
    {
        path: "/",
        component: '@/layouts/MainLayout',
        routes: [
            { path: '/', title: 'home', component: '@/pages/Home' },
            { path: '/expandingCards', title: 'expandingCards', component: '@/pages/ExpandingCards' },
            { path: '/progressSteps', title: 'progressSteps', component: '@/pages/ProgressSteps' },
            { path: '/rotatingNavigation', title: 'rotatingNavigation', component: '@/pages/RotatingNavigation' },
            { path: '/hiddenSearchWidget', title: 'hiddenSearchWidget', component: '@/pages/HiddenSearchWidget' },
        ]
    },

]