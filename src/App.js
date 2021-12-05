import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import CreateNewClient from "./CreateNewClient";
import 'bootstrap/dist/css/bootstrap.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [clients,setClients] = useState([{
    id: 1, name: 'Bill', address:'rue jsjdjd', phone:'22828-28388'
  }])

  const createNewClient = (name, address, phone) => {
    const newClients = [...clients, {id: uuidv4(),name,address, phone}]
    setClients(newClients)
  }

  const [orders, newOrders] = useState([
    {
      id:uuidv4(),
      clientName: 'Bill',
      service: {
        job: 'translate',
        employee: 'Greg',
        price: '100',
        createAt: '15.01.2021',
        prepaid: 50
      },
      sentToDo:{
        date:'',
        status:false},
      completed:{
        date:'',
        status:false},
      sayToClient:{
        date:'',
        status:false},
      clientReceived:{
        date:'',
        status:false},
      paid:{
        date:'',
        status:false},
    }
  ])
  return (
    <div className="container">
      <h1>Clients and Systems</h1>
    <CreateNewClient createNewClient={createNewClient}/>
      {clients.map( el => <li>{el.name}</li>)}
    </div>
  );
}

export default App;
