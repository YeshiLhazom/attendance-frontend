import React from 'react'
import { Container, Row, Col, Button, Stack, Table } from 'react-bootstrap'
import {PageBreadcrumb} from "../../components/breadcrumb/Breadcrumb.comp"

export const Dashboard = () => {
  return (
      <Container>
          <Row>
              <Col>
              <PageBreadcrumb page="Dashboard"/>
              </Col>
          </Row>
         
          <Stack direction="horizontal" gap={3}>
                <div className="bg-light border p-2 ">Tutor Name</div>

                <div className="ms-auto text-center">
                <Button 
                    variant='info' 
                    style={{fontSize:'1rem', padding:"10px 30px"}}>
                    Add Class
                </Button>
                </div>
          </Stack>
          <Row>
              <Col className="mt-2 mt-5 text-success">ALL CLASSES</Col>
          </Row>
          <hr />

          <Stack gap={3}>
            <div >
            <Table className="bg-light border" hover>
                <tbody>
                    <tr className='text-info'>
                    <td>Module Code</td>
                    <td>NWC403</td>
                    </tr>
                    <tr>
                    <td>Module Name</td>
                    <td>Cloud Computing</td>
                    </tr>
                    <tr>
                    <td>Number of Students</td>
                    <td>34</td>
                    </tr>
                </tbody>
            </Table>            
            </div><br/>
            <div>
            <Table className="bg-light border" hover>
                <tbody>
                    <tr className='text-info'>
                    <td>Module Code</td>
                    <td>NWC403</td>
                    </tr>
                    <tr>
                    <td>Module Name</td>
                    <td>Cloud Computing</td>
                    </tr>
                    <tr>
                    <td>Number of Students</td>
                    <td>34</td>
                    </tr>
                </tbody>
            </Table>            
            </div><br/>
            <div>
            <Table className="bg-light border" hover>
                <tbody>
                    <tr className='text-info'>
                    <td>Module Code</td>
                    <td>NWC403</td>
                    </tr>
                    <tr>
                    <td>Module Name</td>
                    <td>Cloud Computing</td>
                    </tr>
                    <tr>
                    <td>Number of Students</td>
                    <td>34</td>
                    </tr>
                </tbody>
            </Table>            
            </div>           
         </Stack>

      </Container>
    
  );
}
