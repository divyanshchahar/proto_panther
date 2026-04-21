import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    try {
        const resBody = await request.json();


        const credentialRes = await fetch(`https://accounts.zoho.in/oauth/v2/token?client_id=${process.env.ZOHO_CRM_CLIENT_ID}&client_secret=${process.env.ZOHO_CRM_CLIENT_SECRET}&grant_type=client_credentials&scope=ZohoCRM.modules.leads.CREATE&soid=${process.env.ZOHO_CRM_SO_ID}`, {method: "POST"})

        if (credentialRes.status !== 200) return NextResponse.json({},
            {
                status: 500
            }
        )

        const credentialBody = await credentialRes.json();


        const leadRes = await fetch("https://www.zohoapis.in/crm/v8/Leads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${credentialBody.access_token}`
            },
            body: JSON.stringify({"data": [{...resBody}]})
        })

        if (leadRes.status !== 201) return NextResponse.json({},
            {
                status: 500
            }
        )

        return NextResponse.json({},
            {
                status: 200
            }
        )
            ;
    } catch {
        return NextResponse.json({},
            {
                status: 500
            }
        );
    }
}