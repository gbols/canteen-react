import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import menuCreators from "../actions/menuCreators";

import PrimaryLayout from "./PrimaryLayout";

const mapStateToProps = state => ({
  ...state.fetchMenu
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(menuCreators, dispatch);

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimaryLayout);

export default Main;
export { mapStateToProps, mapDispatchToProps };
