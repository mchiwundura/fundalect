

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
      getCourse: async (courseId: number) => {
          async function fetchCourse() {
            const response = await fetch(`/api/course?id=${courseId}`)
            const data = await response.json()
            return data
          }
          const content = await fetchCourse();
          return content;
      },          
      getLessons: async (courseId: number) => {
          async function fetchLessons() {
            const response = await fetch(`/api/lessons?id=${courseId}`)
            const data = await response.json()
            return data
          }
          const content = await fetchLessons();
          return content.contents;
      },
      getLesson: async (lessonId: number, courseId: number) => {
          async function fetchLesson() {
            const response = await fetch(`/api/lesson?id=${lessonId}&courseId=${courseId}`)
            const data = await response.json()
            return data
          }
          const content = await fetchLesson();
          return content.contents;
      },
      getFlashcards: async (lessonId: number, courseId: number) => {
          async function fetchLesson() {
            const response = await fetch(`/api/flashcards?id=${lessonId}&courseId=${courseId}`)
            const data = await response.json()
            return data
          }
          const content = await fetchLesson();
          return content.contents;
      },
    };
}