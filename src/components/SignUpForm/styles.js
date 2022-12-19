import styled from "styled-components";

export const Input = styled.input`
    border-radius: ${({ theme }) => theme.borderRadii.subtle};
    outline: none;
    padding: 0.5rem;
    border: thin solid ${({ theme }) => theme.colors.muted};
    caret-color: ${({ theme }) => theme.colors.primary[0]};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.muted};

    &:focus {
        border: thin solid ${({ theme }) => theme.colors.primary[0]} !important;
        color: ${({ theme }) => theme.colors.primary[0]};
    }
`