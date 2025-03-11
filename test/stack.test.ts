const flashcards = [2, 1]

describe("Cards Stack", () => {
    
    
    it("Has flashcards at the begining", () => {
        const cards = flashcards;

        expect(cards.length).toBe(2)
    });

    it.todo("Moved Failed flashcard to the end");

    it.todo("Removes Passed and mastered flashcard");

    it.todo("Has 0 flashcards at the end");
})