import React, {useState, useEffect} from "react";
import { Box, HStack, Badge, Image, StarIcon,Grid,GridItem} from "@chakra-ui/react"
import {AirbnbExample} from "../components/AirbnbExample"

function siplifySampleData(allSearchResult){
  return allSearchResult.List.map(function (allData) {
    return {listId    : allData.ListingId, 
            listTitle : allData.Title, 
            listPrice : allData.BuyNowPrice,
            listPic   : allData.PictureHref };
  })
}

export const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

    useEffect(async () => {
      const response = await fetch('/Sample-Api.json').then(response => response.json());
      
      setSearchResults (siplifySampleData(response));
    }, [])
return (
<Grid
  h="200px"
  templateRows="repeat(2, 1fr)"
  templateColumns="repeat(2, 1fr)"
  gap={4}
>
  <GridItem bg="tomato" />
  
  <GridItem rowSpan={2} bg="papayawhip" >
  {searchResults.map((searchResult) => 
      (<div> 
        <img src={searchResult.listPic}/>
       <p> {searchResult.listTitle}</p>
       <p>
        ${searchResult.listPrice}</p>
        </div>))}
  </GridItem>
  <GridItem bg="yellow" />  
  
  
</Grid>
);
};
