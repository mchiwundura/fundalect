var fs = require('fs');
var matter = require('gray-matter');


export function getMarkdownContent(filePath: string) {
  const file = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(file)
  return { data, content }
}

export async function GET(request: Request) {
const url = new URL(request.url)
const id = url.searchParams.get('id')
var courseId = url.searchParams.get('courseId')


if (id === null) {
  return Response.json({ error: 'Invalid id parameter' }, { status: 400 });
}

const lessons = fs.readdirSync(`./material/${courseId}`, {
    withFileTypes: true
  });
  
  console.log(lessons)
const contents = []

const {data, content} = getMarkdownContent(`./material/${courseId}/${lessons[id].name}`)
contents.push({data, content})


  return Response.json({ contents });
}