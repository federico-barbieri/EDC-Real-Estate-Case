

/** 
* Next.js API Route Support: https://nextjs.org/api-routes/introduction
* @param req {import('next').NextApiRequest}
* @param res {import('next').NextApiRequest}
*/


export default async function handler(req, res){


    const response = await fetch(
        "https://bztddrjflrbqomxudxxk.supabase.co/rest/v1/EDC",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                apikey: process.env.ANON_KEY,
                Prefer: "return=representation",
            },
            body: JSON.stringify(req.body),
        }
    ).then((res) => res.json());
    console.log({res});
    return res.status(200).json({response})
}
