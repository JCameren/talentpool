import styled from "styled-components";

export const NavHeader = styled.header`
    width: 100%;
    position: fixed;
    border-bottom: thin solid ${({ theme }) => theme.colors.muted};
    padding: 0.65rem;
    background-color: ${({ theme }) => theme.colors.bg};
`

export const Logo = styled.div`
    img {
        object-fit: contain;
        min-width: 2rem;
        max-width: 4rem;
    }

    @media (max-width: 480px) {
        ul {
            display: none;
        } 
    }
`

export const NavLink = styled.a`
    margin-right: 3rem;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    transition: all 250ms ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.colors.primary[0]};
    }

    .active {
        font-weight: 700 !important;
        color: ${({ theme }) => theme.colors.primary[0]} !important;
    }
`

export const MobileNav = styled.nav`
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    border-radius: ${({ theme }) => theme.borderRadii.subtle};
    background-color: ${({ theme }) => theme.colors.fg};
    z-index: 2;
`

export const MobileNavBtn = styled.button`
    all: unset;
    display: none;
    color: ${({ theme }) => theme.colors.primary[0]};
    font-size: ${({ theme }) => theme.fontSizes.md};
    transition: all 250ms ease-in-out;
    padding: 1rem;
    border-radius: ${({ theme }) => theme.borderRadii.subtle};

    &:hover {
        color: ${({ theme }) => theme.colors.primary[1]};
        background-color: ${({ theme }) => theme.colors.fg};
    }

    @media (max-width: 480px) {
        display: block;
    }
`