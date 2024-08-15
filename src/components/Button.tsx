import { Button, Icon } from "@mui/material";
// import Icon from "@mui/material";


type Props = {
    icon: string
    label: string
    variant: 'contained' | 'outlined' | 'text'
    size: 'small' | 'medium' | 'large'
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'

    
}

export function ButtonComponent(props: Props){
    return(
        <Button
            variant={props.variant ?? 'contained'}
            size={props.size ?? 'large'}
            color={props.color ?? 'promary'}
            sx={{display: 'flex', alignItems: 'center', columnGap: '8px'}}
        >
            

        </Button>
    )
}