import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';


export default function EditTeacher() {

  

    const [payload, setPayload] = useState({
        "data": {
            "name": "Gautam",
        },
    })

    const [teacherName, setTeacherName] = useState('');

   const [searchParams,setsearchParams] = useSearchParams();
   

    useEffect(()=>{
        console.log(searchParams.get("id"))
        console.log(searchParams.get("name"))
        setPayload({
            ...payload,
            data: {
                name: searchParams.get("name")
            }
        });
    },[]);


    let updateData = () => {

        fetch(`http://localhost:1337/api/techers/${searchParams.get("id")}`, {
            "method": "PUT",
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
               
                alert("Teacher Update Successfully")

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
                name: event.target.value
            }
        })


    }

    return (
        <>

        <div className='container'>
        <h1>Edit Teacher  </h1>
                <form>
                <input type='hidden' name='id' value={searchParams.get("id")} />
                    <div className="mb-3 ">
                        <label htmlFor="teachername" className="form-label">Teacher Name</label>
                        <input type="text" className="form-control" id="teachername"  name='teachername' value={payload.data.name} onChange={(e) => { changeValue(e) }} />

                    </div>

                    <button type="button" onClick={() => { updateData() }} className="btn btn-primary">Submit</button>
                </form>
                <hr />

                <Link to="/" className="btn btn-success" > Go to Home</Link>
        </div>
               




        </>
    )
}
