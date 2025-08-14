import { Button, Text } from "@chakra-ui/react";
import { useState } from "react"

interface ExpandableTextProps {
    children: string;
}

export default function ExpandableText({ children }: ExpandableTextProps) {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    if (!children) return null;
    if (children.length <= limit) return <Text>{children}</Text>;

    const summary = expanded ? children : children.slice(0, limit) + '...';

    return (
        <Text>
            {summary}{" "}
            <Button marginStart={1} size={'xs'} fontWeight={'bold'} colorScheme="orange" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'Show more'}</Button>
        </Text>
    )
}
