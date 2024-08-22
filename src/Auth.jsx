// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function Auth() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        gender: "",
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/detailspage", {state: formData});
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    maxWidth={400}
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={5}
                    padding={3}
                    borderRadius={5}
                    gap={2}
                >
                    <Typography style={{fontWeight: "700", fontSize: "2rem", alignSelf: "center"}}>Form</Typography>

                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        id="filled-basic"
                        label="Age"
                        variant="outlined"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    <TextField
                        id="standard-basic"
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>

                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: "blue",
                            color: "white",
                            fontWeight: "700",
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </form>
        </div>
    );
}
