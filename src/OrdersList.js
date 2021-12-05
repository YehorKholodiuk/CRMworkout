import React from "react";
import {Table} from "reactstrap";
import OrderItem from "./OrderItem";

export default function OrdersList(props) {

    return (

        <Table stripped>
            <thead>
            <tr>
                <th>Name</th>
                <th>Services</th>
                <th>Price</th>
                <th>Prepaid</th>
                <th>Debt</th>
                <th>Create at</th>
                <th>Statuses</th>
            </tr>
            </thead>
            <tbody>
            {props.orders.map(el => <OrderItem order={el}/>)}

            </tbody>
        </Table>

    )
}


