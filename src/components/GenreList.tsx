import React from "react";
import useGenres, { Genres } from "../hook/useGenres";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { get } from "http";
import getCroppedImageUrl from "../services/image-url";

interface IProps {
  onSelectedGenre: (genre: Genres) => void;
}
export default function GenreList({ onSelectedGenre }: IProps) {
  const { data, isLoading,error } = useGenres();
  if(error) return null;
  if(isLoading) return<Spinner/>
  return (
    <List>
      {data.map((genre) => (
        <ListItem>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              paddingY={0.5}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontSize="13" textAlign="left" variant={'link'}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
