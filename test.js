

            let obj2 =[{

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
            ];


            let oldaoo =[
                                    {
                                        "id": 2,
                                        "attributes": {
                                            "name": "Sonali",
                                            "createdAt": "2024-08-20T10:12:16.776Z",
                                            "updatedAt": "2024-08-20T10:12:18.896Z",
                                            "publishedAt": "2024-08-20T10:12:18.894Z"
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "attributes": {
                                            "name": "Addhyan Kumar",
                                            "createdAt": "2024-08-20T10:31:19.545Z",
                                            "updatedAt": "2024-08-20T10:31:19.545Z",
                                            "publishedAt": "2024-08-20T10:31:19.542Z"
                                        }
                                    },
                                    {
                                        "id": 4,
                                        "attributes": {
                                            "name": "Abhi Kumar",
                                            "createdAt": "2024-08-20T10:33:16.225Z",
                                            "updatedAt": "2024-08-20T10:33:16.225Z",
                                            "publishedAt": "2024-08-20T10:33:16.224Z"
                                        }
                                    }
            ];
            console.log('before map fun ->', oldaoo);

           let newaoo =  oldaoo.map((cv,ind,arr)=>{
                return { id: cv.id,
                name: cv.attributes.name,
                createdAt: cv.attributes.createdAt,
                }

            });


            console.log('after map fun ->', newaoo);