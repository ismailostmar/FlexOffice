import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function Confirmation() {
    return (
        <div>
            <div className="container mx-auto py-4">
                <Card body>
                    <CardBody>
                        <div className="text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100"
                                height="100"
                                fill="#3fb678"
                                class="bi bi-patch-check-fill"
                                viewBox="0 0 16 16"
                            >
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                            </svg>
                        </div>
                        <br />
                        <CardTitle tag="h3" id="confirm">
                            Réservation confirmée !!
                        </CardTitle>
                        <CardText className="text-center" id="loremtext">
                            lorem ipsum dolor sit amet, est purto audiam albucious te. Mea
                            erant iruire sententuia te, per choro accusamos consequuntur ei.
                        </CardText>
                    </CardBody>
                    <div className="text-center" id="divmargtop">
                        <a href="/">
                            <Button tag="button" id="btnstyle" color="danger">
                                Suivant
                            </Button>
                        </a>
                    </div>
                </Card>
            </div>
        </div>
    );
}
