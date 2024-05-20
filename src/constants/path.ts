const ROUTE_PARAMS = {
    MOVIE_ID: 'movie_id',
    CINEMA_ID: 'cinema_id',
    USER_ID: 'user_id',
}

export const PATHS = {
    HOME: {
        IDENTITY: '',
    },

    AUTH: {
        IDENTITY: 'auth',
        EMAIL: 'verify-email',
        FORGOT_PASSWORD: 'forgot-password',
    },
    REGISTER: {
        IDENTITY: 'register',
    },
    MOVIES: {
        IDENTITY: 'movies',
        LIST: '',
        DETAIL: `${ROUTE_PARAMS.MOVIE_ID}`,
    },
    CINEMA: {
        IDENTITY: 'cinema',
        LIST: '',
    },
    PAYMENT: {
        IDENTITY: 'payment',
        DETAIL: '',
    },

    PROFILE: {
        IDENTITY: 'profile',
    },

    ADMIN: {
        IDENTITY: 'admin',
        MOVIES: {
            IDENTITY: 'movies',
            LIST: '',
            DETAIL: `${ROUTE_PARAMS.MOVIE_ID}`,
            CINEMA: {
                IDENTITY: 'cinema',
                LIST: '',
                DETAIL: `${ROUTE_PARAMS.CINEMA_ID}`,
            },
            SHOWTIMES: {
                IDENTITY: 'showtimes',
                LIST: '',
            },
            DASHBOARD: {
                IDENTITY: 'dashboard',
            },

            COMMENTS: {
                IDENTITY: 'comments',
            },

            USERS: {
                IDENTITY: 'users',
                LIST: '',
                DETAIL: `${ROUTE_PARAMS.USER_ID}`,
            },
        },
    },
}
