import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createUserServer, deleteUserServer } from '../store/actions/server';
import { indexUserServers } from '../store/actions/server';
import { indexUserChannels } from '../store/actions/channel';

import ServerNavComponent from '../components/ServerNavComponent';


const mapStateToProps = state => {
	return { 
		currentUser: state.currentUser,
		serversById: state.currentUserServers.serversById,
		serverIds: state.currentUserServers.serverIds,
		state,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		createServer: (userId, serverName) => dispatch(createUserServer(userId, serverName)),
		deleteServer: (ownerId, serverId) => dispatch(deleteUserServer(ownerId, serverId)),
		indexServers: (userId) => dispatch(indexUserServers(userId)),
		indexChannels: (userId) => dispatch(indexUserChannels(userId)),
	};
}


export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(ServerNavComponent));
