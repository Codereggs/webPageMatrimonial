import { Button, Container, Link, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import "./Reserva.css";

const Reserva = () => {
  const [open, setOpen] = useState(false);
  const style = {
    compStyle: {
      margin: "1.5rem auto",
    },
    modalStyle: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      textAlign: "center",
    },
    boxStyle: {
      textAlign: "center",
      display: "inherit",
      alignItems: "inherit",
      justifyContent: "inherit",
      flexDirection: "column",
      flexWrap: "wrap",
      margin: "1rem",
    },
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let whatsappdirRafa = process.env.REACT_APP_PRIVATE_DIR1,
    whatsappdirMary = process.env.REACT_APP_PRIVATE_DIR2;
  return (
    <section className="reserva" id="reserva">
      <Container className="rContainer">
        <Typography variant="h2" style={style.compStyle} color="#f87c5a">
          RSVP
        </Typography>
        <Typography variant="h5" style={style.compStyle} color="secondary">
          - Se ruega por favor confirmar antes del 16 de Noviembre -
        </Typography>
        <Typography variant="h5" style={style.compStyle} color="secondary">
          ¡Contáctanos por Whatsapp para confirmar tu asistencia!
        </Typography>

        <Link
          underline="none"
          style={{
            display: "inherit",
            alignItems: "inherit",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1" component="label" color="#000">
            Hacé click para confirmar
          </Typography>
          <Button
            style={{
              backgroundColor: "#25cc64",
              margin: "1.5rem auto",
              color: "#fff",
            }}
            onClick={handleOpen}
            variant="contained"
          >
            <BsWhatsapp className="rWIcon" />
          </Button>
        </Link>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style.modalStyle}>
            <Box sx={style.boxStyle}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ fontWeight: "600" }}
              >
                Confirmar con Rafa
              </Typography>
              <Link
                href={whatsappdirRafa}
                underline="none"
                target="_blank"
                rel="noopener"
                className="fechaLink"
              >
                <Button variant="contained"> 🧔</Button>
              </Link>
            </Box>
            <Box sx={style.boxStyle}>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ fontWeight: "600" }}
              >
                Confirmar con Mary
              </Typography>
              <Link
                href={whatsappdirMary}
                underline="none"
                target="_blank"
                rel="noopener"
                className="fechaLink"
              >
                <Button variant="contained">👩</Button>
              </Link>
            </Box>
          </Box>
        </Modal>
      </Container>
    </section>
  );
};

export default Reserva;
