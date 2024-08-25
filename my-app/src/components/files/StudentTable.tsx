
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React from 'react'
import { tableHeadings } from '../utils/studentConstants.tsx'

function createData(
  numbers: string,
  name: string,
  classes: string,
  section: string,
  reason: string,
  date: string,
  status: string,
) {
  return { numbers, name, classes, section, reason, date, status }
}

const rows = [
  createData(
    'Frozen yoghurt',
    '159',
    '6.0',
    '24',
    '4.0',
    '2021-05-24',
    'Active',
  ),
  createData(
    'Frozen yoghurt',
    '159',
    '6.0',
    '24',
    '4.0',
    '2021-05-24',
    'Active',
  ),
  createData(
    'Frozen yoghurt',
    '159',
    '6.0',
    '24',
    '4.0',
    '2021-05-24',
    'Active',
  ),
  createData(
    'Frozen yoghurt',
    '159',
    '6.0',
    '24',
    '4.0',
    '2021-05-24',
    'Active',
  ),
  createData(
    'Frozen yoghurt',
    '159',
    '6.0',
    '24',
    '4.0',
    '2021-05-24',
    'Active',
  ),
  createData(
    'Frozen yoghurt',
    '159',
    '6.0',
    '24',
    '4.0',
    '2021-05-24',
    'Active',
  ),
  createData(
    'Frozen yoghurt',
    '159',
    '6.0',
    '24',
    '4.0',
    '2021-05-24',
    'Active',
  ),
  createData(
    'Frozen yoghurt',
    '159',
    '6.0',
    '24',
    '4.0',
    '2021-05-24',
    'Active',
  ),
  createData(
    'Frozen yoghurt',
    '159',
    '6.0',
    '24',
    '4.0',
    '2021-05-24',
    'Active',
  ),
  createData(
    'Frozen yoghurt',
    '159',
    '6.0',
    '24',
    '4.0',
    '2021-05-24',
    'Active',
  ),
  createData(
    'Frozen yoghurt',
    '159',
    '6.0',
    '24',
    '4.0',
    '2021-05-24',
    'Active',
  ),
  createData(
    'Frozen yoghurt',
    '159',
    '6.0',
    '24',
    '4.0',
    '2021-05-24',
    'Active',
  ),
]

export default function StudentTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#aac1d1' }}>
            {tableHeadings.map((heading) => (
              <TableCell>{heading}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.numbers}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.classes}</TableCell>
              <TableCell>{row.section}</TableCell>
              <TableCell>{row.reason}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
