import React from 'react'
import { Table } from 'react-bootstrap'


export const AttendanceTable = ({attendance})=> {
  return <Table striped bordered hover>
      <thead>
          <tr>
              <th>Date</th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Email</th>              
              <th>Status</th>
          </tr>
      </thead>
      <tbody>
          {attendance.length ? 
          attendance.map((row)=>(
          <tr key={row.id}>
              <td>{row.date}</td>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.status}</td>
          </tr>
            )):(
        
        
          <tr>
              <td colSpan={6} className="text-center">no class</td>
          </tr>
)}
          
      </tbody>

  </Table>

}

