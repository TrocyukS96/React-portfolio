import React from "react";

// If you don't have a version of React that supports
// hooks, you can use a class-based version of this
// component in ProgressProviderUsingClass.js
type ProgressProviderPropsType = {
    valueStart:number
    valueEnd:number
    children:any
}
export const ProgressProvider = (props:ProgressProviderPropsType) => {
    const {valueStart, valueEnd,children} = props
    const [value, setValue] = React.useState(valueStart);
    // React.useEffect(() => {
    //     setValue(valueEnd);
    // }, [valueEnd]);
    setTimeout(()=>{
        setValue(valueEnd);
    },2000)


    return children(value);
};
export default ProgressProvider;