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

if (id === null) {
  return Response.json({ error: 'Invalid id parameter' }, { status: 400 });
}

const lessons = fs.readdirSync(`./material/${id}`, {
    withFileTypes: true
  });
  
  console.log(lessons)
const contents = []

for (let index = 0; index < lessons.length - 1 ; index++) {
const {data, content} = getMarkdownContent(`./material/${id}/${lessons[index].name}`)
contents.push({data, content})

}


  return Response.json({ contents });
}