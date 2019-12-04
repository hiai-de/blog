import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import InvisibleRecaptcha from '../components/invisibleRecaptcha'

const ImprintPage = () => {
  const [verified, setVerified] = useState(false)

  return (
    <Layout>
      <SEO title="Impressum" />

      <h1>Impressum</h1>

      <p>Bei Interesse an einer Zusammenarbeit und/oder an den Ergebnissen der Arbeiten freuen wir uns auf Ihre Kontaktaufnahme!</p>

      <h2>HIAI Blog – Blog des Heidelberger Instituts für angewandte Informatik e.V.</h2>
      <p>ISSN 2191-799X</p>

      <h2>Kontakt</h2>
      <p>
        Heidelberger Institut für angewandte Informatik e.V.<br />
        ℅ SRH Hochschule Heidelberg, Fakultät für Informatik, Mohammed Yass<br />
        Ludwig-Guttmann-Str. 6<br />
        69123 Heidelberg<br />
        <br />
        E-Mail: { verified ? <a href="mailto:contact@hiai.de">contact@hiai.de</a> : '...' }
      </p>

      <h2>Inhaltliche Verantwortung</h2>
      <p>
        Marcell Spies<br />
        Erster Vorsitzender
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Das Heidelberger Institut für angewandte Informatik (HIAI) übernimmt keine Garantie dafür, dass die auf dieser Website
        bereitgestellten Informationen vollständig, richtig und in jedem Fall aktuell sind. Dies gilt auch für alle Links, auf die
        diese Website direkt oder indirekt verweist. Das HIAI ist für den Inhalt einer Seite, die mit einem solchen Link erreicht wird,
        nicht verantwortlich. Das HIAI behält sich das Recht vor, ohne vorherige Ankündigung Änderungen oder Ergänzungen der
        bereitgestellten Informationen vorzunehmen.
      </p>

      <InvisibleRecaptcha onVerified={() => setVerified(true)} />
    </Layout>
  )
}

export default ImprintPage
