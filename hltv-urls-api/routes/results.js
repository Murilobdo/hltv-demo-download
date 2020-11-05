const express = require('express')
const router = express.Router();
const {HLTV} = require('hltv');


const getResults = () => {

    listResult = [];
    let date = new Date();
    let startDateString = date.getFullYear() + "/" + (date.getMonth()-1) + "/" + date.getDay();
    let endDateString = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay();
    // let startDateString = 2018 + "/" + (date.getMonth() - 1) + "/" + date.getDay();
    // let endDateString = 2018 + "/" + date.getMonth() + "/" + date.getDay();
    
    var filter = {startDate: startDateString, endDate: endDateString};
    
    HLTV.getResults(filter).then(async res => {

        listIds = [];
        for(let i=0; i< res.length; i++){
            listIds.push(res[i]['id']);
        }
        
        listIds.forEach(async id => {
            let uri = await getMatch(id);
            console.log(uri);
            listResult.push(uri);
        });
        
        router.get('/', (req, res, next) => {
            res.status(200).send({
                result: listResult
            });
        });
    });
}

getMatch = async (AId) => {
    return new Promise((resolve, reject) => {
        HLTV.getMatch({id: AId}).then(resMatch => {
            id = resMatch['id'];
            teams = `${resMatch['team1']['name']}-vs-${resMatch['team2']['name']}`;
            eventName = `${resMatch['event']['name']}`;
            
            uri = `https://www.hltv.org/matches/${id}/${teams}-${eventName}`
                    .replace(/\s/g,'-').toLowerCase();

            resolve(uri);
        }).catch((err) =>{
            reject("Erro: " + err);
        });
    });
}

getResults();
module.exports = router;

