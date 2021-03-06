import React from "react";
import {Input, Label} from "reactstrap";
export default function OrderItem(props){
const {order} = props;
    return(
        <tr>
            <th scope="row">{order.clientName}</th>
            <td>{order.service.job}</td>
            <td>{order.service.price}</td>
            <td>{order.paid.prepaid}</td>
            <td>{order.paid.debt}</td>
            <td>{order.service.createAt}</td>

            <td>{order.sentToDo.date}</td>
            <Input type="checkbox" />
            <td>
                <div>
                    <Label check>
                        In process: <input type="checkbox"/>
                    </Label>{order.sentToDo.date}

                    <Label check>
                        Job completed: <input type="checkbox"/>
                    </Label>{order.completed.date}


                    <Label check>
                        Say to client: <input type="checkbox"/>
                    </Label>{order.sayToClient.date}
                </div>



            </td>

        </tr>
    )
}