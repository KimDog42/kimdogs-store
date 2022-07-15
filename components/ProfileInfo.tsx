import React from 'react';
import { Avatar, Row, Col, Text, Button, Spacer, Grid } from "@nextui-org/react";

function ProfileInfo() {
  return (
    <div className="pr-20 flex">
        <div className="pr-20 flex">
        <Col>
          <Row>
            <Grid xs={12} direction="column" color="error">
              <Text className="user-twitter-card__text" b size={16} color="invert">
                KimDog
              </Text>
              <Text
                className="text-white"
                size={14}
                color="invert"
              >
                @KimDog
              </Text>
            </Grid>
          </Row>
        </Col>
        </div>
    </div>
  )
}

export default ProfileInfo