import { useContext } from "react";
import { myContext } from "../App";

const MainWrapper = () =>{

    const userContext = useContext(myContext);

return(
    
    <div>
        <p> Main Wrapper Name : {userContext.name} </p>
        </div>
)

};
export default MainWrapper