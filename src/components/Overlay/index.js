import styled from "styled-components";

const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    z-index: 5;
    display: grid;
    align-items: center;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(6px);
`

export default Overlay