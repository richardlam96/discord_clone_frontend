import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Chatbox from '../containers/Chatbox';

import Blank from '../containers/Blank';

class MainContentComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {
			channelsById,
			match: { params },
		} = this.props;

		let channel = channelsById[params.channelId];
		let channelName = channel ? channel.name : 'Channel';
		return ( 
			<div className="main-content-component">
				<div className="main-content-header">
					<p>{channelName}</p>
				</div>
				<Switch>
					<Route exact path="/channels/:serverId" render={Blank} />
					<Route exact path="/channels/:serverId/:channelId" render={Chatbox} />
				</Switch>
			</div>
		);
	}
}
		

export default MainContentComponent;
