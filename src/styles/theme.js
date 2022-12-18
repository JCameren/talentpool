import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    colors: {
        text: ['#58585D', '#161617'],
        primary: ['#665df5', '#544af4'],
        bg: '#ffffff',
        fg: '#fdfdfd',
        muted: '#efefef'
    },
    fontSizes: {
        lg: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
        md: 'clamp(2, 5vw, 2.25rem)',
        sm: 'clamp(0.9rem, 3vw, 1rem)',
        xs: 'clamp(0.75rem, 2vw, 0.8rem)'
    },
    font: {
        text: 'Mulish'
    },
    borderRadii: {
        subtle: '4px'
    }
}

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: box-border;
    }

    html, body {
        width: 100%;
        height: 100vh;
        font-size: ${({theme}) => theme.fontSizes.sm};
        background: ${({theme}) => theme.colors.bg};
        font-family: ${({theme}) => theme.font.text};
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        all: unset;
    }

    @media (max-width: 480px) {
        .nav-elements {
            display: none;
        }
    }
`