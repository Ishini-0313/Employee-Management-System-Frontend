import React from 'react'

export default function ListEmployee() {
    const dummyData = [
        {
            "id" : 1,
            "firstName" : "Ishini",
            "lastName":"Fernando",
            "email":"ishini@gmail.com"
        },
        {
            "id" : 2,
            "firstName" : "Channa",
            "lastName":"Perera",
            "email":"channa@gmail.com"
        },
        {
            "id" : 3,
            "firstName" : "Ishini",
            "lastName":"Fernando",
            "email":"ishini@gmail.com"
        }
    ];
    
    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Emp Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dummyData.map(employee => 
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
