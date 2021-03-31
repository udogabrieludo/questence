import React, { Component } from 'react';
import { Styles } from '../styles/courseCategory.js';

const CourseCategory= ({allCategories})=> {

 
        return (
            <Styles>
                {/* Course Tag */}
                <div className="course-category">
                    <h5>Course Category</h5>
                        <div className="form-group">                
                         <select className="form-control">
                         <option value=""  >Filter by categories</option>   
                            {allCategories.data && allCategories.data.map((category, i)=>(
                                <option value={category.name} key={i}>{category.name}</option>
                            ))}
                         </select>
                        </div>

                </div>
            </Styles>
        )
    }


export default CourseCategory
