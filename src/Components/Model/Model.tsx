/* eslint-disable @typescript-eslint/no-unused-vars */

import { Box, Flex } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import gikiLogo from "/Assets/gikiLogo.svg"
import { useState } from 'react'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import Language from '../Language/Language'
import Interests from '../Interests/Interests'
import Welcome from '../Welcome/Welcome'


const Model = () => {

    const [page, setPage] = useState<number>(0)

    const changePage = (newPage: number) => {
        setPage(newPage)
    }

    const PageDisplayed = () => {
        if (page === 1) {
            console.log(page)
            return <PersonalInfo page={page} setPage={changePage} />
        }
        else if (page === 2) {
            console.log(page)
            return <Language page={page} setPage={changePage} />
        }
        else if (page === 3) {
            console.log(page)
            return <Interests page={page} setPage={changePage} />
        }
        else if (page === 4) {
            return <Welcome />
        }
    }

    return (
        <>
            <Flex bg="brand.blueish" height='100vh' maxWidth='100vw' alignItems={"center"} justify={"center"}>
                <Flex py={12} boxSize='md' direction='column' justify='center'>
                    <Box boxSize='md'>
                        <Image margin='auto' src={gikiLogo} alt='giki Logo' />
                    </Box>

                    <Button onClick={() => {setPage(1) }} size='sm' rounded='lg' bg="brand.yellow" maxBlockSize='md' height={12} color='#FFFFFF'>OPEN MODEL</Button>
                </Flex>

                {PageDisplayed()}
               
            </Flex>


        </>
    )
}

export default Model