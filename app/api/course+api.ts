

var fs = require('fs');
var matter = require('gray-matter');

export function getMarkdownFiles() {

  const subPaths = fs.readdirSync("./material", { 
    withFileTypes: true
  }); 
  const directories = subPaths.filter((dirent: any) => dirent.isDirectory())
  const filePaths = []
  for (let index = 0; index < directories.length; index++) {  
    filePaths.push(`./material/${directories[index].name}/index.md`)  
  }
  return {filePaths, directories}
}

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

const response = getMarkdownFiles()
const filePaths = response.filePaths
const content = getMarkdownContent(filePaths[parseInt(id) - 1])


  return Response.json({ content });
}