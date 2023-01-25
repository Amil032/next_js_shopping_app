import { Paper, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
interface Props {
  content: string;
  children:JSX.Element
}
export const SHowHide = ({ content,children }: Props) => {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      <Paper >
        <div style={{ display: 'flex' }} onClick={()=>setExpand(prev=>!prev)}>
          <Typography>{content}</Typography>
          {expand ? <ExpandMoreIcon /> : <ChevronRightIcon />}
        </div>
      </Paper>
      {expand&&children}
    </div>
  );
};
