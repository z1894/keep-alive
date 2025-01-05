import { useContext, useEffect, useRef } from "react";
import Context from "./Context";

function Transfer(Component, id) {
  //console.log("Transfer ..", id); //,Component);

  function Trans(props) {

    const _ref = useRef(null);
    const { state, setState } = useContext(Context);

    useEffect(() => {
      const s = state[id];
      if (s && s.nodes) {
        s.nodes.forEach((node) => _ref.current.appendChild(node));
      } else {
        setState({ reactElement: <Component {...props} />, id });
      }
    }, [state, setState, props]);

    return (
      <div>
        {/* <Component /> */}
        <div ref={_ref}>Transfer div1</div>
        <div>Transfer div2</div>
      </div>
    );
  }

  return Trans;
}

export default Transfer;
