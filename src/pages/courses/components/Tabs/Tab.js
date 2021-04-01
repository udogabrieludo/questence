import React from 'react'
import { Container, Row, Col, Tab, Nav} from 'react-bootstrap';
import { Styles } from '../../styles/course.js';
import './Tab.css'
import {CourseDataList, CourseDataLists, CourseData} from './data'
import CoursePrice from '../CoursePrice.js';
import MyCourses from './MyCourses.js';


const TabContainer = () => {
    return (
        <Styles>
                {/* Course Details */}
                <section className="course-details-area">
                    <div className="container-fluid" >
                        <Row>
                       
                            <Col lg="12" md="12" sm="12">
                                <div className="course-details-top">
                                    <div className="heading">
                                     <h4> My Learning</h4>
                                     
                                    </div>
                                
                                    
                                    <div className="course-tab-list" >
                                      
                                            <Tab.Container defaultActiveKey="overview">
                                            
                                                 <Nav className="flex-column" >
                                                     <Nav.Item>
                                                            <Nav.Link eventKey="overview">All Courses</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="activecourses">Active Courses</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="upcomingcourse">Upcoming Courses</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="completedcourse">Completed Courses</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="wishlist">Wishlist</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="accomplishment">Accomplishments</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                     
                                             <Tab.Content>
                                               
                                                   <Col md="2">
                                                    
                                                     <CoursePrice filterType='Sort By:' filtername='Sort Fields' /><br /> 
                                                     <CoursePrice  filterType='Filter By:' filtername='Category'/>
                                                     <CoursePrice filtername='Program'/>
                                                     <CoursePrice  filtername='Learning Partner'/>
                                                     <CoursePrice  filtername='Ownership'/>
                                                   </Col>
                                                  
                                                  
                                                  <Tab.Pane eventKey="overview" className="overview-tab">
                                                  <MyCourses />
  
                                                  </Tab.Pane>
                                                   <Tab.Pane eventKey="activecourses" className="overview-tab">
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
                                                          <td><strong>{course.coursename}</strong></td>
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
  
                                                  
  
                                                  </Tab.Pane>
                                                  <Tab.Pane eventKey="upcomingcourse" className="curriculum-tab">
                                                      
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
                                                          <td><strong>{course.coursename}</strong></td>
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
  
                                                  </Tab.Pane>
                                                  <Tab.Pane eventKey="completedcourse" className="instructor-tab">
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
                                                      {CourseData.map((course, i)=>(
                                                          <tr key={i}>
                                                          <td >{course.coursecode}</td>
                                                          <td><strong>{course.coursename}</strong></td>
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
  
                                                     
                                                     
                                                     
                                                  </Tab.Pane>
                                                  <Tab.Pane eventKey="wishlist" className="review-tab">
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
                                                      <th scope="col">Prize</th>
  
  
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      {CourseDataList.map((course, i)=>(
                                                          <tr key={i}>
                                                          <td >{course.coursecode}</td>
                                                          <td><strong>{course.coursename}</strong></td>
                                                          <td>{course.instructorname}</td>
                                                          <td>{course.Learningpartner}</td>
                                                          <td>{course.startdate}</td>
                                                          <td>{course.startdate}</td>
                                                          <td>{course.ownership}</td>
                                                          <td>
                                                          {course.startdate}
                                                           </td>
                                                         
                                                         <td><div className="text-success">N{course.price}</div></td>
                                                         </tr> 
  
                                                      ))}
                                                      
                                                      
                                                  </tbody>
                                                  </table>
                                                  </Tab.Pane>
                                                  <Tab.Pane eventKey="accomplishment" className="review-tab">
                                                      <Row>
                                                          <Col md="12">
                                                             
                                                              
                                                          </Col>
                                                      </Row>
                                                  </Tab.Pane>
                                                    
                                            </Tab.Content>
                                        </Tab.Container>
                                               
                                    </div>
                                </div>
                            </Col>
                            
                        </Row>
                    </div>
                </section>
            </Styles>
                                  
    )
}

export default TabContainer
