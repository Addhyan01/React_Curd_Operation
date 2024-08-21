import React, { useEffect, useState } from 'react'

export default function Teacher() {
    //This is hook area 

    const [teachers, setTeachers] = useState([{

        id: 1,
        name: "Anil",
        createdAt: '1234',

    },
    {
        id: 2,
        name: "Sunil",
        createdAt: '3456',
    },
    {
        id: 2,
        name: "Sunil",
        createdAt: '3456',
    },
    ])

    const [payload,setpayload] = useState({
        "data" :{
            "name" : "Gautam"
        }
    })







    useEffect(() => {
        //what you write here will be excuted after the pageload

        
            fetch(`http://localhost:1337/api/techers`,{
                "method" : "POST",
                "headers" : {
                    "Content-Type" : "application/json"
                },
                "body" : JSON.stringify(payload)
            })
            // i want to covert the respone in json file
            .then((res)=>{
                return res.json})
            .then((data)=>{
                console.log(data)
            })
            .catch((err)=>{
                console.log(
                    console.log(err)
                )
            })
        
       



        fetch(`http://localhost:1337/api/techers`)
            .then((res) => {
                //This block make res json redable
                return res.json()
            })
            .then((data) => {
                console.log(data.data)
               let newaao = data.data.map((cv,ind,arr)=>{
                    return { id: cv.id,
                    name: cv.attributes.name,
                    createdAt: cv.attributes.createdAt,
                    }
    
                });
                setTeachers(newaao)
            })
            .catch(() => { });

    }, [])
    //Every hook is function
    //useEffect is for page Load
    // I want to call this Api after the page load
    //UseEffect is a function that is use for whenever we load the commponent if you want to call the api  



    return (

        <>

            <div className="container">
                <form>
                    <h1>Login page</h1>
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="button"  className="btn btn-primary">Submit</button>
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

                        </tr>
                    </thead>
                    <tbody>
                       
                       {
                        teachers.map((cv,ind,arr)=>{
                            return <tr key={ind}>
                                <td>{cv.id}</td>
                                <td>{cv.name}</td>
                                <td>{cv.createdAt}</td>
                            </tr>
                        })
                       }

                </tbody>
            </table>


        </div >



            
           
    </>


    )
}
