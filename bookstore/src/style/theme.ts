type ColorKey = "primary" | "background";
export type ThemeName = "light" | "dark";

interface Theme {
    name: ThemeName;
    color: Record<ColorKey, string>
}

export const light : Theme = {
    name: 'light',
    color: {
        primary: 'brown',
        background: 'lightgray'
    },
};

export const dark : Theme = {
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