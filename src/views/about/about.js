import React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Grid,
  useStyleConfig,
  Text,
  useColorModeValue,
  useColorMode,
  Icon,
  Button,
  Link
} from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MdFlightTakeoff } from "react-icons/md";
import { LiaDrumSolid } from "react-icons/lia";
import { GiCricketBat } from "react-icons/gi";
import Navbar from "../../components/Navbar/Navbar";
import routes from "../../routes";
import TechStackCard from "../../components/techStackCard/techStackCard";
import AboutMeInfo from "../../components/aboutMeInfo/aboutMeInfo";
import angular from "../../assets/icons/angular.svg";
import netlify from "../../assets/icons/netlify.svg";
import aws from "../../assets/icons/aws.png";
import typescript from "../../assets/icons/typescript.svg";
import node from "../../assets/icons/nodejs.svg";
import mongo from "../../assets/icons/mongodb.svg";
import js from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css3.svg";
import git from "../../assets/icons/git.svg";
import gitlab from "../../assets/icons/gitlab.svg";
import cpp from "../../assets/icons/c++.png";
import express from "../../assets/icons/express.svg";
import myphoto from "../../assets/dashboardgif.gif";
import GitHubCalendar from "react-github-calendar";


// new anna logo
import AI from "../../assets/icons/Bhaskar/resize/AI.jpg";
import AutoML from "../../assets/icons/Bhaskar/resize/AutoML.png";
// import B from "../../assets/icons/Bhaskar/resize/B.png";
import ChatGPT from "../../assets/icons/Bhaskar/resize/ChatGPT.png";
import DeepLearning from "../../assets/icons/Bhaskar/resize/Deep Learning.png";
import GenAI from "../../assets/icons/Bhaskar/resize/Gen AI.png";
import Langchain from "../../assets/icons/Bhaskar/resize/Langchain.png";
import NLP from "../../assets/icons/Bhaskar/resize/NLP.png";
import Numpy from "../../assets/icons/Bhaskar/resize/Numpy.jpeg";
import Pandas from "../../assets/icons/Bhaskar/resize/Pandas.png";
import PowerBI from "../../assets/icons/Bhaskar/resize/Power BI.png";
import Python from "../../assets/icons/Bhaskar/resize/Python.png";
import R from "../../assets/icons/Bhaskar/resize/R.jpeg";
import SQL from "../../assets/icons/Bhaskar/resize/SQL.jpeg";
import Scikit from "../../assets/icons/Bhaskar/resize/Scikit.png";
import Statistics from "../../assets/icons/Bhaskar/resize/Statistics.png";
import Tensorflow from "../../assets/icons/Bhaskar/resize/Tensorflow.png";
import computervision from "../../assets/icons/Bhaskar/resize/computer-vision.jpg";
import llm from "../../assets/icons/Bhaskar/resize/llm.jpg";
import machinelearning from "../../assets/icons/Bhaskar/resize/machine-learning.jpg";
import prompt from "../../assets/icons/Bhaskar/resize/prompt.png";
import pytorch from "../../assets/icons/Bhaskar/resize/pytorch.png";
import tableau from "../../assets/icons/Bhaskar/resize/tableau.png";
import bigdata from "../../assets/icons/Bhaskar/resize/Big-Data-Tools (1).png";



export default function About() {
  const styles = useStyleConfig("Card");
  const { colorMode } = useColorMode();
  const textColorPrimary = useColorModeValue("lightblue.100", "lightpeach.100");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
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
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          {/* <TypeAnimation
            sequence={["ABOUT ME", 500, "ABOUT", 500, "ABOUT ME", 500]}
            style={{ fontSize: "3em" }}
            cursor={false}
          /> */}
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1.34fr 1.62fr"
            }}
            templateRows={{
              lg: "1fr"
            }}
            gap={{ base: "20px", xl: "20px" }}
          >
            <Box
              position="relative"
              w={{ base: "100%", "3xl": "100%" }}
              h={{ base: "100%", "3xl": "250px" }}
              borderRadius="20px"
              p="20px"
              overflow="hidden"
            >
              <Box
                __css={styles}
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                bg={textColorPrimary}
                transform="rotate(4deg)"
                // zIndex="-1"
              />
              <LazyLoadImage
                src={myphoto}
                width="100%"
                height="100%"
                alt="Image Alt"
                effect="blur"
                style={{ height: "100%" }}
              />
            </Box>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box __css={styles} border="none" bg="transparent">
                <Text
                  color={textColorPrimary}
                  fontSize="2xl"
                  mb="40px"
                  textAlign="center"
                >
                  {"<GENERAL INFORMATION/>"}
                </Text>
                <SimpleGrid columns="2" gap="20px">
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Current Organization"
                    value="HCLTech, Bangalore"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Designation"
                    value="Senior Technical Lead"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Location"
                    value="Bangalore, Karnataka"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Education"
                    value="JNTU Anantapur"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Degree"
                    value="M.Tech"
                  />
                  <AboutMeInfo
                    boxShadow={cardShadow}
                    title="Languages" 
                    value="English, Telugu, Hindi"
                  />
                </SimpleGrid>
              </Box>
            </Flex>
          </Grid>
        </Flex>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY SKILLSET/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 3, xl: 6, "2xl": 6 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          {/* <TechStackCard imagepath={angular} /> */}
          <TechStackCard imagepath={Python} />
          <TechStackCard imagepath={R} />
          {/* <TechStackCard imagepath={typescript} /> */}
          {/* <TechStackCard imagepath={cpp} /> */}
          <TechStackCard imagepath={Statistics} />
          {/* <TechStackCard imagepath={aws} /> */}
          <TechStackCard imagepath={SQL} />
          <TechStackCard imagepath={Numpy} />
          <TechStackCard imagepath={Pandas} />
          <TechStackCard imagepath={Scikit} />
          <TechStackCard imagepath={Tensorflow} />
          <TechStackCard imagepath={pytorch} />
          <TechStackCard imagepath={machinelearning} />
          
          <TechStackCard imagepath={DeepLearning} />
          <TechStackCard imagepath={NLP} />
          <TechStackCard imagepath={computervision} />
          <TechStackCard imagepath={llm} />
          <TechStackCard imagepath={GenAI} />
          <TechStackCard imagepath={AutoML} />
          <TechStackCard imagepath={prompt} />
          <TechStackCard imagepath={Langchain} />
          <TechStackCard imagepath={ChatGPT} />
          <TechStackCard imagepath={PowerBI} />
          <TechStackCard imagepath={tableau} />
          <TechStackCard imagepath={bigdata} />
          <TechStackCard imagepath={git} />
          <TechStackCard imagepath={gitlab} />
        </SimpleGrid>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY GITHUB CONTRIBUTIONS/>"}
          </Text>
        </Flex>
        <Box display="flex" justifyContent="center" alignItems="center">
          <GitHubCalendar
            username="KBHASKAR306"
            colorScheme={colorMode === "light" ? "light" : "dark"}
            year="last"
          />
        </Box>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          {colorMode === "light" ? (
            <LazyLoadImage
              src="https://github.com/KBHASKAR306"
              alt="GitHub Streak"
              effect="blur"
            />
          ) : (
            <LazyLoadImage
              src="#"
              alt="GitHub Streak"
              effect="blur"
            />
          )}
        </Flex>
        <Flex justifyContent="center" alignItems="center" mt="20px">
          <Link href="https://github.com/KBHASKAR306" target="blank">
            <Button variant="darkBrand" fontSize="sm" fontFamily="DM Sans">
              Visit Github
            </Button>
          </Link>
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
          mt="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<MY INTERESTS AND HOBBIES/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, xl: 3, "2xl": 3 }}
          gap="20px"
          mb="20px"
          align={{ base: "center", xl: "center" }}
          justify={{ base: "center", xl: "center" }}
        >
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={MdFlightTakeoff}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Travelling & Exploring</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
            I have a passion for exploring new places and cultures through traveling, which fuels my sense of adventure.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={LiaDrumSolid}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Playing</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
            Playing cricket keeps me active and engaged.
            </Text>
          </Box>
          <Box __css={styles}>
            <Box textAlign="center">
              <Icon
                as={GiCricketBat}
                width="30px"
                height="30px"
                color="inherit"
              />
            </Box>
            <Text textAlign="center">Listening</Text>
            <Text color={textColorPrimary} textAlign="center" mt="5px">
            Listening to music and audiobooks provides a perfect balance of relaxation and intellectual stimulation.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
