import React, { useState, useEffect } from "react";
import {
  Box,
  HStack,
  Badge, Center,
  Image,
  StarIcon,
  Grid,
  GridItem,
  grid,
} from "@chakra-ui/react";
import { AirbnbExample } from "../components/AirbnbExample";

const chores = [
  {name: "Vaccuming",            money: 10,  img: "/img/vaccum.jpg"},
  {name: "Clean Your Room",      money: 10,  img: "/img/Clean your room.jpg"},
  {name: "Dishes",               money: 10,  img: "/img/dishes.jpg"},
  {name: "Fold Clothes",         money: 10,  img: "/img/fold clothes.jpg"},
  {name: "Take The Rubbish out", money: 10,  img: "/img/Rubbish.jpg"},

]

function siplifySampleData(allSearchResult) {
  return allSearchResult.List.map(function (allData) {
    return {
      listId: allData.ListingId,
      listTitle: allData.Title,
      listPrice: allData.BuyNowPrice,
      listPic: allData.PictureHref,
    };
  });
}

export const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(async () => {
    const response = await fetch("/Sample-Api.json").then((response) =>
      response.json()
    );

    setSearchResults(siplifySampleData(response));
  }, []);
  return (
    <div>
    <Box w="100%" p={4} color="#60BB77">
      <img style={{width:'50px', height:'50px' }} src="/Img/logo.png"/>
      <span style={{fontSize:"180%", marginLeft:"30px"}}>Money101</span>
    </Box>
    <Grid
      h="60vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
    >
      <GridItem style={{marginLeft:"30px" , marginDown:"40px",paddingDown:"40px",borderBottom:"1px solid"}} bg="white">
      <h1 style={{textAlign:"center",color:"#60BB77"}}>Ways to earn</h1>
      <Grid templateColumns="repeat(3, 1fr)">
        {chores.map((chore) => (
          <GridItem>

          <img src={chore.img} style={{width:'100px', height:'100px' }}  />
          <p>{chore.name}</p>
          <p>{chore.money}</p>
            
          </GridItem>
        ))}
        </Grid>
        </GridItem>
        


      <GridItem rowSpan={2} style={{ overflow: "scroll" , marginLeft:"20px",paddingLeft:"50px",marginDown:"40px",borderLeft:"1px solid"}} bg="white">
      <h1 style={{textAlign:"center",color:"#60BB77"}}>Choose a Savings Goal</h1>
        <Grid templateColumns="repeat(2, 1fr)">
          {searchResults.map((searchResult) => (
            <GridItem >
              <img src={searchResult.listPic} />
              <p style={{paddingRight:"50px"}}> {searchResult.listTitle}</p>
              <p style={{paddingRight:"50px"}}>${searchResult.listPrice}</p>
            </GridItem>
          ))}
        </Grid> 
      </GridItem> 

      <GridItem bg="white"  >
        <h1 style={{textAlign:"center",color:"#60BB77"}}>My Progress</h1>
      <Grid
      h="60vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
    >
      <GridItem >
        <img src="/Img/starChart.png" style={{width:"100%"}}/>
      </GridItem>
      <GridItem >
        <Box h="100%" bg="grey">
        <Center h="100%">
        <h2 style={{color:"white"}}>$28 /$100</h2>
        </Center>
        </Box>
      </GridItem>
      </Grid>
      </GridItem>   
    </Grid>
    </div>
  );
};
