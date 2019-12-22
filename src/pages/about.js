import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import satzung from '../downloads/Satzung.pdf'
import mitgliedsantrag from '../downloads/Mitgliedsantrag.pdf'

const AboutPage = () => (
  <Layout>
    <SEO title="Über uns" />
    <h1>Über uns</h1>

    <p>
        Das Heidelberger Institut für angewandte Informatik e.V. (HIAI) ist eine gemeinnützige Forschungseinrichtung die im September 2003 ursprünglich
        als An-Institut der Fakultät für Informatik der Fachhochschule Heidelberg (jetzt SRH Hochschule Heidelberg) gegründet wurde. Seit 2014 ist das HIAI eine
        eigenständige Einrichtung und Kooperationspartner der Fakultät für Informatik der SRH Hochschule Heidelberg. Das Institut dient der Forschung und
        forschungsrelevanten Praxis im Themenfeld der angewandten Informatik.
    </p>

    <p>
        Wir erfüllen unseren Satzungszweck durch verschiedene Maßnahmen, wie die Durchführung von IT Projekten mit forschungsrelevantem Charakter für Unternehmen
        und Organisationen, oder die praxisorientierte Forschung in den Bereichen des Software-Engineerings mit Schwerpunkt Medien- und Wirtschaftsinformatik.
        Das HIAI bietet daher auch für Studierende eine optimale Umgebung für die praxisnahe Arbeit.
    </p>

    <p>
        Softwaretechnologie ist unbestritten eine der Schlüsseltechnologien der heutigen industrialisierten und global vernetzen Welt. Hohe Qualitätsstandards
        auf der einen Seite, Zeit- und Kostendruck auf der anderen Seite erfordern moderne und effiziente Entwicklungsmethoden und Softwarelösungen, die auf heutige
        Anforderungen angepasst sind und den Stand von Wissenschaft und Forschung wiederspiegeln.
    </p>

    <p>Unsere <a href={satzung}>Satzung</a> können Sie sich <a href={satzung}>hier</a> herunterladen.</p>

    <p><a href={mitgliedsantrag}>Antrag auf Mitgliedschaft</a> – wir freuen uns auf Ihre Mitgliedschaft.</p>
  </Layout>
)

export default AboutPage