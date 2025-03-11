import getQuestions from "@/hooks/getQuestions"

describe("flashcards Session", () => {
    it("Has Flashcards in the beginning", ()=> {
        expect(getQuestions(1).length).toBeGreaterThan(0)
    })
})


