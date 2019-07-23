import styled,{keyframes} from 'styled-components';

const ProgressLeftToRight=(percent)=>keyframes`
        0%{
                width: 0%;
            }
            100%{
                width: ${percent}%;
            }
        }
`;
export const Filler=styled.div`
background: linear-gradient(270deg, #37DB77 0%, #B8FEB8 100%);
                height:100%;
                width:0;
                border-radius:10px;
                animation: ${props=>ProgressLeftToRight(props.percent)} 1.5s ease-in-out .5s forwards;
                
`