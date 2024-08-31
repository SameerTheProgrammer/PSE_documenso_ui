import {
    Popover,
    PopoverTrigger,
    AvatarGroup,
    Avatar,
    PopoverContent,
    PopoverArrow,
    PopoverBody,
} from "@chakra-ui/react";
import { CellContext } from "@tanstack/react-table";
import { ITableDocsData, IRecipientsStatus, IRecipient } from "../../../types/HomePagesTypes";
import RecipientList from "./RecipientList";

const renderRecipientsPopover = (info: CellContext<ITableDocsData, IRecipientsStatus>) => {
    const { completed, waiting } = info.getValue();
    const allRecipients = [...completed, ...waiting];

    return (
        <Popover trigger="hover">
            <PopoverTrigger>
                <AvatarGroup cursor="pointer" size="sm" max={3}>
                    {allRecipients.map((recipient: IRecipient) => (
                        <Avatar
                            key={recipient.id}
                            name={`${recipient.firstName} ${recipient.lastName}`}
                        />
                    ))}
                </AvatarGroup>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverBody maxH="250px" overflowY="auto">
                    {Object.keys(info.getValue()).map((key) => {
                        const recipients = info.getValue()[key as keyof IRecipientsStatus];
                        return recipients.length > 0 ? (
                            <RecipientList key={key} recipients={recipients} status={key} />
                        ) : null;
                    })}
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default renderRecipientsPopover;
