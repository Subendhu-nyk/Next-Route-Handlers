import {type NextRequest } from 'next/server';
import {comments} from './data'


export async function GET(request:NextRequest){
const searchParams=request.nextUrl.searchParams
const query = searchParams.get('query')
console.log("search params>>>>>",searchParams,query)

// The above code snippet is defining an asynchronous function called GET that takes a request object of type NextRequest as a parameter.
// The function first extracts the search parameters from the nextUrl property of the request object using the searchParams property.
// Then, it retrieves the value of the 'query' parameter from the search parameters using the get method of the searchParams object.
// After that, it logs the searchParams and query values to the console for debugging purposes.


const filteredComments=query? comments.filter(comment=> comment.text.includes(query)):comments;
    return Response.json(filteredComments)
}

export async function POST(request:Request){
    const comment= await request.json()
    const newcomment={
        id:comments.length+1,
        text:comment.text,
    };
    comments.push(newcomment)
    return new Response(JSON.stringify(newcomment),{
        headers:{
            "Content-Type":"application/json",
        },
        status:201,
    })
}
