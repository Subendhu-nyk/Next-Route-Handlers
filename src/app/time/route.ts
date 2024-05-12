export const dynamic='force-dynamic' 
// it will opt out from predefine chaching

export async function GET(){
    return Response.json({
        time:new Date().toLocaleTimeString(),
    })
}