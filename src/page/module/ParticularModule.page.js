import React from 'react'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
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

          <Stack direction="horizontal" gap={3}>
                <div className="bg-light border p-2 ">Module Code</div>

                <div className="ms-auto text-center">
                <Button 
                    variant='info' 
                    style={{fontSize:'1rem', padding:"10px 30px"}}>
                    Take Attendance
                </Button>
                </div>
          </Stack>


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
              <h4>Module Name: Cloud Computing</h4>
              <h6>Total students: 50</h6>              
              </Col>
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
