import React from 'react'
import propTypes from 'prop-types'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export const ResetPassword= ({handleOnChange,  handleOnResetSubmit, frmSwitcher, email}) => {
  return (
    <Container>
        <Row> 
            <Col>
            <h2 className='text-info text-center'>Reset Password</h2>
            <hr />
            <Form onSubmit={handleOnResetSubmit}>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleOnChange}
                    placeholder='Enter Email'
                    required
                    />
                </Form.Group><br/>
               
                <Button type='submit'>Reset Password</Button>
            </Form><br/>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="#!" onClick={() =>frmSwitcher('login')}>Login now</a>
            </Col>
        </Row>

    </Container>
  )
};
ResetPassword.propTypes={
    HandleOnChange:propTypes.func.isRequired,
    handleOnResetSubmit:propTypes.func.isRequired,
    frmSwitcher:propTypes.func.isRequired,
    email:propTypes.string.isRequired,
};
