import {
    Flex,
    FormControl,
    FormLabel,
    Textarea,
    Input,
    Text,
    CardBody,
    Card,
} from "@chakra-ui/react";
import DocumentEditCardFooter from "./CardFooter";
import DocumentEditCardHeading from "./CardHeading";
import { useNavigate } from "react-router-dom";
interface IForthStepCard {
    ActiveStep: number;
    steps: {
        heading: string;
        description: string;
    }[];
    progressPercent: number;
    goToPrevious: () => void;
}

const ForthStepCard: React.FC<IForthStepCard> = ({
    ActiveStep,
    steps,
    progressPercent,
    goToPrevious,
}) => {
    const navigate = useNavigate();
    return (
        <>
            <Card
                flex="3"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                shadow={"none"}
                borderColor={"none"}
                minH={650}
            >
                <DocumentEditCardHeading ActiveStep={ActiveStep} steps={steps} />

                <CardBody>
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
                            <Textarea minH={150} maxH={250} />
                        </FormControl>
                    </Flex>
                </CardBody>

                <DocumentEditCardFooter
                    ActiveStep={ActiveStep}
                    steps={steps}
                    progressPercent={progressPercent}
                    goToPrevious={goToPrevious}
                    onBtnClick={() => {
                        navigate("/");
                    }}
                />
            </Card>
        </>
    );
};

export default ForthStepCard;
