'use client'
import { GitHub, Google, Visibility, VisibilityOff } from '@mui/icons-material';
import { Avatar, Box, Button, Divider, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
const AuthSignIn = (props: any) => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [isErrorUsername, setIsErrorUsername] = useState<boolean>(false)
    const [isErrorPassword, setIsErrorPassword] = useState<boolean>(false)

    const [errorUsername, setErrorUsername] = useState<string>("")
    const [errorPassword, setErrorPassword] = useState<string>("")

    const handleSubmit = async () => {
        setIsErrorUsername(false);
        setIsErrorPassword(false);
        setErrorPassword("");
        setErrorUsername("");

        if (!username) {
            setIsErrorUsername(true);
            setErrorUsername("User is not empty")
        }
        if (!password) {
            setIsErrorPassword(true);
            setErrorPassword("Password is not empty")
        }

        const res = await signIn("credentials", {
            username: username,
            password: password,
            redirect: false
        })
        if (!res?.error) {
            router.push('/')

        }
        else {
            alert("Error !!!!")
        }
        console.log("response", res)
    }

    return (
        <Box>
            <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Grid item
                    xs={12}
                    sm={8}
                    md={5}
                    lg={4}
                    sx={{ boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px" }}
                >
                    <div style={{ margin: 20 }}>
                        <Link href={"/"}>
                            <ArrowBackIcon />
                        </Link>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            margin: "10px 0"
                        }}>
                            <Avatar>
                                <AccountCircleIcon />
                            </Avatar>
                            <Typography component={"h1"}>
                                SignIn
                            </Typography>
                        </Box>
                        <TextField
                            onChange={(e) => setUsername(e.target.value)}
                            label="UserName"
                            variant="outlined"
                            margin='normal'
                            fullWidth
                            required
                            name='username'
                            autoFocus
                            error={isErrorUsername}
                            helperText={errorUsername}

                        />

                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            variant="outlined"
                            margin='normal'
                            fullWidth
                            required
                            name='password'
                            autoFocus
                            type={showPassword ? "text" : "password"}
                            error={isErrorPassword}
                            helperText={errorPassword}

                            InputProps={{
                                endAdornment: <InputAdornment position='end'>
                                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword === false ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                        <Button sx={{
                            my: 3
                        }}
                            fullWidth
                            color='primary'
                            variant='contained'
                            type='submit'
                            onClick={handleSubmit}
                        >
                            Sign In
                        </Button>

                        <Divider>
                            Or Using
                        </Divider>

                        <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", mt: "20px" }}>
                            <Avatar
                                onClick={() => {
                                    signIn("github")
                                }}
                                sx={{ cursor: "pointer", bgcolor: "orange" }}
                            >
                                <GitHub ></GitHub>
                            </Avatar>
                            <Avatar sx={{ cursor: "pointer", bgcolor: "orange" }}>
                                <Google></Google>
                            </Avatar>
                        </Box>

                    </div>
                </Grid>

            </Grid>

        </Box >
    )
}

export default AuthSignIn