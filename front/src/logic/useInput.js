import { useState } from "react";

const useInput = someVal => {

    const [ val, setVar] = useState(someVal);

    const setter = e => setVar(e.target.value);

    return [val, setter];
}

export default useInput;
