//    Complete this interface after learning typescript
//    Create a separate types directory afterwards when we are applying a legit database

   interface Questions {
    questionType: "multiple_choice" | "match_opposite" | "one_word";
    question: string;

   }

   export const questions = [
        {
            questionType: "multiple_choice",
            question: "What does paracetamol do",
            options: ["Antivirus", "Painkiller", "Beta Blocker", "Loop Diuretic"],
            answer: 1, 
            understanding: 0,
            nextReview: 1
            },
        {
            questionType: "one_word",
            question: "What does paracetamol do",
            answer: "painkiller", 
            understanding: 0,
            nextReview: 1
            },
        {
            questionType: "match_opposite",
            questions: ["Metformin", "Retonivir", "Amlodipine", "Paracetamol"],
            options: ["Antivirus", "Painkiller", "Beta Blocker", "Antidiabetic"],
            answer: [3,  0, 2, 1], 
            understanding: 0,
            nextReview: 1
            },
            {
                questionType: "multiple_choice",
                question: "What is the main function of epinephrine?",       
                options: ["Regulates Blood Pressure", "Relaxes Smooth Muscle", "Increases Heart Rate and Constriction of Blood Vessels", "Stimulates Insulin Production"],
                answer: 2,
                understanding: 0,
                nextReview: 1
            },
            {
                questionType: "one_word",
                question: "What is the most common side effect of amoxicillin?",
                answer: "diarrhea",
                understanding: 0,
                nextReview: 1
            },
            {
                questionType: "match_opposite",
                questions: ["Ciprofloxacin", "Gentamicin", "Azithromycin", "Cephalexin"],
                options: ["Antiviral", "Antibiotic", "Antifungal", "Antimicrobial"],
                answer: [1, 3, 2, 0],
                understanding: 0,
                nextReview: 1
            },
            {
                questionType: "multiple_choice",
                question: "What is the mechanism of action of warfarin?",
                options: ["Blocks Thrombin Generation", "Activates Prothrombinase", "Inhibits Vitamin K Receptor",
        "Increases Antithrombin III"],
                answer: 0,
                understanding: 0,
                nextReview: 1
            },
            {
                questionType: "one_word",
                question: "What is the indication for hydrocortisone?",
                answer: "adrenalinsuppression",
                understanding: 0,
                nextReview: 1
            },
    ]