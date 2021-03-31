import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Pagination from './../../../components/Pagination';




function CourseItemGrid({allCourses}) {

        return (
            <Fragment>
                {/* Course Item */}
                {/* {JSON.stringify(allCourses)} */}

                 {/* { allCourses ? 'all courses': "no courses"} */}

                { allCourses && allCourses.map((data, i) => (
                        <Col lg="6" md="12" key={i} >
                            <div className="course-item">
                                <Link to={process.env.PUBLIC_URL + data.slug}>
                                    <div className="course-image" style={{ backgroundImage: data ? `url(${data.course_cover_image})` : '' }}>
                                        <div className="author-img d-flex">
                                            <div className="img">
                                                <img src={process.env.PUBLIC_URL + `/assets/images/${data.authorImg}`} alt="" />
                                            </div>
                                            <div className="title">
                                                <p>{data.authorName}</p>
                                                <span>{data.authorCourses}</span>
                                            </div>
                                        </div>
                                        <div className="course-price">
                                            <p> ₦{data.course_fee}</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="course-content">
                                    <h6 className="heading"><Link to={process.env.PUBLIC_URL + `/${data.slug}`}>{data.course_name}</Link></h6>
                                    <p className="desc">{data.course_description}</p>
                                    <div className="course-face d-flex justify-content-between">
                                        <div className="duration">
                                            <p><i className="las la-clock"></i>120</p>
                                        </div>
                                        <div className="rating">
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item"><i className="las la-star"></i></li>
                                                <li className="list-inline-item"><i className="las la-star"></i></li>
                                                <li className="list-inline-item"><i className="las la-star"></i></li>
                                                <li className="list-inline-item"><i className="las la-star"></i></li>
                                                <li className="list-inline-item"><i className="las la-star-half-alt"></i>
                                                </li>
                                                <li className="list-inline-item">(4.5)</li>
                                            </ul>
                                        </div>
                                        <div className="student">
                                            <p><i className="las la-chair"></i>60</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))
                }

                <Col md="12" className="text-center">
                    <Pagination />
                </Col>
              

            </Fragment>
        )
    
}

export default CourseItemGrid
