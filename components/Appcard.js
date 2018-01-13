import React from 'react';


const AppCard = ({ data }) =>



    <div className="oss-card">
        <div className="shade"></div>
        <div className="header">
            <h3 className="pull-left"> {data.title} </h3>
            <img src={data.img} className="logo pull-right"/>
        </div>
        <hr className="colors" />
        <div className="creator"> by <span className="creator-id"> {data.creator} </span> </div>
        <div className="about">
            <p>
                {data.about}     
           </p>
            <div className="link">
                <a href={data.link}>
                    <button> Github </button>
                </a>
            </div>
        </div>
    </div>




export default AppCard;