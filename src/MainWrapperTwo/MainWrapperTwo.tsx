import { useContext } from "react";
import {authContext, myContext } from "../App";

const MainWrapperTwo:React.FC<any> = () => {

    const userContext = useContext(myContext);
    const isLoginContext:any=useContext(authContext)

    const content = isLoginContext.isLogin ? (
        <p>MainWrapperTwo {userContext.name}</p>
          ) : (
         <span>is false</span>
          );

    return(

        <div>
            <div>UserContext Name {content}</div>
            <button type = "button" onClick={()=>{isLoginContext.setFun(!isLoginContext.isLogin)}}>ChangeState</button>
        </div>
    )

};
export default MainWrapperTwo