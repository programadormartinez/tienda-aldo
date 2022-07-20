import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import React from "react";

const CategoriesComponent = () => {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    width: "100px",
    height: "100px",
    border: "0px solid black",
    boxShadow: "0px 0px 0px 0px",
  }));

  const Image = styled(Paper)(({ theme }) => ({
    width: "80px",
    height: "80px",
    overflow: "hidden",
    textAlign: "center",
    objectFit: "contain",
    margin: "auto",
    marginBottom: 10,
    borderRadius: "100px",
    
  }));

  const Text = styled(Paper)(({ theme }) => ({
    color: "rgba(0, 0, 0, 0.6)",
    border: "0px solid black",
    boxShadow: "0px 0px 0px 0px",
  }));
  const Container = styled(Paper)(({ theme }) => ({
    margin: "auto",
    textAlign: "center",
    backgroundColor: "#fffff",
    width: "93%",
    padding: 30,
    marginTop: 20,
    marginBottom: 20,
    border: "0px solid black",
    boxShadow: "0px 0px 0px 0px",
  }));

  const styleImage = {
    width: "60px",
    height: "60px",
    margin: "auto",
    marginTop: 12
  };

  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <Item>
          <Image>
            <img src="./assets/remera-artesanal.jpg" style={styleImage}></img>
          </Image>
          <Text>Artesanal</Text>
        </Item>
        <Item>
          <Image>
            <img src="./assets/remera-artesanal.jpg" style={styleImage}></img>
          </Image>
          <Text>Artesanal</Text>
        </Item>
        <Item>
          <Image>
            <img src="./assets/remera-artesanal.jpg" style={styleImage}></img>
          </Image>
          <Text>Artesanal</Text>
        </Item>
        <Item>
          <Image>
            <img src="./assets/remera-artesanal.jpg" style={styleImage}></img>
          </Image>
          <Text>Artesanal</Text>
        </Item>
        <Item>
          <Image>
            <img src="./assets/remera-artesanal.jpg" style={styleImage}></img>
          </Image>
          <Text>Artesanal</Text>
        </Item>
        <Item>
          <Image>
            <img src="./assets/remera-artesanal.jpg" style={styleImage}></img>
          </Image>
          <Text>Artesanal</Text>
        </Item>
        <Item>
          <Image>
            <img src="./assets/remera-artesanal.jpg" style={styleImage}></img>
          </Image>
          <Text>Artesanal</Text>
        </Item>
        <Item>
          <Image>
            <img src="./assets/remera-artesanal.jpg" style={styleImage}></img>
          </Image>
          <Text>Artesanal</Text>
        </Item>
      </Stack>
    </Container>
  );
};


export default CategoriesComponent;
