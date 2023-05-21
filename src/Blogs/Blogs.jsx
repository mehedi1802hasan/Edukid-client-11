import React from 'react';
import useTitle from '../hooks/useTitle';
const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
       <div className='flex flex-col justify-center bg-teal-500 align-items-center'>
                <div className='m-5' >
                    <h3 className='text-red-500'>1:What is an access token and refresh token? How do they work and where should we store them on the client-side??</h3>
                    <p >Answer:An access token is a form of authentication used in client-server communication. It is a string that represents the authorization granted to a client and has a limited lifespan. The token is typically included in the headers of API requests to validate the client's identity and permissions. It helps protect sensitive data and ensures secure communication between the client and server.</p>
                </div>
                <div className='m-5'>
                    <h3 className='text-red-500'>2:Compare SQL and NoSQL databases?
</h3>
                    <p>Answer:
SQL databases are structured and use a predefined schema, while NoSQL databases are schema-less and flexible in nature. SQL databases are based on relational models and use structured query language for data manipulation. NoSQL databases are non-relational and provide high scalability, performance, and flexible data models.</p>
                </div>
                <div className='m-5'>
                    <h3 className='text-red-500'>3:What is express js? What is Nest JS ?
                   </h3>
                    <p>Answer:Express.js is a lightweight web application framework for Node.js, offering a minimalist and flexible approach to building web APIs. It simplifies handling HTTP requests, routing, middleware, and server-side logic, making it popular for creating RESTful APIs and single-page applications.

NestJS, built with TypeScript, is a progressive and opinionated framework that sits on top of Express.js, providing a scalable and modular architecture for server-side applications. It introduces decorators, dependency injection, and modules to facilitate code organization, testability, and maintainability, making it suitable for complex enterprise applications.</p>
                </div>
                <div className='m-5'>
                    <h3 className='text-red-500'>4:What is MongoDB aggregate and how does it work ?
?</h3>
                    <p>Answer:
MongoDB's aggregate is a feature that enables advanced data analysis and transformation in collections. It uses a pipeline of stages to perform operations like filtering, grouping, sorting, and aggregating data. The stages are applied sequentially to process the data and generate the desired results.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;