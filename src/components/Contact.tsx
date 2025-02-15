import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const Contact: FC = () => {
    return (
        <Flex
            w="100%"
            minH="60vh"
            pt={72}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize={["16px","16px","16px","24px","24px","24px","24px"]} mb={8} fontWeight="bold">
                Contact Information
            </Text>
            <Flex flexDir="column" alignItems="center" fontSize={["12px","12px","12px","16px","16px","16px","16px"]} lineHeight="1.8">
                <Text>Email: official@bonkydoge.com</Text>
            </Flex>
            <Text fontSize="12px" mt={28}>
                Copyright © XZ Corporation 2024 All Rights Reserved.
            </Text>
        </Flex>
    );
}
export default Contact;
