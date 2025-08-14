import { Box, Heading, Text, VStack, Button, Icon } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { WarningTwoIcon, LockIcon, SearchIcon, WarningIcon } from "@chakra-ui/icons";
import NavBar from "../components/NavBar";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    let title = "Unexpected Error";
    let message = "Something went wrong. Please try again later.";
    let icon = WarningIcon;
    let colorScheme = "red";

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            title = "Page Not Found";
            message = "The page you are looking for doesn’t exist.";
            icon = SearchIcon;
            colorScheme = "orange";
        } else if (error.status === 403) {
            title = "Access Denied";
            message = "You don't have permission to view this page.";
            icon = LockIcon;
            colorScheme = "purple";
        } else if (error.status === 500) {
            title = "Server Error";
            message = "The server encountered an error. Please try again later.";
            icon = WarningTwoIcon;
            colorScheme = "red";
        }
    } else if (error instanceof Error) {
        message = error.message;
    }

    return (
        <>
            <NavBar />
            <Box minH="80vh" display="flex" alignItems="center" justifyContent="center" px={4}>
                <VStack spacing={6} maxW="md" textAlign="center">
                    <Icon as={icon} boxSize={12} />
                    <Heading as="h1" size="lg">
                        {title}
                    </Heading>
                    <Text fontSize="md">
                        {message}
                    </Text>
                    <Button as={Link} to="/" colorScheme={colorScheme}>
                        Go to Home
                    </Button>
                </VStack>
            </Box>
        </>
    );
}
