import packageInfo from '../../package.json';

export const environment = {
    googleAnalyticsId: '', // intentionally empty; don't try to track usage on dev
    production: false,
    vectorApi: 'https://vector-api.dev.swx-trec.com',
    version: packageInfo.version
};
