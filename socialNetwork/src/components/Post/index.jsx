import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import DialogContentText from "@mui/material/DialogContentText";

import Content from "../Content/index";

//font-providers
import "../../style/fontsProviders.css";
//styled-components
import {
  ContainerPost,
  NameProfile,
  Box,
  ContentArea,
  Reactions,
} from "./style";

//images
import profile from "../../assets/profile-example.jpg";

// react icons
import { RxAvatar } from "react-icons/rx";
import { AiOutlineGlobal } from "react-icons/ai";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { GoComment } from "react-icons/go";
import { TbPointFilled } from "react-icons/tb";

function Post() {
  //material ui
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //segundo dialog material ui;
  const [open2, setOpen2] = useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [reactLike, setReactLike] = useState(false);
  return (
    <>
      <ContainerPost>
        <Box>
          <Stack direction="row" spacing={2} className="headerProfile">
            <Avatar alt="Remy Sharp" src={profile} onClick={handleClickOpen} />
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={profile}
                    style={{ marginRight: "1rem" }}
                  />{" "}
                  <strong>Name Example</strong>
                </div>
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography gutterBottom>
                  Olá, sou <strong>Name Example</strong>, atualmente faço
                  conteúdo digital <br />
                  sou facinado por esportes e por filmes; <br />
                  gosto muito da cultura pop e de músicas ecleticas;
                  <br />
                  <br />
                  <strong>Atuação</strong>: Criador de conteúdo <br />
                  <strong>Nascimento</strong>: 10/05/2000 <br />
                  <strong>Origem</strong>: Brasília <br />
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose}>
                  Fechar
                </Button>
              </DialogActions>
            </BootstrapDialog>

            <NameProfile onClick={handleClickOpen}>NameExample</NameProfile>
            <TbPointFilled className="iconPoint" />
            <small className="iconPoint">5d</small>
            <button className="button-header">teste</button>
          </Stack>
          <div className="sub-header">
            <AiOutlineGlobal className="icon-global" />
            <small className="iconPoint">Criador de conteúdo</small>
          </div>
          <ContentArea>
            <Content />
          </ContentArea>
          <Reactions>
            <div
              onClick={() => {
                reactLike === false ? setReactLike(true) : setReactLike(false);
              }}
            >
              {reactLike === true ? (
                <>
                  <FcLike />
                </>
              ) : (
                <>
                  <FcLikePlaceholder />
                </>
              )}
            </div>
            <GoComment className="react-icon" onClick={handleClickOpen2}/>
            <div>
              <Dialog open={open2} onClose={handleClose2}>
                <DialogTitle>Faça seu comentário!</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Exemp. Comente oque você achou interessante na publicação;
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Comentário"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose2}>Cancelar</Button>
                  <Button onClick={handleClose2}>Enviar</Button>
                </DialogActions>
              </Dialog>
            </div>
          </Reactions>
        </Box>
      </ContainerPost>
    </>
  );
}
export default Post;
