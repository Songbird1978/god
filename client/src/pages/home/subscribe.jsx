import { Box, InputBase, Divider, Typography, IconButton } from '@mui/material';
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from 'react';
import '../home/home.css';

const Subscribe = () => {
    const [email, setEmail] = useState("");

    return (
        <Box width="80%" margin="80px auto" textAlign="center" backgroundColor="black" color="antiquewhite">
            <IconButton color="antiquewhite !important">
                <MarkEmailReadOutlinedIcon fontSize="large" color="antiquewhite" />
            </IconButton>
            <Typography variant="h3">Subscribe to my Newsletter</Typography>
            <Box
                p="2px 4px"
                m="15px auto"
                display="flex"
                alignItems="center"
                width="75%"
                backgroundColor="black"
                color="antiquewhite"
            >
                <InputBase
                    sx={{ ml: 1, flex: 1, backgroundColor: "antiquewhite", fontFamily: "courier" }}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientaton="vertical" />
                <Typography sx={{ p: "10px", ":hover": { cursor: "pointer" } }}>Subscribe</Typography>
            </Box>
        </Box>

    )

}

export default Subscribe;