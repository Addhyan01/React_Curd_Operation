import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import EditTeacher from './EditTeacher';

export default function Teacher() {
    //This is hook area 

    const [teachers, setTeachers] = useState([])

    const [payload, setPayload] = useState({
        "data": {
            "name": "Gautam"
        }
    })

    const [teacherName, setTeacherName] = useState('')







    useEffect(() => {
        //what you write here will be excuted after the pageload
        fetch(`http://localhost:1337/api/techers`)
            .then((res) => {
                //This block make res json redable
                return res.json()
            })
            .then((data) => {
                console.log(data.data)
                let newaao = data.data.map((cv, ind, arr) => {
                    return {
                        id: cv.id,
                        name: cv.attributes.name,
                        createdAt: cv.attributes.createdAt,
                    }
                });
                setTeachers(newaao)
            })
            .catch(() => { });



    }, []);



    let sendData = () => {

        fetch(`http://localhost:1337/api/techers`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(payload)
        })
            // i want to covert the respone in json file
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                if (data) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Teacher Created",
                        icon: "success"
                    });
                }
                console.log(data);

            })
            .catch((err) => {
                console.log(
                    console.log(err)
                )
            })
    }

    let changeValue = (event) => {
        console.log(event.target.value);
        setTeacherName(event.target.value);
        console.log('teacher', teacherName)
        setPayload({
            ...payload,
            data: {
                name: document.querySelector('input#teachername').value
            }
        })


    }

    //Every hook is function
    //useEffect is for page Load
    // I want to call this Api after the page load
    //UseEffect is a function that is use for whenever we load the commponent if you want to call the api  


    let deleteTeacher = (e) => {

        

        let x = e.target.closest('tr')
        let dellid = e.target.closest('tr').querySelector('td:first-child').innerHTML;
        console.log(e.target.closest('tr').querySelector('td:first-child').innerHTML)

        let ans = window.confirm("Do yoy want to really Delete")
        console.log(ans)
        if (ans === true) {
            //call the Rest Api
            fetch(`http://localhost:1337/api/techers/${dellid}`, {
                "method": "DELETE",
            })
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                    x.remove();
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            console.log("not oK")
        }
    }


    return (

        <>
          
                   

         
            <div className="container">
                <form>
                   
                    <h1>Login page</h1>
                    <div className="mb-3 ">
                        <label htmlFor="teachername" className="form-label">Teacher Name</label>
                        <input type="text" className="form-control" id="teachername" name='teachername' onKeyUp={(e) => { changeValue(e) }} />

                    </div>

                    <button type="button" onClick={() => { sendData() }} className="btn btn-primary">Submit</button>
                </form>
                <br />  <br />
                <hr />
                <br />
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Action</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            teachers.map((cv, ind, arr) => {
                                return <tr key={ind}>
                                    <td>{cv.id}</td>
                                    <td>{cv.name}</td>
                                    <td>{cv.createdAt}</td>
                                    <td>
                                        {<button className='btn btn-success btn-sm' >View</button>}
                                        {<a href={`/editTeacher?id=${cv.id}&name=${cv.name}`} className='btn btn-warning btn-sm'  >Edit</a>}
                                        {<button className='btn btn-danger btn-sm' onClick={(e) => { deleteTeacher(e) }}>Delete</button>}
                                    </td>

                                </tr>
                            })
                        }

                    </tbody>
                </table>


            </div >





        </>


    )
}
