import React from 'react'
import propTypes from 'prop-types'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export const LoginForm= ({handleOnChange,  handleOnSubmit, email, pass, frmSwitcher}) => {
  return (
    <Container>
        <Row> 
            <Col>
            <h2 className='text-info text-center'>User Login</h2>
            <hr />
            <Form onSubmit={handleOnSubmit}>
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
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type='password'
                    name='password'
                    value={pass}
                    onChange={handleOnChange}
                    placeholder='password'
                    required
                    />
                </Form.Group><br/>
                <Button type='submit'>Login</Button>
            </Form><br/>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="#!" onClick={() => frmSwitcher('reset')}>
                Forget Password?</a>
            </Col>
        </Row>

    </Container>
  )
}
LoginForm.propTypes={
    HandleOnChange:propTypes.func.isRequired,
    handleOnSubmit:propTypes.func.isRequired,
    frmSwitcher:propTypes.func.isRequired,
    email:propTypes.string.isRequired,
    pass:propTypes.string.isRequired,
}
