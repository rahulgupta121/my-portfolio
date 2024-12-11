import React from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import bluetail from "../../assets/projects/Bhaskar/ScribbleNet.png";
import chartcommando from "../../assets/projects/Bhaskar/M.Net.png";
import mitwpu from "../../assets/projects/Bhaskar/EDRI AND RVS.png";
import parul from "../../assets/projects/Bhaskar/iRASTE.jpg";
import snaptest from "../../assets/projects/Bhaskar/Drone Project.jpg";
import inifd from "../../assets/projects/Bhaskar/Wrongway Vehicles Detection.jpg";
import steg from "../../assets/projects/steg_500x300.jpeg";

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );
  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={chartcommando}
            projectName={"Chart Commando website"}
            // aboutProject={"A Realtime Chatting Application"}
            techStack={"Html, CSS, Js, JQuary, Bootstrap"}
            projectLiveLink="https://github.com/KBHASKAR306/MNet"
            projectLink="#"
          />
          <ProjectCard
            projectImage={mitwpu}
            projectName={"MIT WPU "} 
            // aboutProject={
            //   "An Advanced Medical-Healthcare Application To Analyse Medical Reports For Patients And Doctors"
            // }
            techStack={
              "JAVASCRIPT, PHP, HTML, BOOTSTRAP, CSS"
            }
            projectLiveLink="https://siddharthpilliinai.github.io/docs-1/"
            projectLink="#"
          />
          <ProjectCard
            projectImage={parul}
            projectName={"Parul Pathway"}
            // aboutProject={"A Blogging Website with User Authentication"}
            techStack={"JAVASCRIPT, PHP, HTML, BOOTSTRAP, CSS"}
            projectLiveLink="https://inai.iiit.ac.in/iraste.html"
            projectLink="#"
          />
          <ProjectCard
            projectImage={snaptest}
            projectName={"Snaptest Project"}
            // aboutProject={
            //   "Detection of Human Emotions from EEG signals using the AMIGOS Dataset"
            // }
            techStack={
              "JAVASCRIPT, PHP, HTML, BOOTSTRAP, CSS"
            }
            projectLink="https://inaix.iiit.ac.in/Mobility/ddm_demo#"
          />
          <ProjectCard
            projectImage={inifd}
            projectName={"INIFD Fashion website"}
            // aboutProject={
            //   "Translated Texts With The Help Of Encoder- Decoder LSTM Model And Attention Mechanism"
            // }
            techStack={"JAVASCRIPT, PHP, HTML, BOOTSTRAP, CSS"}
            projectLink="https://github.com/KBHASKAR306/Wrongway_Detection"
          />
          <ProjectCard
            projectImage={bluetail}
            projectName={"BlueTail Website"}
            // aboutProject={"Blockchain based warranty using NFT"}
            techStack={"Python, REACT JS, MONGODB, Bootstrap, CSS3"}
            projectLiveLink="#"
            projectLink="https://github.com/KBHASKAR306/ScribbleNet"
          />
        </SimpleGrid>
        {/* <Flex
          direction="row"
          justifyContent="center"
          alignItems="Center"
          mt="40px"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<BLOGS/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="50px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={steg}
            projectName={"Steganography Blog Part 1"}
            aboutProject={"This blog is about hiding text inside an Image"}
            projectLink="#"
          />
          <ProjectCard
            projectImage={steg}
            projectName={"Steganography Blog Part 2"}
            aboutProject={"This Blog is about hiding an Image inside an Image"}
            projectLink="#"
          />
        </SimpleGrid> */}
      </Box>
    </Box>
  );
}
