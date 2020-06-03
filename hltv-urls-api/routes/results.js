const express = require('express')
const router = express.Router();
const {HLTV} = require('hltv');


const getResults = () => {

    listResult = []
    let date = new Date();
    let startDateString = date.getFullYear() + "/" + (date.getMonth()-1) + "/" + date.getDay();
    let endDateString = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay();
    
    let filter = {startDate: startDateString, endDate: endDateString};

    
    HLTV.getResults(filter).then(res => {
        for(let i = 0; i < res.length; i++){
    
            id = res[i]['id'];
            teams = `${res[i]['team1']['name']}-vs-${res[i]['team2']['name']}`;
            eventName = `${res[i]['event']['name']}`;
    
            uri = `https://www.hltv.org/matches/${id}/${teams}-${eventName}`
                .replace(/\s/g,'-').toLowerCase();
            
                listResult.push(uri);
        }

        router.get('/', (req, res, next) => {
            res.status(200).send({
                result: listResult
            });
        });
    });
}
getResults();
module.exports = router;

