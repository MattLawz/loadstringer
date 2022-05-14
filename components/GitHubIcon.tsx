import { IconButton } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const GitHubIcon = () => {
    return (
        <Link href="https://github.com/MattLawz/loadstringer" passHref>
            <a target="_blank">
            <IconButton aria-label="GitHub" icon={<AiFillGithub />} />
            </a>
        </Link>
    );
};

export default GitHubIcon;
