export function Redirect(props) {
  return function(state, actions) {
    var location = state.location;
    history.replaceState(props.from || location.pathname, "", props.to);
    dispatchEvent(new CustomEvent("pushstate", { detail: location.pathname }));
  };
}
