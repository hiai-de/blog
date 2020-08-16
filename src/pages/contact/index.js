import React, { useState } from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Form, Button } from 'react-bootstrap'

const AboutPage = () => {
  const [ agreedToDataprotection, setAgreedToDataprotection ] = useState(false)
  const handleClick = () => setAgreedToDataprotection(!agreedToDataprotection)

  const DataprotectionLabel = () => (
    <React.Fragment>
      Ich habe der <a href="/dataprotection" target="_blank">Datenschutzerklärung</a> zugestimmt
    </React.Fragment>
  )

  return (
    <Layout>
      <SEO title="Kontaktformular" />
    
      <h1>Kontaktformular</h1>

      <p>
        Sie haben eine Anfrage, einen Hinweis oder eine sonstige Nachricht an uns? Bitte nutzen Sie unser Kontaktformular.
      </p>

      <h2>Formular</h2>

      <Form name="Contact Form" method="POST" data-netlify="true" action="/contact/thank-you">
        <input type="hidden" name="form-name" value="Contact Form" />
      
        <Form.Group>
          <Form.Label>Ihre E-Mail-Adresse</Form.Label>
          <Form.Control type="email" name="email" placeholder="E-Mail-Adresse eingeben" required={true} />
          <Form.Text className="text-muted">
            Wir verwenden Ihre E-Mail-Adresse ausschließlich zur Kontaktaufnahme mit Ihnen.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Ihre Nachricht</Form.Label>
          <Form.Control as="textarea" rows={3} required={true} name="message" />
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label={<DataprotectionLabel />}
            id="agreed"
            checked={agreedToDataprotection}
            onChange={handleClick}
          />
        </Form.Group>
      
        <Button variant="primary" type="submit" disabled={!agreedToDataprotection}>
          Absenden
        </Button>
      </Form>

    </Layout>
  )
}

export default AboutPage