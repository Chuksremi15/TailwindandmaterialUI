import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginBottom: "20px",
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const styles = {
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
};
export default function Create() {
  const classes = useStyles();

  const history = useHistory();

  const [formValue, setFormValue] = useState({
    title: "",
    details: "",
    category: "todos",
  });
  const [titleError, setTitleError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!formValue.title) {
      setTitleError(true);
    } else {
      setTitleError(false);

      const res = await fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formValue),
      });

      if (res) {
        history.push("/");
      }
    }
  };

  return (
    <Container>
      <Typography variant="h4" color="textSecondary" gutterBottom>
        Create a New Note
      </Typography>

      <form onSubmit={onSubmit} noValidate autoComplete="off">
        <TextField
          onChange={(e) =>
            setFormValue({ ...formValue, title: e.target.value })
          }
          style={styles.field}
          color="secondary"
          label="Note Title"
          variant="outlined"
          error={titleError}
          fullWidth
        />
        <TextField
          style={styles.field}
          onChange={(e) =>
            setFormValue({ ...formValue, details: e.target.value })
          }
          color="secondary"
          label="Details"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />

        <FormControl style={styles.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={formValue.category}>
            <FormControlLabel
              control={<Radio color="secondary" />}
              onClick={(e) =>
                setFormValue({ ...formValue, category: e.target.value })
              }
              label="Money"
              value="money"
            />
            <FormControlLabel
              control={<Radio color="secondary" />}
              label="Todos"
              value="todos"
              onClick={(e) =>
                setFormValue({ ...formValue, category: e.target.value })
              }
            />
            <FormControlLabel
              control={<Radio color="secondary" />}
              label="Reminders"
              value="reminders"
              onClick={(e) =>
                setFormValue({ ...formValue, category: e.target.value })
              }
            />
            <FormControlLabel
              control={<Radio color="secondary" />}
              label="Work"
              value="work"
              onClick={(e) =>
                setFormValue({ ...formValue, category: e.target.value })
              }
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>

      {/* <Button
        className={classes.root}
        type="submit"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button> */}
    </Container>
  );
}
