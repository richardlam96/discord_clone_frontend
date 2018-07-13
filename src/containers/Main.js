import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainPage from '../components/MainPage';


const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
	};
}

	

export default withRouter(connect(
	mapStateToProps,
	null
)(MainPage));


