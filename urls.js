import config from './config';

export default {
  type: {
    gets: {
      url: 'https://chaus.herokuapp.com/apis/fs/types',
      method: 'GET',
      cache: {
        client: true,
        server: true,
      },
    },
  },
  event: {
    gets: {
      url: '/static/events.json',
      method: 'GET',
      cache: {
        client: true,
        server: true,
      },
    },
  },
  trend: {
    gets: {
      url: `${config.app.base}/trends`,
      method: 'GET',
    },
  },
  best: {
    gets: {
      url: `${config.app.base}/trends`,
      method: 'GET',
      cache: {
        client: true,
      },
    },
  },
  photo: {
    gets: {
      url: `${config.app.base}/bff/photos`,
      method: 'GET',
      cache: {
        client: true,
      },
    },
  },
  place: {
    gets: {
      url: `${config.app.base}/bff/google/maps/api/place/autocomplete/json`,
      method: 'GET',
      defaults: {
        key: config.googleapis.key,
      },
    },
    get: {
      url: `${config.app.base}/bff/google/maps/api/place/details/json`,
      method: 'GET',
      defaults: {
        key: config.googleapis.key,
        language: 'en',
      },
      cache: {
        client: true,
      },
    },
  },
};