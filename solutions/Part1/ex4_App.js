import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";

const dimension = Dimensions.get("window");

class App extends Component
{

	greeting() {
		const date = new Date();

		let day = date.getDate();
		let month = date.getMonth();
		let time = date.getHours();
		let greeting = (time < 12) ? "Good morning" : "Good evening";
		let months = ["January", "February", "March", "April", "May", "June", "July",
			"August", "September", "October", "November", "December"];
		
		return (
			<View style = { styles.greetingContainer }>
				<Text style = { [styles.textColor, { fontSize: 20 }] }>Hello, User.</Text>
				<Text style = { styles.textColor }>Today is { months[month] } { day }</Text>
			</View>
		);

	}

	render() {
		return (
			<View style = { styles.mainContainer }>
				<View style = { styles.tabBar }>
					<Text style = { styles.tabBarText }>Dashboard</Text>
				</View>
				{ this.greeting() }
				<View>
					<Text style = { styles.textColor }>Leaderboard</Text>
				</View>
				<View>
					<Text style = { styles.textColor }>Events</Text>
				</View>
				<View>
					<Text style = { styles.textColor }>Committees</Text>
				</View>
				<View>
					<Text style = { styles.textColor }>Slack</Text>
				</View>
				<View>
					<Text style = { styles.textColor }>Website</Text>
				</View>
			</View>
		);
	}
}

const styles = {
	tabBar: {
		backgroundColor: "#21252B",
		height: dimension.height * 0.1,
		justifyContent: "center",
		paddingLeft: "10%",
		borderColor: "black",
		borderStyle: "solid",
		borderBottomWidth: 2
	},
	tabBarText: {
		color: "#E0E6ED",
		fontSize: 20,
		fontWeight: "bold"
	},
	mainContainer: {
		backgroundColor: "#0C0B0B",
		flex: 1
	},
	greetingContainer: {
		padding: "5%"
	},
	textColor: {
		color: "#FFF"
	}
}

export default App;