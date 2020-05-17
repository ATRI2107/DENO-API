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



//File: Controllers
export const getCourses=({response} : {response:any}) =>{
    response.body=courses;
};

export const addCourses= async (
    {request, response}: {request: any; response: any}) =>{
        const body =await request.body();
        const course: Course=body.value;
        courses.push(course);
        response.body={CoursesAdded: "Success"};
        response.status= 200;
    }

//FILE: SERVER FILES
const router=new Router();
const app=new Application();
const PORT=4300;

router
    .get("/learn",getCourses)
    .post("/create",addCourses);

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port: 4300});