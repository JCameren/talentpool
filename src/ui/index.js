import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    width: ${({ large }) => large ? '80%' : null};
    width: ${({ medium }) => medium ? '60%' : null};
    width: ${({ small }) => small ? '50%' : null};

    @media (max-width: 800px) {
        width: ${({ large }) => large ? '85%' : null};
        width: ${({ medium }) => medium ? '70%' : null};
        width: ${({ small }) => small ? '70%' : null};
    }

    @media (max-width: 400px) {
        width: ${({ large }) => large ? '90%' : null};
        width: ${({ medium }) => medium ? '90%' : null};
        width: ${({ small }) => small ? '90%' : null};
    }
`

export const Flex = styled.div`
    display: flex;
    align-items: ${({ alCenter }) => alCenter ? 'center' : null};
    align-items: ${({ flexStart }) => flexStart ? 'flex-start' : null};
    align-items: ${({ flexEnd }) => flexEnd ? 'flex-end' : null};
    flex-wrap: wrap;
    row-gap: ${({ largeRowGap }) => largeRowGap ? '3rem' : null};
    justify-content: ${({ spaceBetween }) => spaceBetween ? 'space-between': null};
    justify-content: ${({ jcCenter }) => jcCenter ? 'center': null};
    flex-direction: ${({ column }) => column ? 'column' : 'row'};
`

export const Grid = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    /* max-height: 15rem; */

    @media (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 700) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

export const Button = styled.a`
    max-width: ${({ wide }) => wide ? '100%' : '320px'};
    border-radius: ${({ theme }) => theme.borderRadii.subtle};
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.bg};
    font-weight: 700;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary[0]};
    transition: all 250ms ease-in-out;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.25rem;
    padding: 0.75rem;
    color: ${({ secondary }) => secondary ? '#665df5' : null};
    background-color: ${({ secondary }) => secondary ? '#a0d8ef' : null};
    cursor: ${({ secondary }) => secondary ? 'default' : null} !important;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary[1]};
        background-color: ${({ secondary }) => secondary ? '#a0d8ef' : null};

    }
`

export const Card = styled.section`
    border-radius: ${({ theme }) => theme.borderRadii.subtle};
    border: thin solid ${({ theme }) => theme.colors.muted};
    padding: 0.5rem;
    transition: all 250ms ease-in-out;
    cursor: pointer;
    min-height: 11rem;
    /* max-height: 15rem; */

    &:hover {
        border-color: ${({ theme }) => theme.colors.primary[0]};
    }
`

export const Spacer = styled.div`
    padding: ${({ large }) => large ? '6rem' : null };
    padding: ${({ medium }) => medium ? '3rem' : null };
    padding: ${({ small }) => small ? '1rem' : null };
    padding: ${({ extraSmall }) => extraSmall ? '0.5rem' : null };

    @media (max-width: 800px)  {
        padding: ${({ large }) => large ? '3rem' : null};
    }

    @media (max-width: 480px)  {
        padding: ${({ large }) => large ? '2.5rem' : null};
        padding: ${({ medium }) => medium ? '1rem' : null};
    }
`

export const Text = styled.p`
    text-align: ${({ center }) => center ? 'center' : null};
    font-weight: ${({ bold }) => bold ? 'bold' : null};
`

export const BigText = styled(Text)`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.text[1]};
    font-weight: bold;
`

export const MediumText = styled(Text)`
    font-size: ${({ theme }) => theme.fontSizes.md}; 
    color: ${({ theme }) => theme.colors.text[0]};
    font-weight: bold;
`

export const SmallText = styled(Text)`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text[0]};
` 

export const XSText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.text[0]};
    font-weight: 100;
`