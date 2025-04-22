const data = {
  "contents": [
    {
      "id": 1,
      "title": "Physical Science",
      "level": "Grade 11",
      "description": "Dive into the fascinating world of physics and chemistry. This course covers mechanics, waves, chemical reactions, and more to prepare you for Grade 12 and beyond.",
      "color": "#FFB785",
      "completion": 30,
      "icon": "🧪"
    },
    {
      "id": 3,
      "title": "Life Science",
      "level": "Grade 12",
      "description": "Explore the intricate details of biology, from genetics to human physiology. This course prepares you for further studies in the life sciences with a focus on cellular biology, ecology, and evolution.",
      "color": "#A0D6A0",
      "completion": 50,
      "icon": "🧬"
    },
    {
      "id": 4,
      "title": "Mathematics",
      "description": "Build a strong foundation in algebra, geometry, and trigonometry to excel in high school mathematics.",
      "color": "#3498DB",
      "completion": 25,
      "icon": "➗",
      "level": 10
    }
  ]
};

export async function GET(request: Request) {

 const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (id) {
    const courseId = parseInt(id);
    const course = data.contents.find(c => c.id === courseId);
    if (course) {
      return Response.json(course);
    } else {
      return new Response("Course not found", { status: 404 });
    }
  }

  return Response.json(data);
}
