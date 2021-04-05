import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import CourseTab from './Tabs/CourseTab'
import TabContainer from './Tabs/Tab'
import './UserDashboard.css'

const UserDashboard = () => {
    return (
        <div className="main-wrapper">
           <div className="dashboard-wrapper">
               
          
             <TabContainer />
            {/* <Footer /> */}
           
           </div>
           
        </div>
    )
}

export default UserDashboard
