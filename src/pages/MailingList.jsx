import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import PhotoOfBand from '../components/photo-of-band';

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email('the email address is inavalid').required(),
});

export default function MailingList() {
  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3000/contacts", values);
        alert("Form submitted successfully!");
      } catch (error) {
        console.error(error);
        alert("Form submission failed");
      }
    },
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignContent: "center", paddingTop: "3rem", paddingBottom: "4rem" }}>
        <Card className="d-flex flex-column align-items-center" style={{ width: "75%" }}>
          <Card.Body className="d-flex flex-column align-items-center">
            <Row>
              <h3>Stay Up To Date with All Things Caught Steelin!</h3>
            </Row>
            <Form noValidate onSubmit={formik.handleSubmit}>
              <Row className="mb-12">
                <Form.Group as={Col} md="12" hasvalidation="true" controlId="validationFormik01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.firstName && !formik.errors.firstName}
                    className={formik.touched.firstName && !formik.errors.firstName ? "is-valid" : formik.touched.firstName ? "is-invalid" : ""}
                  />
                  <Form.Control.Feedback type="invalid">Please enter your first name!</Form.Control.Feedback>
                  <Form.Control.Feedback>Thank you!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" hasvalidation="true" controlId="validationFormik02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.lastName && !formik.errors.lastName}
                    className={formik.touched.lastName && !formik.errors.lastName ? "is-valid" : formik.touched.lastName ? "is-invalid" : ""}
                  />
                  <Form.Control.Feedback type="invalid">Please provide your last name!</Form.Control.Feedback>
                  <Form.Control.Feedback>Thank you!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" hasvalidation="true" controlId="validationFormik01">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isValid={formik.touched.email && !formik.errors.email}
                    className={formik.touched.email && !formik.errors.email ? "is-valid" : formik.touched.email ? "is-invalid" : ""}
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid email!</Form.Control.Feedback>
                  <Form.Control.Feedback>Thank you!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button type="submit">Submit form</Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
        <PhotoOfBand />
    </div>
  );
}
