import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Card from 'react-bootstrap/Card';

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email('the email address is inavalid').required(),
});

export default function MailingList () {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Card className="shadow d-flex flex-column align-items-center" style={{width: "75%"}} border="dark">
        <Card.Body className="d-flex flex-column align-items-center">
          <Row>
            <h1>Stay Up To Date with All Things Caught Steelin!</h1>
          </Row>
          <Formik
            validationSchema={schema}
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-6">
                  <Form.Group as={Col} md="6" hasvalidation="true" controlId="validationFormik01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.firstName && !errors.firstName}
                      className={touched.firstName && !errors.firstName ? 'is-valid' : touched.firstName ? 'is-invalid' : ''}
                    />
                    <Form.Control.Feedback type="invalid">Please enter your first name</Form.Control.Feedback>
                    <Form.Control.Feedback>Thank you!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" hasvalidation="true" controlId="validationFormik02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.lastName && !errors.lastName}
                      className={touched.lastName && !errors.lastName ? 'is-valid' : touched.lastName ? 'is-invalid' : ''}
                    />
                    <Form.Control.Feedback type="invalid">Please provide your last name!</Form.Control.Feedback>
                    <Form.Control.Feedback>Thank you!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="8" hasvalidation="true" controlId="validationFormik01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      className={touched.email && !errors.email ? 'is-valid' : touched.email ? 'is-invalid' : ''}
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid email!</Form.Control.Feedback>
                    <Form.Control.Feedback>Thank you!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
}
