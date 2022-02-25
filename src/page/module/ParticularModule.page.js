import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { AttendanceTable } from '../../components/Std-attendance-table/AttendanceTable.comp'
import attendance from '../../assets/data/dummy-stds.json'
import {PageBreadcrumb} from "../../components/breadcrumb/Breadcrumb.comp"

export const ParticularModule = () => {
  return (
      <Container>
          <Row>
              <Col>
              <PageBreadcrumb page="Module"/>
              </Col>
          </Row>
          <Row>
              <Col className='text-center mt-5 mb-2'>
              <Button 
              variant='info' 
              style={{fontSize:'1rem', padding:"10px 30px"}}>
                  Add Students</Button>
              </Col>
          </Row>
          <Row>
              <Col className='text-center mt-5 mb-2'>
              <div>Total students: 50</div>
              <div>Absentees: 5</div>
              </Col>
          </Row>
          <Row>
              <Col className="mt-2">Module Name</Col>
          </Row>
          <hr />
          <Row>
              <Col className='module'>
                  <AttendanceTable attendance={attendance}/>
              </Col>
          </Row>

      </Container>
    
  );
}
