import React from 'react'
import propTypes from 'prop-types'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'

export const AddStudentForm = ({handleOnSubmit, handleOnChange, frmDt }) => {
    console.log(frmDt);
  return (
    <Container className='mt-3 add-new-student bg-light'>
        <h2 className='text-info text-center'>Add New Student</h2>
            <Form autoComplete='off' onSubmit={handleOnSubmit}>
                <Form.Group as={Row}> 
                    <Form.Label column sm={3}>STD ID</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                        name='studentID'
                       // value={frmDt.studentID}
                        onChange={handleOnChange}
                        placeholder='Enter STD ID'
                        required
                        />
                    </Col>
                </Form.Group><br/>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Name</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                        name='name'
                       // value={frmDt.name}
                        onChange={handleOnChange}
                        placeholder='Enter Name'
                        required
                        />
                    </Col>
                </Form.Group ><br/>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Email ID</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                        type='email'
                        name='email'
                       // value={frmDt.email}
                        onChange={handleOnChange}
                        placeholder='Enter Email ID'
                        required
                        />
                    </Col>
                </Form.Group><br/>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Date</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                        type='date'
                        name='date'
                       // value={frmDt.date}
                        onChange={handleOnChange}
                        required
                        />
                    </Col>
                </Form.Group><br/>
                <Button type='submit' variant='info' block>Login</Button>
           
            </Form><br/>

    </Container>
  )
}

AddStudentForm.propTypes={
    handleOnSubmit: propTypes.func.isRequired,
    handleOnChange: propTypes.func.isRequired,
    frmDt:propTypes.object.isRequired,
}
