import styled from "styled-components";

export const NotifWrapper = styled.div`
    top: 50%;
    left: 50%;
    position: absolute;
    bottom: 10px;
    max-height: max-content;
    transform: translate(-50%, -50%);
    padding: 0.75rem;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 100;
    border: thin solid ${({ status }) => status === 'success' ? '#115C39' : null};
    border: thin solid ${({ status }) => status === 'error' ? '@cc0000' : null};
    border: thin solid ${({ status }) => status === 'pending' ? 'darkcyan' : null};
    background-color:  ${({ status }) => status === 'success' ? '#21B26F' : null};
    background-color:  ${({ status }) => status === 'error' ? '#FFCCCC' : null};
    background-color:  ${({ status }) => status === 'pending' ? 'cyan' : null};
`