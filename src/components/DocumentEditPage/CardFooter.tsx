import { Box, Progress, ButtonGroup, Button, Text, CardFooter } from "@chakra-ui/react";
import React from "react";

interface IDocumentEditCardFooter {
    ActiveStep: number;
    steps: {
        heading: string;
        description: string;
    }[];
    progressPercent: number;
    goToPrevious: () => void;
    isSubmitting?: boolean;
    onBtnClick: () => void;
}

const DocumentEditCardFooter: React.FC<IDocumentEditCardFooter> = ({
    ActiveStep,
    steps,
    progressPercent,
    goToPrevious,
    isSubmitting,
    onBtnClick,
}) => {
    const handleBtnClick = () => {
        onBtnClick();
    };

    return (
        <>
            <CardFooter display={"flex"} flexDirection={"column"} rowGap={2}>
                <Box mb={3}>
                    <Text mb={1}>
                        Step {ActiveStep} of {steps.length}
                    </Text>
                    <Progress value={progressPercent} size="xs" colorScheme="pink" />
                </Box>
                <ButtonGroup
                    w={"100%"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    spacing="5"
                >
                    <Button
                        w={"100%"}
                        colorScheme="blue"
                        onClick={() => {
                            goToPrevious();
                        }}
                        isDisabled={ActiveStep === 1}
                        isLoading={isSubmitting}
                    >
                        Go Back
                    </Button>
                    {ActiveStep === steps.length ? (
                        <Button
                            type="submit"
                            isLoading={isSubmitting}
                            w={"100%"}
                            colorScheme="teal"
                            onClick={handleBtnClick}
                        >
                            Submit
                        </Button>
                    ) : (
                        <Button
                            w={"100%"}
                            onClick={handleBtnClick}
                            colorScheme="teal"
                            isDisabled={ActiveStep === steps.length}
                            isLoading={isSubmitting}
                        >
                            Continue
                        </Button>
                    )}
                </ButtonGroup>
            </CardFooter>
        </>
    );
};

export default DocumentEditCardFooter;
