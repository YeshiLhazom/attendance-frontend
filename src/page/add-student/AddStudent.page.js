import React, {useState,useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AddStudentForm } from '../../components/add-ticket-form/AddStudentForm.comp'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'

const initialFrmDt ={
    studentID:'',
    name:'',
    email:'',
    date:'',
}
export const AddStudent = () => {
    const [frmData, setFrmData] = useState(initialFrmDt);
    useEffect(()=>{}, [frmData]);

    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        
        setFrmData({
            ...initialFrmDt,
            [name]: value
        });


    };
    const handleOnSubmit= e =>{
        e.preventDefault()
        console.log('Form submit request received',frmData)
    }
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Add Student"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <AddStudentForm 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmData={frmData}/>
            </Col>
        </Row>
    </Container>
  )
}
