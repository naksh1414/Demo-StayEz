import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";

import { SiTicktick } from "react-icons/si";
import { FaHandshakeAngle } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";

import img from "../../assets/aboutBG.png";
import img2 from "../../assets/about image1.png";
import img3 from "../../assets/aboutimg2.png";
const About = () => {
  const [who, setwho] = useState(false);
  const [why, setwhy] = useState(false);
  const [what, setwhat] = useState(false);

  const handleClick = (cond) => {
    if (cond == "who") {
      setwho(true);
      setwhat(false);
      setwhy(false);
    }
    if (cond == "why") {
      setwho(false);
      setwhat(false);
      setwhy(true);
    }
    if (cond == "what") {
      setwho(false);
      setwhat(true);
      setwhy(false);
    }
  };
  return (
    <>
      <Box w={"full"} h={"fit-content"} position={"relative"}>
        <Image
          filter={"brightness(0.6)"}
          w={"full"}
          h={"600px"}
          objectFit={"cover"}
          src={img}
        />
        <VStack
          gap={"40px"}
          position={"absolute"}
          top={"40%"}
          left={"50%"}
          transform={"translate(-50%,-50%)"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading color={"white"} fontSize={"96px"}>
            About <span style={{ color: "#03A9F4" }}>Us</span>
          </Heading>
          <HStack
            w={"700px"}
            h={"80px"}
            borderRadius={"60px"}
            bgColor={"rgba(0,0,0,.8)"}
            justifyContent={"space-evenly"}
          >
            <HashLink to={"#sec1"}>
              <Button
                w={"200px"}
                h={"50px"}
                fontSize={"28px"}
                borderBottom={who ? "1px solid white" : ""}
                bgColor={"transparent"}
                _hover={{ backgroundColor: "transparent" }}
                color={"white"}
                onClick={() => handleClick("who")}
              >
                The Who
              </Button>
            </HashLink>
            <HashLink to={"#sec2"}>
              <Button
                w={"200px"}
                h={"50px"}
                fontSize={"28px"}
                borderBottom={why ? "1px solid white" : ""}
                bgColor={"transparent"}
                _hover={{ backgroundColor: "transparent" }}
                color={"white"}
                onClick={() => handleClick("why")}
              >
                The Why
              </Button>
            </HashLink>
            <HashLink to={"#sec3"}>
              <Button
                w={"200px"}
                h={"50px"}
                fontSize={"28px"}
                borderBottom={what ? "1px solid white" : ""}
                bgColor={"transparent"}
                _hover={{ backgroundColor: "transparent" }}
                color={"white"}
                onClick={() => handleClick("what")}
              >
                The What
              </Button>
            </HashLink>
          </HStack>
        </VStack>
      </Box>
      <VStack
        className="gradint-color"
        paddingBlock={"40px"}
        backgroundImage={img}
        bgRepeat={"no-repeat"}
        backgroundSize={"cover"}
      >
        <Box id="sec1">
          <Heading textAlign={"center"} color={"white"} fontSize={"60px"}>
            <span style={{ color: "#03A9F4" }}>Who</span> we are?
          </Heading>
          <HStack p={"40px"}>
            <VStack
              w={"50%"}
              h={"100%"}
              gap={"20px"}
              p={"30px"}
              alignItems={"start"}
            >
              <Text color={"white"} fontSize={"32px"}>
                About <span style={{ color: "#03A9F4" }}>Company</span>
              </Text>
              <Heading fontSize={"50px"} color={"white"}>
                Your <span style={{ color: "#03A9F4" }}>EZ</span> Ticket to Cozy
                Stays!
              </Heading>
              <Text textAlign={"justify"} fontSize={"20px"} color={"white"}>
                About CompanyVivamus magna justo, lacinia eget consectetur sed,
                convallis at tellus. Praesent sapien massa, convallis a
                pellentesque nec, egestas non nisi. Nulla porttitor accumsan
                tincidunt. Donec rutrum congue leo eget malesuada.. Vivamus
                magna justo, lacinia eget consectetur sed, convallis at tellus.
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Nulla porttitor accumsan tincidunt. Donec rutrum congue
                leo eget malesuada.. Professional and Expert Roofing Contractor
              </Text>
            </VStack>
            <VStack
              w={"50%"}
              h={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image borderRadius={"12px"} w={"80%"} src={img2}></Image>
            </VStack>
          </HStack>
        </Box>
        <Box id="sec2" marginBlock={"30px"}>
          <Heading textAlign={"center"} color={"white"} fontSize={"60px"}>
            <span style={{ color: "#03A9F4" }}> Why choose </span> us
          </Heading>
          <HStack
            w={"full"}
            h={"fit-content"}
            p={"40px"}
            paddingBlock={"50px"}
            gap={"80px"}
          >
            <VStack
              border={"2px solid #03A9F4"}
              w={"300px"}
              h={"300px"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"20px"}
            >
              <Text fontSize={"50px"} color={"#03A9F4"}>
                <SiTicktick />
              </Text>
              <Text color={"white"} textAlign={"center"} fontSize={"40px"}>
                Verified results for your preferences
              </Text>
            </VStack>
            <VStack
              border={"2px solid #03A9F4"}
              w={"300px"}
              h={"300px"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"20px"}
            >
              <Text fontSize={"50px"} color={"#03A9F4"}>
                <FaHandshakeAngle />
              </Text>
              <Text color={"white"} textAlign={"center"} fontSize={"40px"}>
                Trusted partner of 50+ hostels
              </Text>
            </VStack>
            <VStack
              border={"2px solid #03A9F4"}
              w={"300px"}
              h={"300px"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"20px"}
            >
              <Text fontSize={"50px"} color={"#03A9F4"}>
                <IoPeople />
              </Text>
              <Text color={"white"} textAlign={"center"} fontSize={"40px"}>
                500+ students connected with us
              </Text>
            </VStack>
          </HStack>
        </Box>
        <Box id="sec3" mt={"30px"}>
          <Heading textAlign={"center"} color={"white"} fontSize={"60px"}>
            <span style={{ color: "#03A9F4" }}>What</span> we do?
          </Heading>
          <HStack flexDirection={"row-reverse"} p={"40px"}>
            <VStack
              w={"50%"}
              h={"100%"}
              gap={"20px"}
              p={"30px"}
              alignItems={"end"}
            >
              <Text color={"white"} fontSize={"32px"}>
                Our <span style={{ color: "#03A9F4" }}>Objective</span>
              </Text>
              <Heading fontSize={"50px"} color={"white"}>
                Providing the best services{" "}
              </Heading>
              <Text textAlign={"justify"} fontSize={"20px"} color={"white"}>
                About CompanyVivamus magna justo, lacinia eget consectetur sed,
                convallis at tellus. Praesent sapien massa, convallis a
                pellentesque nec, egestas non nisi. Nulla porttitor accumsan
                tincidunt. Donec rutrum congue leo eget malesuada.. Vivamus
                magna justo, lacinia eget consectetur sed, convallis at tellus.
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Nulla porttitor accumsan tincidunt. Donec rutrum congue
                leo eget malesuada.. Professional and Expert Roofing Contractor
              </Text>
            </VStack>
            <VStack
              w={"50%"}
              h={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image borderRadius={"12px"} w={"80%"} src={img3}></Image>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </>
  );
};

export default About;
