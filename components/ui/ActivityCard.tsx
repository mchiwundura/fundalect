import {
	StyleSheet,
	Text,
	TouchableOpacity,
	useColorScheme,
	View,
} from "react-native";
import { ThemedView } from "../ThemedViewOld";
import { Activity } from "../../types/ui/ActivityCard";
import { ThemedText } from "../ThemedText";
import IconTextButton from "./IconTextButton";
import { useNavigation } from "expo-router";

export default function ActivityCard({ activity }: { activity: Activity }) {
	const navigation = useNavigation<any>();
	const colorScheme = useColorScheme();

	const colorMap = {
		Flashcards: {
			textColor: "rgba(128, 184, 147, 1)", // Green
			backgroundColor: "rgba(128, 184, 147, 0.2)",
		},
		Quiz: {
			textColor: "rgba(149, 132, 255, 1)", // Purple
			backgroundColor: "rgba(149, 132, 255, 0.2)",
		},
		Lesson: {
			textColor: "rgba(100, 170, 255, 1)", // Blue (New color)
			backgroundColor: "rgba(100, 170, 255, 0.2)",
		},
	};

	const activityColors = colorMap[activity.type] || colorMap.Flashcards;

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("flashcards", { activity })}
			style={[
				styles.card,
				{
					backgroundColor:
						colorScheme === "light"
							? "rgba(255, 255, 255, 1)"
							: "rgba(255, 255, 255, 0.05)",
					boxShadow:
						colorScheme === "light"
							? "0 4px 4px rgba(0, 0, 0, 0.25)"
							: "0 0 0 rgba(0, 0, 0, 0.1)",
				},
			]}
		>
			<ThemedView
				style={[
					styles.icon,
					{
						backgroundColor:
							activity.type === "Flashcards"
								? "rgba(128, 184, 147, 0.2)"
								: "rgba(149, 132, 255, 0.2 )",
						borderColor:
							activity.type === "Flashcards"
								? "rgba(128, 184, 147, 1)"
								: "rgba(149, 132, 255, 1 )",
					},
				]}
			>
				<Text style={styles.iconText}>{activity.icon}</Text>
			</ThemedView>

			<View style={styles.cardInfo}>
				{/* The title container */}
				<ThemedText type='defaultSemiBold'>{activity.title}</ThemedText>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<ThemedText type='subtle'>
						Completion: {activity.completion}%
					</ThemedText>
					<IconTextButton
						title={activity.type}
						textColor={activityColors.textColor}
						color={activityColors.backgroundColor}
						icon={activity.type === "Flashcards" ? "bolt" : "doc.plaintext"}
						onPress={() => navigation.navigate("flashcards", { activity })}
					/>
				</View>

				{/* Progress Bar */}
				<ThemedView style={styles.progressBar}>
					<ThemedView
						style={[styles.progress, { width: `${activity.completion}%` }]}
					></ThemedView>
				</ThemedView>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		padding: 10,
		borderRadius: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 5,
		width: "100%",
		maxWidth: 400,
	},
	cardInfo: {
		width: "70%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	icon: {
		width: 75,
		height: 75,
		borderRadius: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
	},
	iconText: {
		fontSize: 30,
	},
	progressBar: {
		height: 10,
		width: "100%",
		backgroundColor: "rgba(255, 255, 255, 0.1)",
		borderRadius: 10,
		position: "relative",
	},
	progress: {
		height: "100%",
		backgroundColor: "#FFFFFF",
		borderRadius: 10,
		opacity: 0.8,
	},
});
