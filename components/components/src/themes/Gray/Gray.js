const theme = {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    lineHeights: {
        solid: 1,
        title: 1.25,
        copy: 1.5
    },
    letterSpacings: {
        normal: 'normal',
        tracked: '0.1em',
        tight: '-0.05em',
        mega: '0.25em'
    },
    borders: [
        0,
        '1px solid',
        '2px solid',
        '3px solid',
        '4px solid',
        '8px solid',
        '16px solid',
        '32px solid'
    ],
    colors: {
        primary: {
            light: 'hs(208, 13%, 35%)',
            main: 'hs(208, 13%, 35%)',
            dark: 'hs(208, 13%, 15%)',
            contrastText: 'ffffff'
        },
        text: {
            primary: 'hs(208, 13%, 15%)',
            secondary: 'hs(208, 13%, 45%)',
            disabled: 'hs(208, 13%, 75%)',
            hint: 'hs(208, 13%, 75%)'
        },
    }
}

const defaults = {
    button: {
        padding: `${theme.space[2] / 16}em ${(theme.space[3] + 4) / 16}em`,
        border: theme.borders[3],
        textTransform: 'uppercase',
        letterSpacing: theme.letterSpacings.tracked
    }
}




const variants = {
    button: {
        primary: {
            ...defaults.button,
            color: theme.colors.primary.main,
            borderColor: theme.colors.primary.main
        },
        contrast:{
            ...defaults.button,
            color: theme.colors.primary.contrastText,
            borderColor: theme.colors.primary.contrastText
        }
    },
    LinkButton: {
        primary: {
            color: theme.colors.primary.main
        },
        contrast: {
            color: theme.colors.primary.contrastText
        }
    },
}

const Gray = { ...theme, defaults, variants }
export { Gray }