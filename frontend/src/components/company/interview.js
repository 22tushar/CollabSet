import React, { useState, useEffect } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, PieChart, Pie } from 'recharts';
import './Seedatac.css'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  studentgraphs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    '& button': {
      margin: theme.spacing(1),
    },
    '& div': {
      margin: theme.spacing(1),
      width: 500,
      height: 400,
    }
  },
  company_graphs_title: {
    textAlign: 'center',
    margin: theme.spacing(2),
  },
  companygraphs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    '& div': {
      margin: theme.spacing(1),
      width: 500,
      height: 400,
    }
  },
  showButton:{
    marginLeft: '226px',
    color:'black',
    fontSize:'15px',
    backgroundColor:'lawngreen',
    fontWeight:'500',
    padding:'2px 15px',
    borderRadius:'20px',
    boxShadow:'10px 4px 7px lightblue',
  }
}));

var avg_frequency = {};
var high_frequency = {};
var total_frombranch = {};
var comp_total = {};
var comp_avg = {};
var comp_high = {};
var all_companies = [];

function sortByFrequency(array) {
    var b, pkg;

    for (var i = 0; i < array.length; i++) {
        b = array[i].branch;
        if (b in total_frombranch) {
            total_frombranch[b]++;
        }
        else {
            total_frombranch[b] = 1;
        }
    }
    return total_frombranch;
}

function totalpackage(array) {
    var b, pkg;
    for (var i = 0; i < array.length; i++) {
        b = array[i].branch;
        pkg = parseInt(array[i].package);
        if (b in avg_frequency) {
            avg_frequency[b] += pkg;
        }
        else {
            avg_frequency[b] = pkg;
        }
    }
    return avg_frequency;
}

function highestpackage(array) {
    var b, pkg;
    for (var i = 0; i < array.length; i++) {
        b = array[i].branch;
        pkg = parseInt(array[i].package);
        if (b in high_frequency) {
            if (high_frequency[b] < pkg) {
                high_frequency[b] = pkg;
            }
        }
        else {
            high_frequency[b] = pkg;
        }
    }
    // console.log(high_frequency);
    return high_frequency;
}

function comptotalselections(array) {
    var b, pkg;

    for (var i = 0; i < array.length; i++) {
        b = array[i].company;
        if (b in comp_total) {
            comp_total[b]++;
        }
        else {
            comp_total[b] = 1;
        }
    }

    for (b in comp_total) {
        // console.log(b);
        all_companies.push(b);
    }

    return comp_total;
}

function comptotalpackage(array) {
    var b, pkg;
    for (var i = 0; i < array.length; i++) {
        b = array[i].company;
        pkg = parseInt(array[i].package);
        if (b in comp_avg) {
            comp_avg[b] += pkg;
        }
        else {
            comp_avg[b] = pkg;
        }
    }
    return comp_avg;
}

function comphighestpackage(array) {
    var b, pkg;
    for (var i = 0; i < array.length; i++) {
        b = array[i].company;
        pkg = parseInt(array[i].package);
        if (b in comp_high) {
            if (comp_high[b] < pkg) {
                comp_high[b] = pkg;
            }
        }
        else {
            comp_high[b] = pkg;
        }
    }
    return comp_high;
}


const Interview = () => {

    const [branchdata, setBranchdata] = useState([]);
    const [packagedata, setPackagedata] = useState([]);
    const [highestdata, setHighestdata] = useState([]);
    const branches = ['Computer', 'Electronics', 'Electrical', 'Mechanical', 'Chemical', 'Civil', 'MSME'];

    const [student, setStudent] = useState({});

    function showData() {

        const fetchPosts = async () => {
            await axios.get(`https://sheet.best/api/sheets/235ffc4f-de59-44bd-97d7-9eb35d910664`)
                .then(res => {
                    setStudent(res.data);
                    console.log(student);
                }).catch(err => {
                    console.log(err);
                })
        }
        fetchPosts()
        console.log(student);
        setBranchdata(sortByFrequency(student));
        setPackagedata(totalpackage(student));
        setHighestdata(highestpackage(student));
        comptotalselections(student);
        comptotalpackage(student);
        comphighestpackage(student);
    }

    const branchandfreq = branches.map((currentValue, index) => {
        return {
            id: index,
            branch_name: branches[index],
            branch_freq: total_frombranch[branches[index]],
            branch_avg: (avg_frequency[branches[index]] / total_frombranch[branches[index]]),
            branch_high: high_frequency[branches[index]],
        }
    })

    const fullcompanydata = all_companies.map((currentValue, index) => {
        return {
            id: index,
            company_name: all_companies[index],
            company_selections: comp_total[all_companies[index]],
            company_avgpay: (comp_avg[all_companies[index]] / comp_total[all_companies[index]]),
            company_highpay: comp_high[all_companies[index]],
        }
    })
    // console.log(fullcompanydata);
    // console.log(branchandfreq);
    const classes =useStyles()
    return (<>
        <div className='classes.studentgraphs'>
            <h1>Previous Year student Data of this college</h1>
            <button className={classes.showButton} onClick={() => { showData() }}>Show Statistics</button>
            <div>
                <BarChart width={500} height={400} data={branchandfreq}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="branch_name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="branch_freq" fill="#8884d8" />
                </BarChart>
            </div>

            <div>
                <BarChart width={500} height={400} data={branchandfreq}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="branch_name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="branch_avg" fill="#454B1B" />
                </BarChart>
            </div>

            <div>
                <BarChart width={500} height={400} data={branchandfreq}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="branch_name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="branch_high" fill="#00FF00" />
                </BarChart>
            </div>
        </div>

        <div className="classes.company_graphs_title">
            <h3>Company Trends in recent years</h3>
        </div>

        <div className="classes.companygraphs">
            <div>
                <BarChart width={500} height={400} data={fullcompanydata}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="company_name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="company_selections" fill="#8884d8" />
                </BarChart>
            </div>

            <div>
                <BarChart width={500} height={400} data={fullcompanydata}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="company_name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="company_avgpay" fill="#454B1B" />
                </BarChart>
            </div>

            <div>
                <BarChart width={500} height={400} data={fullcompanydata}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="company_name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="company_highpay" fill="#00FF00" />
                </BarChart>
            </div>
        </div>
    </>
    )
}

export default Interview