import { Box } from "@mui/system"

const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>

      {/* Navbar */}

      {/* Sidebar */}

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        {/* toolbar */}

        { children }

      </Box>

    </Box>
  )
}
