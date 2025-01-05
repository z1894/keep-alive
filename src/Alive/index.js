import { useCallback, useReducer } from "react";
import Context from "./Context";

function reducer(state, action) {

  const { type, payload } = action;
  const { id, reactElement, nodes } = payload;
  switch (type) {
    case "CREATING":
      return {
        ...state,
        [id]: {
          id,
          reactElement,
        },
      };
    case "CREATED":
      return {
        ...state,
        [id]: {
          ...state[id],
          nodes,
        },
      };
    default:
      return state;
  }
}

function Alive(props) {
  const [state, dispatch] = useReducer(reducer, {});

  const setState = useCallback(
    ({ reactElement, id }) => {
      if (!state[id]) {
        dispatch({
          type: "CREATING",
          payload: { id, reactElement },
        });
      }
    },
    [state]
  );

  return (
    <Context.Provider value={{ state, setState, dispatch }}>
      <div>

        {props.children}

        {
          Object.values(state).map(({ id, reactElement }) => (
            <div key={id}
              ref={node => {
                if (node && !state[id].nodes) {
                  dispatch({
                    type: "CREATED",
                    payload: { id, nodes: [...node.childNodes] }
                  })
                }
              }}
            >
              {reactElement}
            </div>
          ))

        }

      </div >
    </Context.Provider >
  );
}

export default Alive;
