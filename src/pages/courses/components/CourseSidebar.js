import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CourseSearch from './CourseSearch';
import CoursePrice from './CoursePrice';
import PopularCourse from './PopularCourse';
import CourseTag from './CourseTag';
import CourseCategory from './CourseCategory';

function CourseSidebar({setSearch, search, allCategories}) {
  
        return (
            <div className="course-sidebar">
                <Row>
                    <Col md="12">
                        <CourseSearch setSearch={setSearch} search={search}/>
                    </Col>
                    <Col md="12">
                        <CourseCategory  allCategories={allCategories} />
                    </Col>
                    <Col md="12">
                        <CoursePrice />
                    </Col>
                    <Col md="12">
                        <PopularCourse />
                    </Col>
                    <Col md="12">
                        <CourseTag />
                    </Col>
                </Row>
            </div>
        )
   
}

export default CourseSidebar
