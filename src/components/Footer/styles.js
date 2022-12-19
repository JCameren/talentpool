import styled from "styled-components";

export const FooterWrapper = styled.footer`
    position: fixed;
    padding: 0.65rem;
    height: max-content;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: thin solid ${({ theme }) => theme.colors.muted};
`