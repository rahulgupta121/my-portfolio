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
import bluetail from "../../assets/projects/bluetail.png";
import chartcommando from "../../assets/projects/chartcommando.png";
import mitwpu from "../../assets/projects/mitInter.png";
import parul from "../../assets/projects/parulpathway.png";
import snaptest from "../../assets/projects/project-1.png";
import inifd from "../../assets/projects/project3.png";
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
            projectLiveLink="https://online.chartcommando.com/webinar/"
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
            projectLiveLink="https://admissions.mitwpu.edu.in/international/"
            projectLink="#"
          />
          <ProjectCard
            projectImage={parul}
            projectName={"Parul Pathway"}
            // aboutProject={"A Blogging Website with User Authentication"}
            techStack={"JAVASCRIPT, PHP, HTML, BOOTSTRAP, CSS"}
            projectLiveLink="https://paruluniversity.ac.in/pathwayprograms_2023/"
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
            projectLink="https://www.snaptest.org/"
          />
          <ProjectCard
            projectImage={inifd}
            projectName={"INIFD Fashion website"}
            // aboutProject={
            //   "Translated Texts With The Help Of Encoder- Decoder LSTM Model And Attention Mechanism"
            // }
            techStack={"JAVASCRIPT, PHP, HTML, BOOTSTRAP, CSS"}
            projectLink="https://staging-web.srv.media/inifd-kothrud-microwebsite-3/"
          />
          <ProjectCard
            projectImage={bluetail}
            projectName={"BlueTail Website"}
            // aboutProject={"Blockchain based warranty using NFT"}
            techStack={"Python, REACT JS, MONGODB, Bootstrap, CSS3"}
            projectLiveLink="#"
            projectLink="#"
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
