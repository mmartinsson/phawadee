import React from "react";
import { Router, Route, browserHistory} from "react-router";
import { createApp } from "@phenomic/preset-react-app/lib/client";

const Home = () => (
	<div>
		<p>Hello HUNGRY people!</p>
	</div>
);

export default createApp(() => (
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
	</Router>
));