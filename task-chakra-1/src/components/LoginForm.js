import { useState } from 'react';
import {Button, Flex, Heading, Input} from '@chakra-ui/react'
import {ApiLookup} from "../providers/DataProvider";

export const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPaswword] = useState("");

    const handleClick = () => {
        let loginDto = {
            email: email,
            password: password
        }
        ApiLookup.login(loginDto)
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPaswword(value);
    }

    const hanldeEmailChanhe = (e) => {
        const value = e.target.value;
        setEmail(value);
    }
    
    return (
     <Flex height="100vh" alignItems="center" justifyContent="center">
         <Flex direction="column" background="gray.100" p={12} rounded={6}>
             <Heading mb={10}>Task Planner Log in</Heading>
             <Input placeholder="alejandro@outlook.com" variant="filled" background="white" mb={3} type="email" value={email} onChange={hanldeEmailChanhe}/>
             <Input placeholder="******" variant="filled" mb={6} background="white" type="password" value={password} onChange={handlePasswordChange}/>
             <Button colorScheme="teal" onClick={handleClick}>Log in</Button>             
         </Flex>
     </Flex>
      );
}