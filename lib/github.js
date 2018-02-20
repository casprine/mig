import axios from 'axios'
import MarkdownIt from 'markdown-it'

export async function getMadeInGhanaReadme () {
  const md = new MarkdownIt()

  const { data } = await axios.get('https://raw.githubusercontent.com/devcongress/made-in-ghana/master/README.md')

  const res = md.parse(data)

  const filteredRes = res
    .map(x => x.content)
    .filter(x => !!x && !x.includes('[A](#A)') && !x.includes('<a name='))

  return filteredRes.map(x => md.render(x))
}
