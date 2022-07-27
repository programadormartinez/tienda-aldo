import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { firestore } from "../configurations/firebaseConfig";
import { CategoryContext } from "../context/CategoryContext";

const CategoriesComponent = () => {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    width: "100px",
    height: "100px",
    border: "0px solid black",
    boxShadow: "0px 0px 0px 0px",
    backgroundColor: "transparent",
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
    backgroundColor: "transparent",
  }));
  const Container = styled(Paper)(({ theme }) => ({
    margin: "auto",
    textAlign: "center",
    backgroundColor: "transparent",
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
    marginTop: 12,
  };

  const [categories, setCategories] = useState([]);
  const cat = useContext(CategoryContext);
  const getCategories = () => {
    getDocs(collection(firestore, "categories"))
      .then((querySnapshot) => {
        querySnapshot.docs.map((item) => {
          let category = item.data();
          category.id = item.id;
          const last_position = (cat) => {
            return [...cat, category];
          };
          setCategories(last_position);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const onClickCategory = (id) => {
    cat.setCategory(id);
  };

  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <Item key={0} onClick={() => onClickCategory('')}>
          <Image>
            <img src="../logo-tienda-aldo.png" style={styleImage}></img>
          </Image>
          <Text>Todos</Text>
        </Item>
        {categories?.length > 0 ? (
          categories?.map((item) => {
            return (
              <Item key={item.id} onClick={() => onClickCategory(item.id)}>
                <Image>
                  <img src={item.imagen} style={styleImage}></img>
                </Image>
                <Text>{item.name}</Text>
              </Item>
            );
          })
        ) : (
          <></>
        )}
      </Stack>
    </Container>
  );
};

export default CategoriesComponent;
