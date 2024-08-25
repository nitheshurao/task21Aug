import {
  breadCrumbsConstants,
  panelSections,
  sectionDetails,
  Years,
} from './utils/studentConstants.tsx'
import { Add, InboxOutlined, Notifications, Search } from '@mui/icons-material'
import {
  Avatar,
  Breadcrumbs,
  Button,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import * as React from 'react'
import styled from 'styled-components'
import StudentTable from './files/StudentTable.tsx'
import AddLeave from './files/addLeaveModal.tsx'

const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const StyledTypography = styled(Typography)`
  margin-right: 20px;
`
const StyledBreadCrumbs = styled(Typography)`
  font-weight: 700;
  font-size: 18px;
`

function NavBar() {
  const [year, setYear] = React.useState('')
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  )

  const fontSizeTypo = (size: string) => {
    return {
      fontSize: `${size}px`,
    }
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleYearChange = (event: SelectChangeEvent) => {
    setYear(event.target.value)
  }

  return (
    <>
      <AppBar position="static">
        <Stack direction="row" spacing={'55%'}>
          <Box>
            <Typography variant="h6" sx={{ marginLeft: 4 }}>
              Delhi Public School
            </Typography>
          </Box>
          <Box>
            <Stack direction={'row'}>
              <StyledTypography>Free Trial</StyledTypography>
              <StyledTypography>30 Days Trial</StyledTypography>
              <StyledTypography>Buy Now</StyledTypography>
              <Avatar sx={{ marginRight: 2 }} />
              <StyledTypography>Nithesh</StyledTypography>
              <Notifications />
            </Stack>
          </Box>
        </Stack>
      </AppBar>
      <Grid container spacing={0}>
        <Grid item xs={2}md={2.5} sx={{ backgroundColor: '#161950', height: '100%' }}>
          <Grid
            sx={{
              backgroundColor: '#f6cd20',
              borderRadius: 4,
              height: '5ch',
              direction: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography>Nithesh</Typography>
          </Grid>
          <List>
            {panelSections.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: 'white' }}>
                    <InboxOutlined />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ color: 'white' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Grid sx={{ backgroundColor: '#f6cd20', borderRadius: 4 }}>
            <List>
              {sectionDetails.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxOutlined />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
              {breadCrumbsConstants.map((text) => (
                <StyledBreadCrumbs>{text}</StyledBreadCrumbs>
              ))}
            </Breadcrumbs>
          </Box>
          <Box>
            <Typography fontSize={'24px'} fontWeight={'bold'} marginBottom={2}>
              Student Leaves
            </Typography>
          </Box>
          <Stack direction={'row'} spacing={70} marginBottom={2}>
            <Stack direction={'row'} spacing={1}>
              <Box width={'25ch'}>
                <FormControl fullWidth>
                  <InputLabel id="select-label">Select Year</InputLabel>
                  <Select
                    labelId="select-label"
                    id="simple-select"
                    value={year}
                    label="Year"
                    onChange={handleYearChange}
                  >
                    {Years.map((year) => (
                      <MenuItem value={year}>{year}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box>
                <TextField
                  label="Search Student"
                  id="search-student"
                  sx={{ width: '25ch' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Stack>
            <Box sx={{ direction: 'flex', justifyContent: 'flex-end' }}>
             
              <AddLeave/>
            </Box>
          </Stack>
          <StudentTable />
        </Grid>
      </Grid>
    </>
  )
}
export default NavBar
