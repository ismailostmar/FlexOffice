import React from "react";
import { Button, Card, CardBody, CardText, Form, FormGroup, Input } from "reactstrap";

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
                        </Form>
                        <a href="/confirmerReserve">
                            <Button tag="button" className="fw-semibold" color="danger" >
                                Confirmer
                            </Button>
                        </a>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}