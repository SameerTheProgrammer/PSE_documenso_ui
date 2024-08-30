import React, { useEffect, useState } from "react";
import { Box, Text, Button, Input, useToast, Icon } from "@chakra-ui/react";
import { FiInbox } from "react-icons/fi";

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20 MB in bytes

const FileUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [fileURL, setFileURL] = useState<string | null>(null);
    const toast = useToast();

    useEffect(() => {
        console.log(fileURL);
        // Cleanup file URL when component unmounts or file changes
        return () => {
            if (fileURL) {
                URL.revokeObjectURL(fileURL);
            }
        };
    }, [fileURL]);

    const validateFile = (selectedFile: File) => {
        if (selectedFile.type !== "application/pdf") {
            toast({
                title: "Invalid file type",
                description: "Please select a PDF file.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return false;
        }

        if (selectedFile.size > MAX_FILE_SIZE) {
            toast({
                title: "File too large",
                description: "The file size exceeds the 20 MB limit. Please select a smaller file.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return false;
        }

        return true;
    };

    const handleFileSelect = (selectedFile: File | null | undefined) => {
        if (!selectedFile) {
            toast({
                title: "No file selected",
                description: "Please select a file to upload.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        if (validateFile(selectedFile)) {
            setFile(selectedFile);
            setFileURL(URL.createObjectURL(selectedFile));
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        handleFileSelect(selectedFile);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        handleFileSelect(droppedFile);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <Box
            width="100%"
            margin="0 auto"
            padding="50px 20px"
            border="2px dashed"
            borderColor="gray.300"
            borderRadius="md"
            textAlign="center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {file ? (
                <Text marginBottom="10px">{file.name}</Text>
            ) : (
                <>
                    <Icon as={FiInbox} boxSize={55} />
                    <Text marginBottom="10px">
                        Add a document
                        <br />
                        Drag & drop your PDF here.
                    </Text>
                </>
            )}
            <Input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                display="none"
                id="file-upload"
            />
            <Button as="label" htmlFor="file-upload" marginBottom="10px">
                Select File
            </Button>
        </Box>
    );
};

export default FileUpload;
