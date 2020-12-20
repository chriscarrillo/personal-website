import styles from 'components/Contact/Contact.module.scss'
import {Form, Formik, FormikProps} from 'formik'
import {ContactFormValues} from 'models/FormValues'
import React from 'react'
import {Form as BootstrapForm, Button, Container} from 'react-bootstrap'
import * as Yup from 'yup'

const initialFormValues: ContactFormValues = {
  email: '',
  message: '',
  name: '',
  subject: '',
}

const ContactFormSchema = Yup.object().shape({
  email: Yup.string().email().required('An email is required'),
  message: Yup.string().required('A message is required'),
  name: Yup.string().required('A name is required'),
  subject: Yup.string().required('A subject is required'),
})

/**
 * Contact section.
 * @return React components
 */
export const Contact: React.FC = () => {
  /**
   * Submit the form.
   */
  function handleSubmit() {
    console.log('hey')
  }
  return (
    <section className={`py-4 text-light ${styles.contact}`}>
      <Container fluid className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-uppercase family-semi pb-2 mb-0">Contact</h1>
        <Formik
          validateOnBlur
          initialValues={initialFormValues}
          validationSchema={ContactFormSchema}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<ContactFormValues>) => (
            <Form className={styles.form}>
              <BootstrapForm.Group controlId="name">
                <BootstrapForm.Control
                  placeholder="Name"
                  type="text"
                  value={props.values.name}
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                />
                {props.touched.name !== undefined && props.errors.name && (
                  <BootstrapForm.Text className="text-danger">
                    {props.errors.name}
                  </BootstrapForm.Text>
                )}
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="email">
                <BootstrapForm.Control
                  placeholder="Email"
                  type="email"
                  value={props.values.email}
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                />
                {props.touched.email !== undefined && props.errors.email && (
                  <BootstrapForm.Text className="text-danger">
                    {props.errors.email}
                  </BootstrapForm.Text>
                )}
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="subject">
                <BootstrapForm.Control
                  placeholder="Subject"
                  type="text"
                  value={props.values.subject}
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                />
                {props.touched.subject !== undefined && props.errors.subject && (
                  <BootstrapForm.Text className="text-danger">
                    {props.errors.subject}
                  </BootstrapForm.Text>
                )}
              </BootstrapForm.Group>

              <BootstrapForm.Group controlId="message">
                <BootstrapForm.Control
                  as="textarea"
                  placeholder="Message"
                  rows={4}
                  value={props.values.message}
                  onBlur={props.handleBlur}
                  onChange={props.handleChange}
                />
                {props.touched.message !== undefined && props.errors.message && (
                  <BootstrapForm.Text className="text-danger">
                    {props.errors.message}
                  </BootstrapForm.Text>
                )}
              </BootstrapForm.Group>
              <div className="d-flex justify-content-center py-1">
                <Button className="mr-2" type="submit">
                  Send
                </Button>
                <Button type="reset" variant="secondary">
                  Reset
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  )
}
