import React, {useState} from 'react'
import { Container, Row, Col, Tab,Tabs, Nav} from 'react-bootstrap';
import { Styles } from '../../styles/course.js';
import './Tab.css'
import {CourseDataList, CourseDataLists, CourseData} from './data'
import CoursePrice from '../CoursePrice.js';
import MyCourses from './MyCourses.js';
import { Grid, List } from 'react-feather';

import {Link} from 'react-router-dom'


const TabContainer = () => {

    const [toggleGridList, setToggleGridList] = useState(false)

    const toggle = ()=>{
        setToggleGridList((previous)=> !previous)
    }

    return (
     
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="mylearning-title">
                        <h4>My Learning</h4>
                    </div>
                </div>
            </div>
          <div className="row">
           <div className="col-md-2 col-sm-12">
               <div className="filter-sidebar"> 
               <CoursePrice filterType='Sort By:' filtername='Sort Fields' /><br /> 
                <CoursePrice  filterType='Filter By:' filtername='Category'/>
                <CoursePrice filtername='Program'/>
                <CoursePrice  filtername='Learning Partner'/>
                <CoursePrice  filtername='Ownership'/>
               </div>
          </div>
        <div className="col-md-10 col-sm-12 mt-sm-4">
            
            
 <Tabs defaultActiveKey="allcourses" id="uncontrolled-tab-example">
  <Tab eventKey="allcourses" title="All Courses">
  <div className="toggleBtn">
            <div className="d-flex justify-content-end" >
                <div className="toggle-icon" onClick={toggle}>
                        {toggleGridList ? <Grid  size={15} />: <List  size={15} />} { toggleGridList ? " View as List": " View as Grid"}</div>   
                </div>
            </div>
     {toggleGridList ?
     <MyCourses /> : 
  <div className="table-responsive table-wrapper">         
        <table className="table table-borderless">
        <thead>
            <tr>
            <th scope="col">Course Code</th>
            <th scope="col">Course Name</th>
            <th scope="col">Instructor Name</th>
            <th scope="col">Learning Partner</th>
            <th scope="col">Category</th>
            <th scope="col">Program</th>
            <th scope="col">Ownership</th>
            <th scope="col">Start Date</th>
            <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
                {CourseDataList.map((course, i)=>(
                    <tr key={i}>
                    <td >{course.coursecode}</td>
                    <td><Link to=''><strong>{course.coursename}</strong></Link></td>
                    <td>{course.instructorname}</td>
                    <td>{course.Learningpartner}</td>
                    <td>{course.startdate}</td>
                    <td>{course.startdate}</td>
                    <td>{course.ownership}</td>
                    <td>
                    {course.startdate}
                    </td>
                    
                    <td><div className="alert alert-success">{course.status}</div></td>
                    </tr> 

                ))}    
            </tbody>
            </table>
        </div>  
        }
   
  </Tab>
  <Tab eventKey="activecourses" title="Active Courses">
  <div className="toggleBtn">
            <div className="d-flex justify-content-end" >
                <div className="toggle-icon" onClick={toggle}>
                        {toggleGridList ? <Grid  size={15} />: <List  size={15} />} { toggleGridList ? " View as List": " View as Grid"}</div>   
                </div>
            </div>
            {toggleGridList ?
     <MyCourses /> :
   <div className="table-responsive table-wrapper">
         
   <table className="table table-borderless responsive">
                                           <thead>
                                               <tr>
                                               <th scope="col">Course Code</th>
                                               <th scope="col">Course Name</th>
                                               <th scope="col">Instructor Name</th>
                                               <th scope="col">Learning Partner</th>
                                               <th scope="col">Category</th>
                                               <th scope="col">Program</th>
                                               <th scope="col">Ownership</th>
                                               <th scope="col">Start Date</th>
                                               <th scope="col">Status</th>


                                               </tr>
                                           </thead>
                                           <tbody>
                                               {CourseDataList.map((course, i)=>(
                                                   <tr key={i}>
                                                   <td >{course.coursecode}</td>
                                                   <td><Link to="/"><strong>{course.coursename}</strong></Link></td>
                                                   <td>{course.instructorname}</td>
                                                   <td>{course.Learningpartner}</td>
                                                   <td>{course.startdate}</td>
                                                   <td>{course.startdate}</td>
                                                   <td>{course.ownership}</td>
                                                   <td>
                                                   {course.startdate}
                                                    </td>
                                                  
                                                  <td><div className="alert alert-success">{course.status}</div></td>
                                                  </tr> 

                                               ))}
                                               
                                               
                                           </tbody>
                                           </table> 
   </div>}
  </Tab>
  <Tab eventKey="upcomingcourses" title="Upcoming Courses">
  <div className="toggleBtn">
            <div className="d-flex justify-content-end" >
                <div className="toggle-icon" onClick={toggle}>
                        {toggleGridList ? <Grid  size={15} />: <List  size={15} />} { toggleGridList ? " View as List": " View as Grid"}</div>   
                </div>
            </div>
    {toggleGridList ?
     <MyCourses /> :
      <div className="table-responsive table-wrapper">
      <table className="table table-borderless responsive">
                                           <thead>
                                               <tr>
                                               <th scope="col">Course Code</th>
                                               <th scope="col">Course Name</th>
                                               <th scope="col">Instructor Name</th>
                                               <th scope="col">Learning Partner</th>
                                               <th scope="col">Category</th>
                                               <th scope="col">Program</th>
                                               <th scope="col">Ownership</th>
                                               <th scope="col">Start Date</th>
                                               <th scope="col">Status</th>
                                               </tr>
                                           </thead>
                                           <tbody>
                                               {CourseDataLists.map((course, i)=>(
                                                   <tr key={i}>
                                                   <td >{course.coursecode}</td>
                                                   <td><Link to="/"><strong>{course.coursename}</strong></Link></td>
                                                   <td>{course.instructorname}</td>
                                                   <td>{course.Learningpartner}</td>
                                                   <td>{course.startdate}</td>
                                                   <td>{course.startdate}</td>
                                                   <td>{course.ownership}</td>
                                                   <td>
                                                   {course.startdate}
                                                    </td>
                                                  
                                                  <td><div className=" alert alert-warning">{course.status}</div></td>
                                                  </tr> 

                                               ))}
                                               
                                               
                                           </tbody>
                                           </table>
      </div>}
   
  </Tab>
  <Tab eventKey="completedcourses" title="Completed Courses">
        <div className="toggleBtn">
            <div className="d-flex justify-content-end" >
                <div className="toggle-icon" onClick={toggle}>
                        {toggleGridList ? <Grid  size={15} />: <List  size={15} />} { toggleGridList ? " View as List": " View as Grid"}</div>   
                </div>
            </div>
            {toggleGridList ?
     <MyCourses /> :
      <div className="table-responsive table-wrapper">
      <table className="table table-borderless ">
                                           <thead>
                                               <tr>
                                               <th scope="col">Course Code</th>
                                               <th scope="col">Course Name</th>
                                               <th scope="col">Instructor Name</th>
                                               <th scope="col">Learning Partner</th>
                                               <th scope="col">Category</th>
                                               <th scope="col">Program</th>
                                               <th scope="col">Ownership</th>
                                               <th scope="col">Start Date</th>
                                               <th scope="col">Status</th>


                                               </tr>
                                           </thead>
                                           <tbody>
                                               {CourseData.map((course, i)=>(
                                                   <tr key={i}>
                                                   <td >{course.coursecode}</td>
                                                   <td><Link to='/'><strong>{course.coursename}</strong></Link></td>
                                                   <td>{course.instructorname}</td>
                                                   <td>{course.Learningpartner}</td>
                                                   <td>{course.startdate}</td>
                                                   <td>{course.startdate}</td>
                                                   <td>{course.ownership}</td>
                                                   <td>
                                                   {course.startdate}
                                                    </td>
                                                  
                                                  <td><div className=" alert alert-secondary">{course.status}</div></td>
                                                  </tr> 

                                               ))}
                                               
                                               
                                           </tbody>
                                           </table>
      </div>}
   
   </Tab>
   <Tab eventKey="wishlist" title="Wish List">
   <div className="toggleBtn">
            <div className="d-flex justify-content-end" >
                <div className="toggle-icon" onClick={toggle}>
                        {toggleGridList ? <Grid  size={15} />: <List  size={15} />} { toggleGridList ? " View as List": " View as Grid"}</div>   
                </div>
            </div>
            {toggleGridList ?
     <MyCourses /> :
      <div className="table-responsive table-wrapper">
   <table className="table table-borderless ">
                                           <thead>
                                               <tr>
                                               <th scope="col">Course Code</th>
                                               <th scope="col">Course Name</th>
                                               <th scope="col">Instructor Name</th>
                                               <th scope="col">Learning Partner</th>
                                               <th scope="col">Category</th>
                                               <th scope="col">Program</th>
                                               <th scope="col">Ownership</th>
                                               <th scope="col">Start Date</th>
                                               <th scope="col">Prize</th>


                                               </tr>
                                           </thead>
                                           <tbody>
                                               {CourseDataList.map((course, i)=>(
                                                   <tr key={i}>
                                                   <td >{course.coursecode}</td>
                                                   <td><Link to='/'><strong>{course.coursename}</strong></Link></td>
                                                   <td>{course.instructorname}</td>
                                                   <td>{course.Learningpartner}</td>
                                                   <td>{course.startdate}</td>
                                                   <td>{course.startdate}</td>
                                                   <td>{course.ownership}</td>
                                                   <td>
                                                   {course.startdate}
                                                    </td>
                                                  
                                                  <td><div className="text-success"><strong>N{course.price}</strong></div></td>
                                                  </tr> 

                                               ))}
                                               
                                               
                                           </tbody>
                                           </table>
   </div>}
   </Tab>
   <Tab eventKey="accomplishment" title="Accomplishment">
   
   </Tab>
</Tabs>
       
              </div>
          </div>
         <div>
       </div>
     <div>
   </div>
          
        </div>
    )
}

export default TabContainer
