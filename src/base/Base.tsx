import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Store from "../stores/index";

export default class Base<P = {}, S = {}> extends React.Component<RouteComponentProps & P , S> {
	get store() {
		return (this.props as any).store as Store;
	}
	constructor(props: any) {
		super(props);
	}
}
