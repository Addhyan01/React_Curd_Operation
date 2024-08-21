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

    const [payload,setPayload] = useState({
        "data" :{
            "name" : "Gautam"
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
               let newaao = data.data.map((cv,ind,arr)=>{
                    return { id: cv.id,
                    name: cv.attributes.name,
                    createdAt: cv.attributes.createdAt,
                    }
                });
                setTeachers(newaao)
            })
            .catch(() => { });

    }, []);



    let anil = () => {

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
            
        })
        .catch((err)=>{
            console.log(
                console.log(err)
            )
        })
    }

    let sunil = (event) =>{
        console.log(event.target.value);
        setTeacherName(event.target.value);
        console.log('teacher',teacherName)
        setPayload({
            ...payload,
            data: {
                name:document.querySelector('input#teachername').value
            }
        })

    }
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
                        <label htmlFor="teachername" className="form-label">Teacher Name</label>
                        <input type="text" className="form-control" id="teachername" name='teachername'  onKeyUp={(e)=>{sunil(e)}} />
                        
                    </div>
                   
                    <button type="button" onClick={()=>{anil()}} className="btn btn-primary">Submit</button>
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
