import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import menuCreators from "../actions/menuCreators";
import loginCreators from "../actions/loginCreators";
import signupCreators from "../actions/signupCreators";

import PrimaryLayout from "./PrimaryLayout";

const mapStateToProps = state => ({
  ...state.fetchMenu,
  ...state.login,
  ...state.signUp
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...menuCreators, ...loginCreators, ...signupCreators },
    dispatch
  );

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrimaryLayout);

export default Main;
export { mapStateToProps, mapDispatchToProps };
