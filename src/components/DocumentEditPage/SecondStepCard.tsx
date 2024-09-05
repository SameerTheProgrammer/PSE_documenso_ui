import {
    Button,
    ButtonGroup,
    CardBody,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Card,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiCopy, FiEye, FiTrash } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { LuBadgeCheck, LuPencilLine } from "react-icons/lu";
import DocumentEditCardFooter from "./CardFooter";
import DocumentEditCardHeading from "./CardHeading";

type TRoleIcon = {
    SIGNER: JSX.Element;
    APPROVER: JSX.Element;
    VIEWER: JSX.Element;
    RECEIVER: JSX.Element;
};

type FormState = {
    email: string;
    name: string;
    role: keyof TRoleIcon;
};

interface ISecondStepCard {
    ActiveStep: number;
    steps: {
        heading: string;
        description: string;
    }[];
    progressPercent: number;
    goToPrevious: () => void;
    goToNext: () => void;
}

const SecondStepCard: React.FC<ISecondStepCard> = ({
    ActiveStep,
    steps,
    progressPercent,
    goToPrevious,
    goToNext,
}) => {
    const roleIcon: TRoleIcon = {
        SIGNER: <LuPencilLine />,
        APPROVER: <LuBadgeCheck />,
        VIEWER: <FiEye />,
        RECEIVER: <FiCopy />,
    };

    const [forms, setForms] = useState<FormState[]>([{ email: "", name: "", role: "SIGNER" }]);

    const handleAddForm = () => {
        setForms([...forms, { email: "", name: "", role: "SIGNER" }]);
    };

    const handleDeleteForm = (index: number) => {
        setForms(forms.filter((_, i) => i !== index));
    };

    const handleInputChange = (index: number, field: keyof FormState, value: string) => {
        const newForms = [...forms];
        newForms[index][field] = value as keyof TRoleIcon;
        setForms(newForms);
    };

    const handleRoleChange = (index: number, role: keyof TRoleIcon) => {
        const newForms = [...forms];
        newForms[index].role = role;
        setForms(newForms);
    };

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

                <CardBody overflowY="auto" overflowX={"hidden"}>
                    <Flex w={"100%"} gap={5} h={350} direction={"column"}>
                        {forms.map((form, index) => (
                            <Flex w={"100%"} key={index} gap={4} align={"center"}>
                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        borderRadius={5}
                                        value={form.email}
                                        onChange={(e) =>
                                            handleInputChange(index, "email", e.target.value)
                                        }
                                    />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Name</FormLabel>
                                    <Input
                                        borderRadius={5}
                                        value={form.name}
                                        onChange={(e) =>
                                            handleInputChange(index, "name", e.target.value)
                                        }
                                    />
                                </FormControl>
                                <Flex mt={8} gap={{ base: 1, lg: 2 }}>
                                    <FormControl>
                                        <Menu>
                                            <MenuButton
                                                as={Button}
                                                borderRadius={5}
                                                rightIcon={<IoIosArrowDown />}
                                                px={{ base: 2, sm: 4 }}
                                            >
                                                {roleIcon[form.role]}
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem
                                                    icon={roleIcon.SIGNER}
                                                    onClick={() =>
                                                        handleRoleChange(index, "SIGNER")
                                                    }
                                                >
                                                    Needs to sign
                                                </MenuItem>
                                                <MenuItem
                                                    icon={roleIcon.APPROVER}
                                                    onClick={() =>
                                                        handleRoleChange(index, "APPROVER")
                                                    }
                                                >
                                                    Needs to approve
                                                </MenuItem>
                                                <MenuItem
                                                    icon={roleIcon.VIEWER}
                                                    onClick={() =>
                                                        handleRoleChange(index, "VIEWER")
                                                    }
                                                >
                                                    Needs to view
                                                </MenuItem>
                                                <MenuItem
                                                    icon={roleIcon.RECEIVER}
                                                    onClick={() =>
                                                        handleRoleChange(index, "RECEIVER")
                                                    }
                                                >
                                                    Receives copy
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </FormControl>
                                    <IconButton
                                        variant="ghost"
                                        colorScheme="teal"
                                        aria-label="Delete"
                                        fontSize="20px"
                                        icon={<FiTrash />}
                                        onClick={() => forms.length > 1 && handleDeleteForm(index)}
                                    />
                                </Flex>
                            </Flex>
                        ))}

                        <ButtonGroup
                            w={"100%"}
                            display={"flex"}
                            justifyContent={"space-between"}
                            spacing="5"
                        >
                            <Button
                                flex={4}
                                w={"100%"}
                                colorScheme="blue"
                                leftIcon={<FaPlus />}
                                onClick={handleAddForm}
                            >
                                Add SIGNER
                            </Button>
                            <Button flex={2} w={"100%"} colorScheme="teal" leftIcon={<FaPlus />}>
                                Add Myself
                            </Button>
                        </ButtonGroup>
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

export default SecondStepCard;
