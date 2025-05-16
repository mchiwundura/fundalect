import { useEffect, useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, ScrollView, Platform, useWindowDimensions, View } from "react-native";
import StreakTracker from "@/components/StreakTracker";
import FlashcardDeck from "@/components/FlashcardDeck";
import Background from "@/components/Background";
import QuizActivity from "@/components/QuizActivity";
import ActivityCard from "@/components/ui/ActivityCard";
import ReportStats from "@/components/ReportStats";
import ProfileIcon from "@/components/ui/ProfileIcon";



export default function Home() {
const {width} = useWindowDimensions();
const [large, setLarge] = useState(width > 600);

useEffect(() => {
 setLarge(width > 600);
}, [width])

 const activities = [
    {
        "id": 1,
        "title": "Central Nervous System",
        "icon": "😰",
        "completion": 55,
        "type": "Quiz"
    },
    {
        "id": 2,
        "title": "Colloidal Systems",
        "icon": "🧴",
        "completion": 35,
        "type": "Quiz"
    },
    {
        "id": 3,
        "title": "Arrays",
        "icon": "🧑‍💻",
        "completion": 55,
        "type": "Quiz"
    },
    {
        "id": 4,
        "title": "Novel Dosage Forms",
        "icon": "💊",
        "completion": 21,
        "type": "Quiz"
    },
    {
        "id": 5,
        "title": "Drug Delivery Systems",
        "icon": "🧪",
        "completion": 40,
        "type": "Quiz"
    },
    {
        "id": 6,
        "title": "Pharmacokinetics Basics",
        "icon": "📉",
        "completion": 30,
        "type": "Quiz"
    },
    {
        "id": 7,
        "title": "Biopharmaceutics",
        "icon": "🧬",
        "completion": 25,
        "type": "Quiz"
    }
]

    return (
        <Background>
<View style={[styles.container, {flexDirection: large? "row" : "column", padding: large? 50: 0} ]}>

        <ScrollView  style={[{ padding: 32, paddingLeft: large ? 110 : 32 }]}>
            <ThemedText style={{marginVertical: 12}} type="subtitle">Welcome Back</ThemedText>
            <ThemedText style={{marginBottom: 12}} type="title">Munyaradzi</ThemedText>
            {!large && <StreakTracker/>}
            <ThemedText style={styles.sectionTitle} type="subtitle">Jump Back In Some Flashcards</ThemedText>
            <ScrollView horizontal={large} >
            <FlashcardDeck title={"Reproduction"} color={'rgb(160, 214, 160)'} link={'/course/1/lesson/0/flashcards'} completion={50} courseTitle={'Natural Science'}/>
            <FlashcardDeck title={"Reproduction"} color={'rgb(160, 214, 160)'} link={'/course/1/lesson/0/flashcards'} completion={50} courseTitle={'Natural Science'}/>
            <FlashcardDeck title={"Reproduction"} color={'rgb(160, 214, 160)'} link={'/course/1/lesson/0/flashcards'} completion={50} courseTitle={'Natural Science'}/>
            <FlashcardDeck title={"Reproduction"} color={'rgb(160, 214, 160)'} link={'/course/1/lesson/0/flashcards'} completion={50} courseTitle={'Natural Science'}/>
            <FlashcardDeck title={"Reproduction"} color={'rgb(160, 214, 160)'} link={'/course/1/lesson/0/flashcards'} completion={50} courseTitle={'Natural Science'}/>
            <FlashcardDeck title={"Reproduction"} color={'rgb(160, 214, 160)'} link={'/course/1/lesson/0/flashcards'} completion={50} courseTitle={'Natural Science'}/>
            </ScrollView>
            

            <ThemedText style={styles.sectionTitle} type="subtitle">Take A Quiz</ThemedText>
            <ScrollView >
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

        {activities && activities.map((x ,y)=> {
            return <ActivityCard key={y} activity={x}/>
        })}
        </View>
            </ScrollView>
        </ScrollView>
        {large && 
        <View style={styles.sidebar}>
        <ProfileIcon />
        <ReportStats minutes={22} flashcards={14} tests={11}/>
        <View style={{marginVertical: 10}}/>    
        
            <ThemedText style={styles.sectionTitle} type="subtitle">Your Streak</ThemedText>
        <StreakTracker/>

            <ThemedText style={styles.sectionTitle} type="subtitle">Upcomming Events</ThemedText>
        <ScrollView>
     
            <QuizActivity title={"Central Nervous System"} color={"green"} completion={55} type={"Flashcards"}/>
            <QuizActivity title={"Colloidal Systems"} color={"green"} completion={35} type={"Quiz"}/>
            <QuizActivity title={"Arrays"}  color={"green"} completion={55} type={"Flashcards"}/>
            <QuizActivity title={"Novel Dosage Forms"} color={"green"} completion={21} type={"Lesson"}/>
            <QuizActivity title={"Drug Delivery Systems"} color={"green"} completion={40} type={"Lesson"}/>
            <QuizActivity title={"Pharmacokinetics Basics"} color={"green"} completion={30} type={"Lesson"}/>
            <QuizActivity title={"Biopharmaceutics"} color={"green"} completion={25} type={"Lesson"}/>
        </ScrollView>
        </View>
        }
</View>
        </Background>
    );
}

const styles = StyleSheet.create({
    statsContainer: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
    },
    sectionTitle: {
        marginVertical: 10
    },
    container: {
        display: "flex",
    },
    sidebar: {
        width: "20%",
        padding: 32,
        paddingTop: 50,
    }
});
