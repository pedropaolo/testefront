import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({

    styles: {
        global: {
            body: {
                bg: 'gray.200',
                boxSizing: 'border-box' ,
                m: 10
            }
        }
    },

    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },

    

})