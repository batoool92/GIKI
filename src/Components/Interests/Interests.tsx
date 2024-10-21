/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Container, Flex, Img, Text, Circle } from "@chakra-ui/react"
import { ModalContext } from '../../Components/ModalContext/ModalContext'
import { useContext, useState } from 'react'
import interest1 from '/Assets/interest1.png'
import interest2 from '/Assets/interest2.png'
import interest3 from '/Assets/interest3.png'

interface Image {
    src: string;
    alt: string;
}

interface interestProps {
    page: number;
    setPage: (newPage: number) => void,
}

const interestsImg: Image[] = [
    { src: interest1, alt: 'interest1' },
    { src: interest2, alt: 'interest2' },
    { src: interest3, alt: 'interest3' },
    { src: interest1, alt: 'interest4' },
]

const Interests = ({ page, setPage }: interestProps) => {

    const [clicked, setClicked] = useState(false)
    const { user, setUserInfo } = useContext(ModalContext);
    const handleChange = (index: number) => {
        setUserInfo((prevUser) => ({
            ...prevUser,
            interests: [...prevUser.interests, interestsImg[index].alt],
        }));
    };
    return (
        <Container py='5rem' rounded="md" pos='fixed' maxHeight='100vh' maxWidth='44%' bg='white'>
            <Box mx='auto' width='100%'>
                <Text textAlign='center' mx='auto' maxWidth='18rem' color='brand.blueish' fontSize='1.75rem' fontWeight='700'>Tell us what you’re  interested in</Text>
            </Box>
            <Flex mb='4rem' wrap='wrap' mt='1rem' justifyContent='space-around'>
                {interestsImg.map((item, index) => {
                    return <Box rounded='lg' p='0.1rem' width='7rem' height='7rem' border='1px' borderColor={clicked === true ? 'brand.yellow' : ""}><Img onClick={() => { handleChange(index); setClicked(true) }} key={index} rounded='lg' src={item.src} _placeholder={item.alt} /></Box>
                })}
            </Flex>

            <Flex direction='column' justifyContent='center' mb='1rem' textAlign='center' maxWidth='100%'>
                <Box textAlign='center' width='100%'>
                    <Button onClick={()=> setPage(4)} color={user.interests.length < 3 ? '' : 'white'} bg={user.interests.length < 3 ? 'none' : 'brand.yellow'}
                    disabled={user.interests.length < 3 ? true : false} width='15rem' height='2.5rem'>{user.interests.length < 3 ? 'Pick 3 more' : 'Submit'}</Button>
                </Box>
                <Button onClick={() => setPage(2)} bg='none'>back</Button>
            </Flex>

            <Flex justifyContent='center' gap='1rem' mx='auto' width='100%'>
                <Circle bg={page >= 1 ? 'brand.yellow' : 'brand.blueish'} size='0.4rem' />
                <Circle bg={page >= 2 ? 'brand.yellow' : 'brand.blueish'} size='0.4rem' />
                <Circle bg={page === 3 ? 'brand.yellow' : 'brand.blueish'} size='0.4rem' />
            </Flex>

        </Container>
    )
}

export default Interests