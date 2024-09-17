import React from 'react'

const Home = () => {
    const courses = ["HTML", "CSS", "BootStrap", "JS", "React JS"];
    const title = "My Home Page!"
    return (
        <div>
            <h3> {title} </h3>
            {courses.length > 0 ? (
                <>
                    <h3>Courses</h3>
                    <ul>
                        {courses.map((val, ind) => (
                            <li key={ind}> {val} </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p> No Course Found </p>
            )}
        </div>
    )
}

export default Home;
