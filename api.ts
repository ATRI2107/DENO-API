import { Application, Router } from "https://deno.land/x/oak/mod.ts";

interface Course{
    name: string,
    price: number,
    certification: boolean
} 

let courses: Array<Course> =[ //In actual practice data won't be in an array but a database
    {
        name: "C++ Bootcamp",
        price: 2.4,
        certification: true
    },
    {
        name: "MERN Bootcamp",
        price: 2,
        certification: true
    },
    {
        name: "React Bootcamp",
        price: 2.4,
        certification: true
    },
    {
        name: "ios 13 Bootcamp",
        price: 0,
        certification: false
    }
]

const router=new Router;
