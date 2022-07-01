import React from "react";
import { Button, Card, CardBody, CardText, Form, FormGroup, Input } from "reactstrap";
import { MapInteractionCSS } from 'react-map-interaction';
import Imagemap from "./ImageMapper";


export default function Etage() {
    return (
        <div>
            <div className="container mx-auto py-4">
                <Card body>
                    <CardBody>
                        <CardText className="fw-semibold cardTextB">
                            Choisissez votre position de travail
                        </CardText>
                        <Form>
                            <FormGroup>
                                <Input id="emplacement" name="emplacement" type="select">
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                </Input>
                            </FormGroup>
                            <MapInteractionCSS>
                                <Imagemap />
                            </MapInteractionCSS>
                        </Form>
                        <div className="text-center" id="divmargtop">
                            <a href="/confirmerReserve">
                                <Button tag="button" id="btnstyle" color="danger" >
                                    Confirmer
                                </Button>
                            </a>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}