import { Box } from "@mui/material";
import { ButtonComponent } from "@/components/Button";

export default function page(){
    return (
        <Box
        sx={{
            height: '100v',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            columnGap: '10px'
        }}
        >
            <ButtonComponent color='primary' variant='contained' label='Label' size='medium' icon={"uil:plus"} />
            <ButtonComponent color='error' variant='contained' label='Label' size='medium' icon={"uil:plus"} />
            <ButtonComponent color='success' variant='contained' label='Label' size='medium' icon={"uil:plus"} />
        </Box>

        
    )
}