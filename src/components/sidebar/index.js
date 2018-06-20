import React, { Component } from "react";
import { Image } from "react-native";

import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

import styles from "./styles";

const drawerCover = require("../../../img/drawer-cover.png");

const drawerImage = require("../../../img/logo-kitchen-sink.png");

const datas = [
	{
		name: "Home",
		route: "Home",
		icon: "phone-portrait",
		bg: "#C5F442",
	},
  {
    name: "ModalBox",
    route: "ModalBox",
    icon: "phone-portrait",
    bg: "#00BFFF",
    types: 5
  },
];

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={styles.container}>
					<View style={styles.drawerCover}>
            <Image source={drawerCover} style={styles.backgroundCover} />
            <Image square style={styles.drawerImage} source={drawerImage} />
          </View>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={styles.icon} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} Types`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

export default SideBar;
