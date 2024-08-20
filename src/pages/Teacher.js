import React, { useEffect } from 'react'

export default function Teacher() {

    useEffect(()=>{
        //what you write here will be excuted after the pageload

        fetch(`http://localhost:1337/api/techers`)
        .then((res)=>{
            //This block make res json redable
           return res.Json()
        })
        .then((data)=>{
             console.log(data)
        })
        .catch(()=>{});

    },[])
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
                                    <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                                <br />  <br />
                                <hr />
                                <br />
                                <hr />
                            <table className="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">3</th>
                                            <td colSpan={2}>Larry the Bird</td>
                                            <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                </table>


            </div>



            
           
    </>


    )
}
