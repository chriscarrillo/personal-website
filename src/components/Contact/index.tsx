import Aos from 'aos'
import styles from 'components/Contact/Contact.module.scss'
import emailjs from 'emailjs-com'
import {ContactFormInputs} from 'models/FormValues'
import React, {useEffect} from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import {FormProvider, useForm} from 'react-hook-form'

/**
 * Contact section.
 * @return React components
 */
export const Contact: React.FC = () => {
  /**
   * Hooks.
   */
  const form = useForm<ContactFormInputs>({mode: 'onBlur', reValidateMode: 'onChange'})

  /**
   * Effects.
   */
  useEffect(() => {
    Aos.init({duration: 800, easing: 'ease-in-sine', once: true})
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (_data: any, event?: React.BaseSyntheticEvent) => {
    if (event) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID ?? '',
          process.env.REACT_APP_EMAIL_TEMPLATE_ID ?? '',
          event.target,
          process.env.REACT_APP_EMAIL_USER_ID ?? '',
        )
        .then(
          result => {
            console.log(result.text)
          },
          error => {
            console.log(error.text)
          },
        )
      event.target.reset()
    }
  }

  return (
    <section className={`py-4 text-light ${styles.contact}`}>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-uppercase family-semi pb-2 mb-0" data-aos="flip-up">
          Contact
        </h1>
        <FormProvider {...form}>
          <Form className={styles.form} onSubmit={form.handleSubmit(onSubmit)}>
            <Form.Group controlId="name" data-aos="flip-up">
              <Form.Control
                ref={form.register({required: true})}
                required
                name="name"
                placeholder="Name"
                type="text"
              />
              {form.errors.name && <span className="text-danger">A name is required.</span>}
            </Form.Group>

            <Form.Group controlId="email" data-aos="flip-up">
              <Form.Control
                ref={form.register({required: true})}
                required
                name="email"
                placeholder="Email"
                type="email"
              />
              {form.errors.email && <span className="text-danger">An email is required.</span>}
            </Form.Group>

            <Form.Group controlId="subject" data-aos="flip-up">
              <Form.Control
                ref={form.register({required: true})}
                required
                name="subject"
                placeholder="Subject"
                type="text"
              />
              {form.errors.subject && <span className="text-danger">A subject is required.</span>}
            </Form.Group>

            <Form.Group controlId="message" data-aos="flip-up">
              <Form.Control
                ref={form.register({required: true})}
                required
                as="textarea"
                name="message"
                placeholder="Message"
                rows={4}
              />
              {form.errors.message && <span className="text-danger">A message is required.</span>}
            </Form.Group>
            <div className="d-flex justify-content-center py-1">
              <Button className="mr-2" data-aos="fade-right" type="submit">
                Send
              </Button>
              <Button data-aos="fade-left" type="reset" variant="secondary">
                Reset
              </Button>
            </div>
          </Form>
        </FormProvider>
      </Container>
    </section>
  )
}
