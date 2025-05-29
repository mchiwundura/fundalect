import flatFlashcards from '../../db/flatFlashcards.json'


export async function GET(request: Request) {

  const url = new URL(request.url);

   // Get course and lesson IDs from query parameter
  const courseId = url.searchParams.get("courseId"); 
  const lessonId = url.searchParams.get("lessonId");

  // Convert courseId and lessonId to numbers for comparison
  const courseIdNum = courseId !== null ? Number(courseId) : null;
  const lessonIdNum = lessonId !== null ? Number(lessonId) : null;

      // Filter by courseId and lessonId
  const data = flatFlashcards.contents.filter(flashcard =>
    courseIdNum === flashcard.courseId && lessonIdNum === flashcard.lessonId
  );


  return Response.json({ data });
}