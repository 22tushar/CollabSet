import React, { useEffect,useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import './List.css'

import axios from "axios";

function createData(name, username, email, phone, website) {
    return { name, username, email, phone, website };
}

const rows = [];

export default function DynamicTable() {
    const [data, setData] = useState([]);

    const fetchPosts = async () => {
        await axios.get(`https://sheet.best/api/sheets/235ffc4f-de59-44bd-97d7-9eb35d910664`)
            .then(res => {
                setData(res.data);
                console.log(data);
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <>
        <div className="buttonclass">
            <button onClick={()=>fetchPosts()}>Show Student Data</button>
        </div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Student</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Branch</TableCell>
                            <TableCell align="right">Company</TableCell>
                            <TableCell align="right">Year of Graduation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.sname}
                                </TableCell>
                                {/* <TableCell align="right">{row.sname}</TableCell> */}
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.branch}</TableCell>
                                <TableCell align="right">{row.company}</TableCell>
                                <TableCell align="right">{row.graduation}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}