import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Form, FormGroup, Input } from 'reactstrap';
import { Button } from 'reactstrap';

function Acceuil() {
    return (
        <div>
            <div className='container mx-auto py-4'>
                <Card body>
                    <CardBody>
                        <CardTitle tag="h5" className="fw-bold text-danger">
                            Flex Office At
                        </CardTitle>
                        <CardImg src="images/sgabs.png" className="w-25 p-3" />
                        <CardText className="fw-semibold cardTextB">
                            Bienvenue sur votre nouveau Flex Office At SG-ABS
                        </CardText>
                        <CardText>
                            */*/*/*/*/*/*/*/*/*/*/*/*/*/**/*/*/*/*/*/*/*/*/*/*/ */
                        </CardText>
                        <Form inline>
                            <FormGroup>
                                <Input
                                    id="nom"
                                    name="nom"
                                    type="text"
                                    placeholder="Votre Nom"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    id="prenom"
                                    name="prenom"
                                    type="text"
                                    placeholder="Votre Prenom"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    id="fonction"
                                    name="fonction"
                                    type="text"
                                    placeholder="Votre Fonction"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    id="domaine"
                                    name="domaine"
                                    type="select"
                                >
                                    <option>CBS</option>
                                    <option>HACKLAB</option>
                                    <option>DIGITAL FACTORY</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    id="pole"
                                    name="pole"
                                    type="select"
                                >
                                    <option>CBS</option>
                                    <option>HACKLAB</option>
                                    <option>DIGITAL FACTORY</option>
                                </Input>
                            </FormGroup>
                        </Form>
                        <a href="/choisirLaDate">
                            <Button tag="button" className="fw-semibold" color="danger">
                                Suivant
                            </Button>
                        </a>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default Acceuil;