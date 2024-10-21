import { Container, Text, Box, Img, Flex, Button } from "@chakra-ui/react"
import { ModalContext } from '../../Components/ModalContext/ModalContext'
import { useContext, useState } from 'react'
import celebratingIcon from '/Assets/celebrating.png'



const Welcome = () => {

    const [closed, setClosed] = useState(false)
    const { user } = useContext(ModalContext);

    return (

        <Container hidden={closed == false ? false : true} rounded="md" pt='1rem' pos='fixed' maxWidth='35%' height='xl' bg='white'>
            <Flex>
                {/* <Img width='5rem' height='5rem' src={gikiLogo}></Img> */}
                <Text mb='2rem' textAlign='center' textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)' color='brand.blueish' fontWeight={700} fontSize={'2rem'}>Welcome to Our Comunity <Text fontWeight={500}>{user.name}</Text></Text>
            </Flex>
            <Flex textAlign='center' color='brand.blueish' px='2rem' direction='column'>
                <Text fontWeight={700} fontSize='1rem'>Your Email: <Text fontWeight={400}> {user.email}</Text></Text>
                <Text fontWeight={700} fontSize='1rem'>Your Language:<Text fontWeight={400}> {user.language}</Text> </Text>
                <Text fontWeight={700} fontSize='1rem'>Your Country: <Text fontWeight={400}> {user.country}</Text> </Text>
                <Text fontWeight={700} fontSize='1rem'>Your interests</Text>
               
               {user.interests.map((item, index) => {
                    return <Text key={index} fontWeight={400} fontSize='1rem'>{item} </Text>
                })}

            </Flex>
            <Box textAlign='center' mt='1rem'><Img width='5rem' height='5rem' mx='auto' src={celebratingIcon}></Img></Box>
            <Box mt='2.5rem' textAlign='center' width='100%'>
                <Button onClick={() => {setClosed(true) }} color='white' mx='auto' width='7rem' height='2rem' bg='brand.yellow'>Thank you</Button>
            </Box>

        </Container>

    )
}

export default Welcome