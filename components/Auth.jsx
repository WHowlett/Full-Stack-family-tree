import React from "react";
import { Box, Button, Center, Link } from '@chakra-ui/react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from 'react-icons/fa';
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";

const Auth = () => {
    const { isLoggedIn, user } = useAuth();
    const handleAuth = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

            });
    };
    return (
        <Center>
            <Box display="flex" alignItems="center" justifyContent="space-between" border='1px' borderColor='gray.200' borderTopRadius="md">

            </Box>
        </Center>
    );
}