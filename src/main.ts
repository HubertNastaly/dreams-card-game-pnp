import './style.css'
import './Rules.ts'
import './SiteHeader.ts'
import './Intro.ts'
import './Advantages.ts'
import './Download.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <site-header></site-header>
  <main>
    <intro-section></intro-section>
    <advantages-section></advantages-section>
    <rules-section></rules-section>
    <download-section></download-section>
  </main>
`
