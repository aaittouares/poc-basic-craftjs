import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";

import { Toolbox } from "../components/Toolbox";
import { SettingsPanel } from "../components/SettingsPanel";
import { Topbar } from "../components/Topbar";

import { Container } from "../components/user/Container";
import { Button } from "../components/user/Button";
import { Card, CardTop, CardBottom } from "../components/user/Card";
import { Text } from "../components/user/Text";

import { Editor, Frame, Element } from "@craftjs/core";

export default function App() {
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor resolver={{ Card, Button, Text, Container, CardTop, CardBottom }}>
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Topbar />
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas> {/* Canvas Node of type Container, droppable*/}
                <Card /> {/* Node of type Card*/}
                <Button text="Click me" size="small" variant="outlined"> {/* Node of type Button, draggable*/}
                  Click
                </Button>
                <Text size="small" text="Hi world!" /> {/* Node of type Text, draggable*/}
                <Element is={Container} padding={2} background="#999" canvas> {/* Canvas Node of type Container, droppable and draggable*/}
                  <Text size="small" text="It's me again!" /> {/* Node of type Text, draggable*/}
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
