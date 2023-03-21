import { ContainerMain, NameProfile } from "./style";
import profile from "../../assets/profile-example.jpg";
//material ui
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function leftPortal() {
  return (
    <>
      <ContainerMain>
        <Stack
          direction="row"
          spacing={2}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar alt="Remy Sharp" src={profile} />
          <NameProfile>NameExample</NameProfile>
          <p className="details-profile">
            Olá, sou Name Example, atualmente faço conteúdo digital sou facinado
            por esportes e por filmes; gosto muito da cultura pop e de músicas
            ecleticas;
          </p>
        </Stack>
      </ContainerMain>
    </>
  );
}
export default leftPortal;
