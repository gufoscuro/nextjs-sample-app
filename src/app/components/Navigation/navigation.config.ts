interface NavigationLink {
    label: string;
    url: string;
}

export const BASE_URLS: { [key: string]: string;  } = {
    history: '/transactions',
    cards: '/cards'
}

export const LOGO_SRC: string = '/qonto-logo.svg';
export const LOGO_LINK_URL: string = '/';
export const LINKS: Array<NavigationLink> = [
    {
        label: 'History',
        url: BASE_URLS.history
    },
    {
        label: 'Cards',
        url: BASE_URLS.cards
    }
]