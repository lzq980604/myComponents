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
            { path: '/eventKeyCodes', title: 'eventKeyCodes', component: '@/pages/EventKeyCodes' },
            { path: '/slideBtn', title: 'slideBtn', component: '@/pages/SlideBtn' },
            { path: '/detailTable', title: 'detailTable', component: '@/pages/DetailTable' },
            { path: '/myCountdown', title: 'myCountdown', component: '@/pages/MyCountdown' },
            { path: '/rainbowScrollText', title: 'rainbowScrollText', component: '@/pages/RainbowScrollText' },
            { path: '/blackAndWhite', title: 'blackAndWhite', component: '@/pages/BlackAndWhite' },
            { path: '/useObserver', title: 'useObserver', component: '@/pages/UseObserver' },
            { path: '/barrage', title: 'barrage', component: '@/pages/Barrage' },
        ]
    },

]