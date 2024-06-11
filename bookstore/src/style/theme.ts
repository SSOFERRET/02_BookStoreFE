export type ColorKey = "primary" | "background";
export type ThemeName = "light" | "dark";
export type HeadingSize = 'large' | 'medium' | 'small';

interface Theme {
    name: ThemeName;
    color: Record<ColorKey, string>;
    heading: {
        [key in HeadingSize]: {
            fontsize: string;
        }
    }
}

export const light : Theme = {
    name: 'light',
    color: {
        primary: 'brown',
        background: 'lightgray', 
    },
    heading: {
        large: {
            fontsize: "2rem"
        },
        medium: {
            fontsize: "1.5rem"
        },
        small: {
            fontsize: "1rem"
        }
    }
};

export const dark : Theme = {
    ...light,
    name: 'dark',
    color: {
        primary: 'coral',
        background: 'midnightblue',
    }
};

export const getTheme = (themeName: ThemeName): Theme => {
    switch (themeName) {
        case "light":
            return light;
        case "dark":
            return dark;
    }
}