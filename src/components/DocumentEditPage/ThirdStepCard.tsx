import {
    Flex,
    Box,
    Button,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Grid,
    GridItem,
    CardBody,
    Card,
} from "@chakra-ui/react";
import { useState } from "react";
import { CiCalendar, CiHashtag } from "react-icons/ci";
import { FaRegDotCircle } from "react-icons/fa";
import { FaSignature } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp, IoIosCheckboxOutline, IoMdPerson } from "react-icons/io";
import { MdOutlinePermContactCalendar, MdOutlineMailOutline } from "react-icons/md";
import { RxText } from "react-icons/rx";
import DocumentEditCardFooter from "./CardFooter";
import DocumentEditCardHeading from "./CardHeading";

interface IRecipient {
    id: string;
    name: string;
    email: string;
    role: "SIGNER" | "VIEWER" | "APPROVER" | "RECEIVER";
}

type TRole = {
    SIGNER: IRecipient[];
    APPROVER: IRecipient[];
    VIEWER: IRecipient[];
    RECEIVER: IRecipient[];
};

const recipientsList: TRole = {
    SIGNER: [
        {
            id: "r41",
            name: "Scott",
            email: "scott.lang@example.com",
            role: "SIGNER",
        },
        {
            id: "r43",
            name: "Nick",
            email: "nick.fury@example.com",
            role: "SIGNER",
        },
    ],
    VIEWER: [
        {
            id: "r42",
            name: "Hope",
            email: "hope.van.dyne@example.com",
            role: "VIEWER",
        },
    ],
    APPROVER: [
        {
            id: "r44",
            name: "Maria",
            email: "maria.hill@example.com",
            role: "APPROVER",
        },
    ],
    RECEIVER: [
        {
            id: "r402",
            name: "Sameer",
            email: "sameer.kumar@example.com",
            role: "RECEIVER",
        },
    ],
};
interface IThirdStepCard {
    ActiveStep: number;
    steps: {
        heading: string;
        description: string;
    }[];
    progressPercent: number;
    goToPrevious: () => void;
    goToNext: () => void;
}

const ThirdStepCard: React.FC<IThirdStepCard> = ({
    ActiveStep,
    steps,
    progressPercent,
    goToPrevious,
    goToNext,
}) => {
    // todo:- choose first recipient user
    const [selectRecipient, setSelectRecipient] = useState<IRecipient>(recipientsList.SIGNER[0]);
    return (
        <>
            <Card
                flex="3"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                shadow={"none"}
                borderColor={"none"}
                h={"100%"}
            >
                <DocumentEditCardHeading ActiveStep={ActiveStep} steps={steps} />

                <CardBody overflowY="auto">
                    <Flex w={"100%"} gap={5} direction={"column"}>
                        <Menu>
                            <MenuButton
                                rightIcon={
                                    <Box display={"flex"} flexDirection={"column"}>
                                        <IoIosArrowUp /> <IoIosArrowDown />
                                    </Box>
                                }
                                as={Button}
                            >
                                {selectRecipient.name} ({selectRecipient.email})
                            </MenuButton>
                            <MenuList
                                overflowY={"auto"}
                                maxH={300}
                                w={"max-content"}
                                fontSize={"sm"}
                            >
                                {Object.keys(recipientsList).map((key, index) => (
                                    <>
                                        <MenuGroup
                                            key={index + "c"}
                                            title={key.charAt(0) + key.slice(1).toLowerCase() + "s"}
                                            fontSize={"sm"}
                                        >
                                            {recipientsList[key as keyof TRole].map(
                                                (data, index) => (
                                                    <MenuItem
                                                        key={index}
                                                        onClick={() => setSelectRecipient(data)}
                                                    >
                                                        {data.name} ({data.email})
                                                    </MenuItem>
                                                ),
                                            )}
                                        </MenuGroup>
                                        <MenuDivider />
                                    </>
                                ))}
                            </MenuList>
                        </Menu>
                        <Grid
                            w={"100%"}
                            templateRows="repeat(4, 1fr)"
                            templateColumns="repeat(3, 1fr)"
                            justifyItems={"center"}
                            gap={2}
                        >
                            <GridItem w={"100%"} h={"100%"}>
                                <Button
                                    w={"100%"}
                                    h={"100%"}
                                    py={6}
                                    variant={"outline"}
                                    leftIcon={<FaSignature />}
                                >
                                    Signature
                                </Button>
                            </GridItem>
                            <GridItem w={"100%"} h={"100%"}>
                                <Button
                                    w={"100%"}
                                    h={"100%"}
                                    py={6}
                                    variant={"outline"}
                                    leftIcon={<MdOutlinePermContactCalendar />}
                                >
                                    Initials
                                </Button>
                            </GridItem>
                            <GridItem w={"100%"} h={"100%"}>
                                <Button
                                    w={"100%"}
                                    h={"100%"}
                                    py={6}
                                    variant={"outline"}
                                    leftIcon={<MdOutlineMailOutline />}
                                >
                                    Email
                                </Button>
                            </GridItem>
                            <GridItem w={"100%"} h={"100%"}>
                                <Button
                                    w={"100%"}
                                    h={"100%"}
                                    py={6}
                                    variant={"outline"}
                                    leftIcon={<IoMdPerson />}
                                >
                                    Name
                                </Button>
                            </GridItem>
                            <GridItem w={"100%"} h={"100%"}>
                                <Button
                                    w={"100%"}
                                    h={"100%"}
                                    py={6}
                                    variant={"outline"}
                                    leftIcon={<CiCalendar />}
                                >
                                    Date
                                </Button>
                            </GridItem>
                            <GridItem w={"100%"} h={"100%"}>
                                <Button
                                    w={"100%"}
                                    h={"100%"}
                                    py={6}
                                    variant={"outline"}
                                    leftIcon={<RxText />}
                                >
                                    Text
                                </Button>
                            </GridItem>
                            <GridItem w={"100%"} h={"100%"}>
                                <Button
                                    w={"100%"}
                                    h={"100%"}
                                    py={6}
                                    variant={"outline"}
                                    leftIcon={<CiHashtag />}
                                >
                                    Number
                                </Button>
                            </GridItem>
                            <GridItem w={"100%"} h={"100%"}>
                                <Button
                                    w={"100%"}
                                    h={"100%"}
                                    py={6}
                                    variant={"outline"}
                                    leftIcon={<FaRegDotCircle />}
                                >
                                    Radio
                                </Button>
                            </GridItem>
                            <GridItem w={"100%"} h={"100%"}>
                                <Button
                                    w={"100%"}
                                    h={"100%"}
                                    py={6}
                                    variant={"outline"}
                                    leftIcon={<IoIosCheckboxOutline />}
                                >
                                    Checkbox
                                </Button>
                            </GridItem>
                            <GridItem w={"100%"} h={"100%"}>
                                <Button
                                    w={"100%"}
                                    h={"100%"}
                                    py={6}
                                    variant={"outline"}
                                    leftIcon={<IoIosArrowDown />}
                                >
                                    Dropdown
                                </Button>
                            </GridItem>
                        </Grid>
                    </Flex>
                </CardBody>

                <DocumentEditCardFooter
                    ActiveStep={ActiveStep}
                    steps={steps}
                    progressPercent={progressPercent}
                    goToPrevious={goToPrevious}
                    onBtnClick={() => {
                        goToNext();
                    }}
                />
            </Card>
        </>
    );
};

export default ThirdStepCard;
