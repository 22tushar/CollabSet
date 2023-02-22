import React, { useState , useEffect , useSelector } from 'react';
import './requests.css'
import { url } from '../../slices/api';
import axios from 'axios';
import { Experimental_CssVarsProvider } from '@mui/material';
import { toast } from 'react-toastify';
 
const Companies = () => {

  const [company,Setcompany]=useState([])
  // const auth = useSelector((state) => state.auth);
  useEffect(()=>{
    const fetchPosts = async ()=>{
        await axios.get(`${url}/allrequest/allCampany`)
        .then(res=>{
          Setcompany(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }
    fetchPosts()
    // console.log(auth)
},[])


  const sendRequest = async (email) => {

    try {
         await axios.post(`${url}/allrequest/ReqSent`, {
         email:email,
        });
        console.log("Sent");
        // toast.success("Request Sent", { position: "Top-right" });
      } catch (error) {
        console.log("Not sent");
      }
     
      alert("request Sent")
  }
  return (
    <div className='section-center-people-search'>
      {company.map((listitem) => {
        const { id, name, desc , email } = listitem;
        return (
          <article key={id} className='menu-item'>
            <img src='https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg' alt={name} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{name}</h4>
                {/* <h4 className='price'>{skills}</h4> */}
                <h4 className="email">{desc}</h4>
                <h4 className="email">{email}</h4>
              </header>
            </div>
            <button className="sendrequest" onClick={() => sendRequest(email)}>Send Request</button>

          </article>
        );
      })}
    </div>
  );
};

export default Companies;