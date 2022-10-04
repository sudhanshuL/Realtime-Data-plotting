import React from "react";
import { parse } from "papaparse";
import { useNavigate } from 'react-router-dom' ;
import axios from 'axios';

export default function Csv() {
    const navigate = useNavigate();
    const [highlighted, setHighlighted] = React.useState(false);
    const [contacts, setContacts] = React.useState([
        { email: "fake@gmail.com", name: "Fake" },
    ]);

    const addreturn = async () => {
        var formField = new FormData();
        
            contacts.map(async(contact) => (
                formField.append('date', contact.date),
                formField.append('returns', contact.returns),
                formField.append('equity_id', contact.equity_id),
                formField.append('open', contact.open),
                formField.append('high', contact.high),
                formField.append('low', contact.low),
                formField.append('close', contact.close),
                formField.append('adj_close', contact.adj_close),
                // console.log(formField.getAll()),
                await axios({
                    method: 'post',
                    url:'http://localhost:8000/returns/',
                    data: formField
                  }).then(response=>{
                    console.log(response.data);
                    
                    navigate("/")
                  })
                
            ))

        

    }

    return (
        <div>
            <br></br>
            <h1 className="text-center text-4xl">Upload CSV </h1>
            <div
                className="custom-btn btn-6"
                onDragEnter={() => {
                    setHighlighted(true);
                }}
                onDragLeave={() => {
                    setHighlighted(false);
                }}
                onDragOver={(e) => {
                    e.preventDefault();
                }}
                onDrop={async(e) => {
                    e.preventDefault();
                    setHighlighted(false);

                    Array.from(e.dataTransfer.files)
                        .filter((file) => file.type === "text/csv")
                        .forEach(async (file) => {
                            const text = await file.text();
                            const result = parse(text, { header: true });
                            await setContacts((existing) => [...existing, ...result.data]);
                        });
                }}
            >
                <br></br>
                DROP HERE
            </div>
            {/* Drop above
            <ul>
                {contacts.map((contact) => (

                    <li key={contact.equity_id}>
                        <strong>{contact.open}</strong>: {contact.date}
                    </li>
                ))}
            </ul> */}
            <br>
            </br>
            <br>
            </br>
            <button className="custom-btn btn-5" onClick={addreturn}>Confirm Upload ✅</button>
        </div>
    );
}