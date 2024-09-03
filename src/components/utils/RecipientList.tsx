import { VStack, Heading } from "@chakra-ui/react";
import React from "react";
import { IRecipient } from "../../types/DocumentPagesTypes";
import DetailedAvatar from "./DetailedAvatar";

type RecipientListPropesType = { recipients: IRecipient[]; status: string };

const RecipientList: React.FC<RecipientListPropesType> = ({ recipients, status }) => {
    return (
        <>
            <VStack alignItems={"flex-start"}>
                <Heading as="h5" size={"sm"}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </Heading>
                {recipients.map((recipient: IRecipient) => (
                    <DetailedAvatar
                        key={recipient.id}
                        title={recipient.email}
                        subTitle={recipient.role}
                        name={`${recipient.firstName[0]}${recipient.lastName[0]}`}
                    />
                ))}
            </VStack>
        </>
    );
};

export default RecipientList;
