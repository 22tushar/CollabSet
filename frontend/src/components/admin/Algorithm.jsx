import React, { useState, useEffect } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';
import axios from 'axios';
import { url } from '../../slices/api';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  bar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#8884d8',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}));


var frequency = {};

function sortByFrequency(array) {
    var value;

    for (var i = 0; i < array.length; i++) {
        value = array[i].skill;
        if (value in frequency) {
            frequency[value]++;
        }
        else {
            frequency[value] = 1;
        }
    }


    var uniques = [];
    for (value in frequency) {
        uniques.push(value);
    }

    function compareFrequency(a, b) {
        return frequency[b] - frequency[a];
    }

    return uniques.sort(compareFrequency);
}

const Algorithm = () => {

    const [graphdata, setGraphdata] = useState([]);
    const [allskill, setskill] = useState([]);

    useEffect(() => {
        const fetchSkills = async ()=>{
            await axios.get(`${url}/allrequest/getskills`)
            .then(res=>{
                setskill(res.data);
                console.log(res.data)
            }).catch(err=>{
                console.log(err);
            })
        }
        fetchSkills();
        // console.log(company)
    }, []);

    const ShowData = () => {
        setGraphdata(sortByFrequency(allskill));
    }

    const skillandfreq = graphdata.map((currentValue, index) => {
        return {
            id: index,
            skill_name: graphdata[index],
            skill_freq: (frequency[graphdata[index]]/allskill.length)*100,
        }
    })
    console.log(skillandfreq);
    const classes = useStyles();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className={classes.bar}>
            <button className={classes.button} onClick={() => ShowData()}>ShowData </button>
            <BarChart width={800} height={400} data={skillandfreq}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="skill_name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="skill_freq" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      );
}

export default Algorithm