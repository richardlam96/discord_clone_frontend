import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addFriend } from '../store/actions/user';
import FriendsStatusComponent from '../components/FriendsStatusComponent';


const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		usersById: state.users.usersById,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		addFriend: (userId, friendId) => dispatch(addFriend(userId, friendId)),
	};
}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsStatusComponent));
