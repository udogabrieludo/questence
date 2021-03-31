import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import CourseSidebar from './components/CourseSidebar';
import CourseItemGrid from './components/CourseItemsGrid';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import axios from "axios";
import { API } from '../../config';



function CourseGrid(){

    const [allCourses, setAllCourses] = useState([])
    const [search, setSearch] = useState('')
    const [filterAllCourses, setFilterAllCourses] = useState([])
    const [allCategories, setAllCategories] = useState([])
    
    const showCourses = ()=>{
        return  axios.get(`${API}/v1/courses`)
           .then((response)=>{
              if(response){
                setAllCourses(response.data)
                console.log('successful')
              }else{
               console.log()
              }
    
       })
    }

     
    const showCategories = ()=>{
        return  axios.get(`${API}/v1/categories`)
           .then((response)=>{
              if(response){
                setAllCategories(response.data)
                console.log('successful')
              }else{
               console.log()
              }
    
       })
    }

    useEffect(()=>{
        showCourses();
        showCategories();
       
    }, [])

   useEffect(()=>{
    setFilterAllCourses(allCourses && allCourses.data && allCourses.data.courses.filter((course)=> {
      
     return   course.course_name.toLowerCase().includes(search.toLowerCase())
    
    }
   
        
     ))
   }, [allCourses, search])

        return (
            <div className="main-wrapper course-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Courses" />

                <Styles>
                    {/* Course Grid */}
                    <section className="course-grid-area">
                        <Container>
                            <Row>
                                <Col lg="3" md="4" sm="5">
                                    <CourseSidebar setSearch={setSearch} search={search} allCategories={allCategories} />
                                </Col>
                                <Col lg="9" md="8" sm="7">
                                    <div className="course-items">
                                        <Row>
                                            <CourseItemGrid  allCourses={filterAllCourses}/>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    
                      
                    </section>
                </Styles>

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        )
   
}

export default CourseGrid