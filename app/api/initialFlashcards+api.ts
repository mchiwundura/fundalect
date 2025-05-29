import flatFlashcards from '../../db/flatFlashcards.json'


export async function GET(request: Request) {

  const url = new URL(request.url);

   // Get comma-separated course IDs
  const courseParam = url.searchParams.get("courses"); 

  // Convert to number[] (e.g. "1,2" → [1, 2])
  const courseIds = courseParam
    ? courseParam.split(',').map(id => parseInt(id.trim(), 10)).filter(Boolean)
    : [];

      // Filter by courseId
  const userCards = flatFlashcards.contents.filter(flashcard =>
    courseIds.includes(flashcard.courseId)
  );

  // Filter to show only first deck for each courseId
  const data = userCards.filter( flashcard =>
    flashcard.lessonId === 1 // Assuming lessonId 1 is the first deck
  )

  return Response.json( data );
}
