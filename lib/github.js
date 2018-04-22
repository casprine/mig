import axios from 'axios'
import MarkdownIt from 'markdown-it'

export async function getMadeInGhanaReadme () {
  const md = new MarkdownIt()

  const { data } = await axios.get('https://cdn.rawgit.com/Casprine/made-in-ghana/a6d00a0a/README.md')

  const res = md.parse(data)

  const filteredRes = res
    .map(x => x.content)
    .filter(x => !!x && !x.includes('[A](#A)') && !x.includes('<a name='))

  return filteredRes.map(x => md.render(x))
}
