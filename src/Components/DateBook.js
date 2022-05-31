import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Button } from "reactstrap";
import { DateRange } from "react-date-range";
import fr from "date-fns/locale/fr";
import { addDays, isWeekend } from "date-fns";

/* Dans cette fonction je clacule les jours de fin de semaine pour les désactiver*/

function calcWeekends(startDate, endDate) {
    if (startDate > endDate) return false;
    var date = startDate;
    var dates = [];

    while (date < endDate) {
        if (isWeekend(date)) dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

    return dates;
}

const disabledDates = calcWeekends(new Date(), addDays(new Date(), 100));

function DateBook() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: "selection",
        },
    ]);

    return (
        <div>
            <div className="container mx-auto py-4">
                <Card body>
                    <CardBody>
                        <CardTitle tag="h5" className="fw-bold cardTextB">
                            Choisissez les dates prévus pour votre présence sur site
                        </CardTitle>
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                            locale={fr}
                            rangeColors={["#3d550c"]}
                            disabledDates={disabledDates}
                        />
                        <div className="text-center" id="divmargtop">
                            <a href="/choisirLetage">
                                <Button tag="button" id="btnstyle" color="danger">
                                    Suivant
                                </Button>
                            </a>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default DateBook;
