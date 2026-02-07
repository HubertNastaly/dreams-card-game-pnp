import './style.css'
import './SiteHeader.ts'
import './sections/Rules.ts'
import './sections/Intro.ts'
import './sections/Advantages.ts'
import './sections/Download.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <site-header></site-header>
  <main>
    <intro-section></intro-section>
    <advantages-section></advantages-section>
    <rules-section></rules-section>
    <download-section></download-section>
  </main>
`
