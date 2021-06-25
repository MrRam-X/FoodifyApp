import React from "react";

import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

function DefaultView(props) {
  return (
    <div>
      <Container
        fluid
        style={{
          margin: "5px",
          minWidth: "350px",
        }}
      >
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/c7/a9/f7/c7a9f758dd660d91d9fa92c98c225d45.jpg"
            />
            <Card.Body>
              <Card.Title>Search Foods</Card.Title>
              <Card.Text>
                Search for your desired food and make use of what we have to
                offer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Kebab.jpg"
            />
            <Card.Body>
              <Card.Title>Recipe & Ingredients</Card.Title>
              <Card.Text>
                Get your favourite food's recipe and ingredients included and
                start making mouth watering dishes with our help.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg"
            />
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <Card.Text>
                We provide all the needs of people to make special dishes at
                home with all the home ingredients. Your need is our service.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
}

export default DefaultView;
