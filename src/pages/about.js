import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SmileBanner from '../components/smileBanner'
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

    <h2>Neugierig geworden?</h2>
    
    <p>
        Sie sind neugierig auf unsere Projekte und Vorträge geworden? Wir freuen uns immer über neue Mitglieder.<br />
        Einfach den <a href={mitgliedsantrag}>Mitgliedsantrag</a> ausfüllen und per E-Mail oder Post an uns schicken.
    </p>

    <p>
      <ul>
        <li>Unsere <a href={satzung}>Satzung</a> können Sie sich <a href={satzung}>hier</a> herunterladen.</li>
        <li><a href={mitgliedsantrag}>Antrag auf Mitgliedschaft</a> – wir freuen uns auf Sie.</li>
      </ul>
    </p>

    <h2>Unterstützung</h2>

    <p>
      Seit diesem Jahr ist das HIAI offiziell bei Amazon Smile, einem Programm von Amazon zu Unterstützung von Vereinen, gelistet. Wenn Sie über <a href="https://smile.amazon.de/ch/32-489-44076" rel="noreferrer" target="_blank">Amazon Smile</a> einkaufen
      und das &quot;Heidelberger Institut für angewandte Informatik e.V.&quot; als Verein ausgewählt haben, spendet Amazon 0,5 % des Gesamtbetrags an das HIAI.
      Für Sie fallen dabei keine Mehrkosten an, Sie bekommen die gleichen Preise bei Amazon und genießen natürlich den selben Service.
    </p>
    
    <p>
      Nutzen Sie einfach diesen <a href="https://smile.amazon.de/ch/32-489-44076" rel="noreferrer" target="_blank">Link</a> um das HIAI als zu unterstützenden Verein bei Amazon zu hinterlegen.<br />

      Wir freuen uns auch, wenn Sie diesen Link in sozialen Netzwerken, wie <a href="https://www.facebook.com/sharer/sharer.php?u=https://smile.amazon.de/ch/32-489-44076" rel="noreferrer" target="_blank">Facebook</a> oder <a href="https://twitter.com/share?text=Wenn%20Sie%20auf%20smile.amazon.de%20einkaufen,%20reserviert%20Amazon%20Betr%C3%A4ge%20f%C3%BCr%20eine%20soziale%20Organisation%20Ihrer%20Wahl.&url=https://smile.amazon.de/ch/32-489-44076" rel="noreferrer" target="_blank">Twitter</a> teilen.
    </p>

    <SmileBanner />
  </Layout>
)


export default AboutPage