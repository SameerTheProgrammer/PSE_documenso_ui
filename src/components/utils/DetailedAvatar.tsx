import { Flex, Avatar, Text, ResponsiveValue } from "@chakra-ui/react";

interface IPropesType {
    title: string;
    subTitle: string;
    name: string;
    bg?: string;
    subTitleFontSize?: string | number;
    titleFontSize?: string | number;
    avatarSize?: ResponsiveValue<string>;
    flexDisplay?: object | undefined;
}

const DetailedAvatar: React.FC<IPropesType> = ({
    title,
    subTitle,
    name,
    bg = "teal",
    subTitleFontSize = 12,
    titleFontSize = 15,
    avatarSize = "sm",
    flexDisplay = undefined,
}) => {
    return (
        <>
            <Flex gap={2} cursor="pointer">
                <Avatar size={avatarSize} name={name} bg={bg} />
                <Flex direction={"column"} display={flexDisplay}>
                    <Text w={"max-content"} lineHeight={1} fontSize={titleFontSize}>
                        {title}
                    </Text>
                    <Text
                        w={"max-content"}
                        lineHeight={1}
                        fontSize={subTitleFontSize}
                        opacity={0.6}
                    >
                        {subTitle}
                    </Text>
                </Flex>
            </Flex>
        </>
    );
};

export default DetailedAvatar;
