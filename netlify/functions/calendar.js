exports.handler = async function(event, context) {
    let calendar = [ 
        {
            name : "chantier",
            date : "jeudi prochain"
        },
        {
            name : "recolte",
            date : "mars"
        }
    ];
    return {
        statusCode: 200,
        body: JSON.stringify(calendar)
    };
}
