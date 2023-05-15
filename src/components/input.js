import "../styles/input.css"
import styled,{css} from "styled-components/macro"
export default function Input(props){
    const Button=styled.button.attrs(()=>{return {type:"submit"}})`
    background-color:light-blue;
    ${({large})=>
        large && css`
        padding:20px;
        color:white;
        font-size:1.1rem;
        `
    }`
    const Pad=styled.div`
    width:50px;
    color:yellow;
    height:50px;
    background-color:grey;` 

    function handleClick(){
        console.log("clicked")
    }
    
    return <div>
        <Button large>Click Me</Button>
        <Button as="a" href="google.com" >Login</Button>
        <h2 css={`color:red;font-weight:bold`}>Welcome here</h2>
        <Pad ClassName="ewe" onClick={handleClick} as="button">Thats me</Pad>
    </div>
}