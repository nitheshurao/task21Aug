
import CloseIcon from '@mui/icons-material/Close'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextareaAutosize,
} from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import * as React from 'react'
import { classList, sectionList, studentList } from '../utils/studentConstants.tsx'
import { Add } from '@mui/icons-material'

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export default function AddLeave() {
  const [open, setOpen] = React.useState(false)
  const [classes, setClasses] = React.useState('')
  const [section, setSection] = React.useState('')
  const [student, setStudent] = React.useState('')
  const [dayCount, setDayCount] = React.useState('')
  const [status, setStatus] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Button  variant="outlined"
                startIcon={<Add />}
                sx={{ width: '100%', borderRadius: 4 }} onClick={handleClickOpen}>
     
                ADD NEW LEAVE
             
      </Button>
      <Grid>
        <StyledDialog
          onClose={handleClose}
          aria-labelledby="add-leave-dialog"
          open={open}
        >
          <DialogTitle id="add-leave-dialog">
            <Typography fontWeight={'bold'} fontSize={24} component="div">
              Add New Leave
            </Typography>
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon sx={{ backgroundColor: 'black', borderRadius: 4 }} />
          </IconButton>
          <DialogContent dividers>
            <Stack direction={'row'} spacing={10}>
              <Stack direction={'column'} spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="select-class">Select Class</InputLabel>
                  <Select
                    labelId="select-class"
                    id="simple-select"
                    value={classes}
                    label="Class"
                  >
                    {classList.map((classes) => (
                      <MenuItem value={classes}>{classes}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="select-section">Select Section</InputLabel>
                  <Select
                    labelId="select-section"
                    id="simple-select"
                    value={section}
                    label="Section"
                  >
                    {sectionList.map((section) => (
                      <MenuItem value={section}>{section}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="select-section">Select Student</InputLabel>
                  <Select
                    labelId="select-student"
                    id="simple-select"
                    value={student}
                    label="Student"
                  >
                    {studentList.map((student) => (
                      <MenuItem value={student}>{student}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={5}
                  placeholder="Reason"
                />
              </Stack>
              <Stack direction={'column'} spacing={2}>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    Number Of Leave days
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={dayCount}
                    //onChange={handleChange}
                  >
                    <FormControlLabel
                      value="single"
                      control={<Radio />}
                      label="Single Day"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Multiple Days"
                    />
                  </RadioGroup>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Start Date" />
                  </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Enf Date" />
                  </DemoContainer>
                </LocalizationProvider>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    Status
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={status}
                    //onChange={handleChange}
                  >
                    <FormControlLabel
                      value="single"
                      control={<Radio />}
                      label="Approved"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Unapproved"
                    />
                  </RadioGroup>
                </FormControl>
              </Stack>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              RESET
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Add LEAVE
            </Button>
          </DialogActions>
        </StyledDialog>
      </Grid>
    </React.Fragment>
  )
}
