import { HStack, Image, Text} from "@chakra-ui/react";
import ColorModeSwitch from "./colorModeSwitch";
// import  '../assets/logo.png'

export default function Nav() {
    return (
        <HStack justifyContent={"space-between"} padding={'10px'}>
            <Image src='assets/logo.png' alt="Logo" boxSize='60px' />
           <ColorModeSwitch/>
        </HStack>
    );
}
