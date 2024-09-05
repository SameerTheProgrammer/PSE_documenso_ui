import { CardHeader, Heading, Text } from "@chakra-ui/react";

interface IDocumentEditCardHeading {
    ActiveStep: number;
    steps: {
        heading: string;
        description: string;
    }[];
}

const DocumentEditCardHeading: React.FC<IDocumentEditCardHeading> = ({ ActiveStep, steps }) => {
    return (
        <>
            <CardHeader borderBottomWidth="1px">
                <Heading size="lg">{steps[ActiveStep - 1].heading}</Heading>
                <Text>{steps[ActiveStep - 1].description}</Text>
            </CardHeader>
        </>
    );
};

export default DocumentEditCardHeading;
