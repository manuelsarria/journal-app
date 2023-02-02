import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi soluta culpa excepturi vero ducimus iusto dolores voluptatum error, quisquam labore harum perferendis provident in placeat beatae magnam tempore quaerat iure.
      </Typography> */}

      <NothingSelectedView />

      
    </JournalLayout>
  )
}
