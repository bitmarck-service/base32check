module.exports = {
    locales: {
        '/de/': {
            description: 'Ihre Quelle für die Base32- und Base32Check1-Algorithmen',
            lang: 'de',
        },
        '/': {
            description: 'Your source for the Base32 and Base32Check1 algorithms',
            lang: 'en-US',
        },
    },
    themeConfig: {
        docsBranch: 'develop',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        locales: {
            '/de/': {
                editLinkText: 'Helfen Sie uns, diese Seite zu verbessern!',
                label: 'Deutsch',
                selectText: 'Sprachen',
                sidebar: [
                    '/de/introduction',
                    '/de/samples',
                    ['/de/java', 'Java-Leitfaden'],
                    ['/de/scala', 'Scala-Leitfaden'],
                ]
            },
            '/': {
                label: 'English',
            },
        },
        repo: 'bitmarck-service/base32check',
        sidebar: [
            '/introduction',
            '/samples',
            ['/java', 'Java Guide'],
            ['/scala', 'Scala Guide'],
        ]
    },
    title: 'Base32Check',
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "192x192", href: "/assets/favicons/192.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "64x64", href: "/assets/favicons/64.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/16.png"}],
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/180.png"}],
    ],
}
