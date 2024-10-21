/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Circle, Container, Flex, Text } from "@chakra-ui/react"
import { Select } from '@chakra-ui/react'
import { ModalContext } from '../../Components/ModalContext/ModalContext'
import { useContext } from 'react'

interface LanguageProps {
    page: number
    setPage: (newPage: number) => void,
}

const Language = ({ page, setPage }: LanguageProps) => {
    const { user, setUserInfo } = useContext(ModalContext);
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUserInfo((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    return (
        <Container rounded="md" pt='4rem' pos='fixed' maxWidth='44%' height='xl' bg='white'>
            <Box mb='5rem' textAlign='center' width='100%'>
                <Text color='brand.blueish' mx='auto' width='18rem' fontSize='1.75rem' fontWeight='700' fontFamily='Montserrat'>Pick your language and country/region</Text>
            </Box>
            <Select onChange={handleChange} name="language" value={user.language} mx='auto' width='22rem' height='2.5rem' mb='0.5rem' placeholder='English (US)'>
                <option value='English (US)'>English (US)</option>
                <option value='Arabic (UAE)'>Arabic (UAE)</option>
                <option value='Frensh (FR)'>Frensh (FR)</option>
            </Select>
            <Select onChange={handleChange} name='country' value={user.country} mx='auto' width='22rem' height='2.5rem' mb='5rem' rounded='lg' placeholder='Otaly (Italia)'>
                <option value='Otaly (Italia)'>Otaly (Italia)</option>
                <option value='England (England)'>England (England)</option>
                <option value='France (France)'>France (France)</option>
            </Select>
            <Flex direction='column' justifyContent='center' mb='3rem' textAlign='center' maxWidth='100%'>
                <Button disabled={user.language !='' && user.country !== '' ? false : true} mx='auto' onClick={() => {setPage(3); console.log(user)}} width='15rem' height='2.5rem' bg='brand.yellow' rounded='lg' color='white'>
                    NEXT
                </Button>
                <Button onClick={() => setPage(1)} bg='none'>back</Button>
            </Flex>

            <Flex justifyContent='center' gap='1rem' mx='auto' width='100%'>
                <Circle bg={page >= 1 ? 'brand.yellow' : 'brand.blueish'} size='0.4rem' />
                <Circle bg={page >= 2 ? 'brand.yellow' : 'brand.blueish'} size='0.4rem' />
                <Circle bg={page === 3 ? 'brand.yellow' : 'brand.blueish'} size='0.4rem' />
            </Flex>

        </Container>
    )
}

export default Language