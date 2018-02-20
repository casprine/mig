import cheerio from 'cheerio'
import uuidv4 from 'uuid/v4'

export default function parseHTMLToJSON (html) {
  const $ = cheerio.load(html)

  let description = $('p').text()
  const title = $('a').first().text()
  const link = $('a').first().attr('href')
  const name = $('a').last().text()
  const handle = $('a').last().attr('href')

  description = description.substring(0, description.indexOf('By ')).replace('**', '').trim()

  return {
    id: uuidv4(),
    title,
    description,
    link,
    author: {
      name,
      handle
    }
  }
}
