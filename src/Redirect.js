export function Redirect(props) {
  return function(state, actions) {
    var location = state.location;
    history.replaceState(
      Object.assign(history.state || {}, {
        prevLocation: props.from || location.pathname
      }),
      "",
      props.to
    );
    dispatchEvent(new CustomEvent("pushstate", { detail: location.pathname }));
  };
}
