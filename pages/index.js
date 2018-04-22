import Head from 'next/head'
import { getMadeInGhanaReadme } from '../lib/github'
import parseHTMLToJSON from '../lib/parse-html-to-json'
import Projects from '../components/projects'

export default class Index extends React.Component {
  static async getInitialProps () {
    const htmlData = await getMadeInGhanaReadme()
    const jsonData = htmlData.map(data => parseHTMLToJSON(data))
    return {
      projects: jsonData
    }
  }

  render () {
    const {projects} = this.props

    return <div>
      <Head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <meta name='theme-color' content='#000000' />
        <link rel='stylesheet' href='static/css/main.css' />
        {/* <link rel='stylesheet' href='https://cdn.rawgit.com/Casprine/mig/c50d7523/static/css/semantic.min.css'/> */}
        <link rel='stylesheet' href='static/fonts/fonts.css' />
        <link rel='stylesheet' href='https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' />
        <link rel='shortcut icon' href='http://www.devcongress.org/assets/favicon-f5bf27abf028cf45bb89a1ad253eaa4ce7c5a915b22be65b4839ce6714cf9235.ico' />
        <title>Made In Ghana</title>
      </Head>
      <div>
        <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Made In Ghana</h1>
            <div className='intro'>
                    A curated list of awesome tools and projects built by Ghanaians .
                </div>

            {/* <div className="searchBox">
              <input type="text" placeholder="Search"/>
                <button> Go </button>
              </div> */}
   
          </header>
          <div className='projects'>
            <h1> Explore .</h1>
              <div className='row'>
                <Projects projects={projects} />
              </div>
            </div>
        </div>
      </div>
    </div>
  }
}
