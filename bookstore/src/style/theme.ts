interface Theme {
    name: string;
    color: {
        primary: string;
        background: string;
    };
}

export const light = {
    name: 'light',
    color: {
        primary: 'brown',
        background: 'lightgray'
    },
};

export const dark = {
    name: 'dart',
    color: {
        primary: 'coral',
        background: 'midnightblue',
    }
};