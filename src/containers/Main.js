import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainPage from '../components/MainPage';


const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
	};
}

const mapDispatchToProps = dispatch => {
  return {
  };
}


export default withRouter(connect(
	mapStateToProps,
  mapDispatchToProps,
)(MainPage));


