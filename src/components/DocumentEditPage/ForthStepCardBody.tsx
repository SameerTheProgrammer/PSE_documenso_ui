import { Flex, FormControl, FormLabel, Textarea, Input, Text } from "@chakra-ui/react";

const FirstStepCardBody = () => {
    return (
        <>
            <Flex h={"100%"} w={"100%"} gap={5} direction={"column"}>
                <FormControl>
                    <FormLabel display={"flex"} flexDir={"row"} gap={2}>
                        <Text> Subject</Text>
                        <Text opacity={0.7}> (Optional)</Text>
                    </FormLabel>
                    <Input type="text" />
                </FormControl>
                <FormControl>
                    <FormLabel display={"flex"} flexDir={"row"} gap={2}>
                        <Text> Message </Text>
                        <Text opacity={0.7}> (Optional)</Text>
                    </FormLabel>
                    <Textarea maxH={250} />
                </FormControl>
            </Flex>
        </>
    );
};

export default FirstStepCardBody;
