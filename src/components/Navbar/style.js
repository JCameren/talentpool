import styled from "styled-components";

export const NavHeader = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    padding: 0.65rem;
    background-color: ${({ theme }) => theme.colors.bg};
`

export const Logo = styled.div`
    img {
        object-fit: contain;
        min-width: 2rem;
        max-width: 4.5rem;
    }

    @media (max-width: 480px) {
        ul {
            display: none;
        } 
    }
`

export const NavLink = styled.a`
    margin-right: 3rem;
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
    
`

export const MobileNavBtn = styled.button`
    all: unset;
    /* display: none; */
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