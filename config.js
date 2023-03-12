const config = {
    development: {
        name: 'squido cart',
        description: 'Welcome to squido cart. Great clothes, made simple!',
        twitterHandle: '@mrvautin',
        baseUrl: 'http://localhost:4965',
        sourcesExt: 'markdown',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 4,
        dateFormat: 'dd MMM yyyy',
        cartCode: '<div id="my-store-66883283"></div><div><script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?66883283&data_platform=code&data_date=2021-11-29" charset="utf-8"></script><script type="text/javascript"> xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-66883283");</script></div>',
        postBuild: [
            {
                name: 'zip',
                options: {}
            }
        ]
    },
    production: {
        name: 'squido cart',
        description: 'Welcome to squido cart. Great clothes, made simple!',
        twitterHandle: '@mrvautin',
        baseUrl: 'https://squido-cart.markmoffat.com',
        sourcesExt: 'markdown',
        summaryLength: 250,
        port: 4965,
        pagination: true,
        postPerPage: 4,
        dateFormat: 'dd MMM yyyy',
        cartCode: '<div id="my-store-66883283"></div><div><script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?66883283&data_platform=code&data_date=2021-11-29" charset="utf-8"></script><script type="text/javascript"> xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-66883283");</script></div>',
        plugins: [
            {
                name: 'robots',
                options: {}
            }
        ]
    }
};

module.exports = config;
