/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Circle, Container, Flex, Img, Input, Text } from "@chakra-ui/react";
import PenIcon from '/Assets/PenIcon.svg'
import { ModalContext } from '../../Components/ModalContext/ModalContext'
import { useContext } from 'react'


interface PersonalProps {
    page: number,
    setPage: (newPage: number) => void,
}



const PersonalInfo = ({ page, setPage }: PersonalProps) => {
    
    const { user, setUserInfo } = useContext(ModalContext);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInfo((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
   



    return (
        <Container rounded="md" py={5} pos='fixed' maxWidth='44%' height='xl' bg='white'>

            <Flex direction='column'>
                <Box mb='1.4rem' textAlign='center' mx='auto' rounded='lg' width='7rem' height='7rem' bg='brand.blueish'>
                    <Text my='auto' color='white' fontSize='3.125rem'>A</Text>
                </Box>

                <Input onChange={handleChange} name="email" value={user.email} mb='1.8rem' textAlign='center' border='none' placeholder='alice@wonderland.space' fontSize='sm' width='xs' mx='auto' />
                <Text textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)' fontSize='1.75rem' fontWeight='700' fontFamily='Poppins' mx='auto' color='brand.blueish' as='b'>Welcome to Giki</Text>
                <Box mb='1.5rem' maxWidth='15rem' height="2.5rem" pos='relative' mx='auto'>
                    <Input onChange={handleChange} name="name" value={user.name} textAlign='center' fontFamily='Roboto' placeholder='Enter you name' width='15rem' bg='#F6F6F6' color='brand.yellow' m='auto' />
                    <Img zIndex={1} pos='absolute' top='40%' right='1rem' src={PenIcon}></Img>
                </Box>

                <Box textAlign='center' m='auto' maxWidth='19rem'>
                    <Text mx='auto' mb='1.4rem'>Your answer to the next questions will help us find the right comunity for you</Text>
                </Box>

                <Box mb='3rem' textAlign='center' maxWidth='100%'>
                    <Button disabled={user.name !=='' && user.email !== '' ? false : true} onClick={() => {setPage(2)}} width='15rem' height='2.5rem' bg='brand.yellow' rounded='lg' color='white'>
                        NEXT
                    </Button>
                </Box>

                <Flex justifyContent='center' gap='1rem' mx='auto' width='100%'>
                    <Circle bg={page >= 1 ? 'brand.yellow' : 'brand.blueish'} size='0.4rem' />
                    <Circle bg={page >= 2 ? 'brand.yellow' : 'brand.blueish'} size='0.4rem' />
                    <Circle bg={page === 3 ? 'brand.yellow' : 'brand.blueish'} size='0.4rem' />
                </Flex>

            </Flex>
        </Container>
    )
}

export default PersonalInfo