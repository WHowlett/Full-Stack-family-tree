import React from "react";
import { Box, Button, Center, Link, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, GiFamilyTree } from 'react-icons/fa';
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";
import { ChevronDownIcon } from '@chakra-ui/icon'

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
                <Box>
                    <GiFamilyTree />
                </Box>
                <Box>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Wayne Family
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link href="/waynelist">Wayne Family List</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/wayneadd">Add Family to Wayne side</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Lara Family
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link href="laralist">Lara Family List</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/laraadd">Add Family to Lara side</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box textAlign="right">
                    <Box textAlign="right">
                        {" "}
                        {isLoggedIn && (
                            <>
                                <Text color="green.500">{user.email}</Text>
                                <Link color="red.500" onClick={() => auth.signOut()}>
                                    Logout
                                </Link>
                            </>
                        )}
                        {!isLoggedIn && (
                            <Button leftIcon={<FaGoogle />} onClick={() => handleAuth()}>
                                Login with Google
                            </Button>
                        )}
                    </Box>
                </Box>
            </Box>
        </Center>
    );
}

export default Auth 