

export function useDatabase() {

    return {
      getCourses: async () => {
          async function fetchCourses() {
            const response = await fetch('/api/courses')
            const data = await response.json()
            return data
            }
            const content = await fetchCourses();
        return content.contents;
                },
      getCourse: async (courseId: string | string[]) => {
          async function fetchCourse() {
            const response = await fetch(`/api/courses?id=${courseId}`)
            const data = await response.json()
            return data
          }
          const content = await fetchCourse();
          return content;
      },          
      getLessons: async (courseId: string | string[]) => {
          async function fetchLessons() {
            const response = await fetch(`/api/lessons?id=${courseId}`)
            const data = await response.json()
            return data
          }
          const content = await fetchLessons();
          return content.contents;
      },
      getLesson: async (lessonId: string | string[], courseId: string | string[]) => {
          async function fetchLesson() {
            const response = await fetch(`/api/lessons?id=${courseId}&lessonId=${lessonId}`)
            const data = await response.json()
            return data
          }
          const content = await fetchLesson();
          return content.contents;
      },
      getFlashcards: async (lessonId: string | string[], courseId: string | string[]) => {
          async function fetchLesson() {
            const response = await fetch(`/api/flashcards?lessonId=${lessonId}&courseId=${courseId}`)
            const data = await response.json()
            return data
          }
          const content = await fetchLesson();
          console.log("Fetching flashcards for lessonId:", lessonId, "and courseId:", courseId, content);
          return content.data;
      },
      getInitialData: async (courseIds: string) => {
          async function fetchInitialData() {
            const flashcards = await fetch(`/api/initialFlashcards?courses=${courseIds}`)
            const lessons = await fetch(`/api/initialLessons?courses=${courseIds}`)
            
            const lessonsData = await lessons.json()
            const flashcardsData = await flashcards.json()
            console.log("Initial data fetched:", flashcardsData, lessonsData);
            return {flashcards: flashcardsData, lessons: lessonsData}
          }
          const content = await fetchInitialData();
          return content;
      },
    };
}