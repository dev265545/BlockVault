// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Contract{
    struct Case{
        string cnr;
        string docLink;
        string date;
    }


    // mapping(string => Case[])
    mapping(string => Case[]) judge;//userId to cases
    mapping(string => Case[]) lawyer;
    mapping(string => Case[]) client;
    mapping(string => bool) dict;//cnr to bool
    mapping(string => Case[]) history;

    //0x165D3581bb2d1B4486Ee84aaBF9aA1F84d7b5AFf
    
    // mapping(string => Record[]) history;

    // function getAll() external view returns(Case[] memory){
    //     return cases;
    // }

    function addJudgeCase(string calldata judge_id, string calldata cnr, string calldata _docLink, string calldata date) external{
        // require(dict[cnr] == false, "Case ID not unique");
        judge[judge_id].push(Case(cnr, _docLink, date));
        // lawyer[law_id].push(Case(cnr, _docLink, date));
        // client[cli_id].push(Case(cnr, _docLink, date));
        // history[cnr].push(Case(cnr, _docLink, date));
        dict[cnr] = true;
        // cases.push(Case(id, _docLink));
    }
    function addLawyerCase(string calldata law_id, string calldata cnr, string calldata _docLink, string calldata date) external{
        // require(dict[cnr] == false, "Case ID not unique");
        // judge[judge_id].push(Case(cnr, _docLink, date));
        lawyer[law_id].push(Case(cnr, _docLink, date));
        // client[cli_id].push(Case(cnr, _docLink, date));
        // history[cnr].push(Case(cnr, _docLink, date));
        dict[cnr] = true;
        // cases.push(Case(id, _docLink));
    }
    function addClientCase(string calldata cli_id, string calldata cnr, string calldata _docLink, string calldata date) external{
        // require(dict[cnr] == false, "Case ID not unique");
        // judge[judge_id].push(Case(cnr, _docLink, date));
        // lawyer[law_id].push(Case(cnr, _docLink, date));
        client[cli_id].push(Case(cnr, _docLink, date));
        // history[cnr].push(Case(cnr, _docLink, date));
        dict[cnr] = true;
        // cases.push(Case(id, _docLink));
    }

    function updateJudgeCase(string calldata user_id, string calldata cnr, string calldata _docLink, string calldata date) external{
        for(uint i = 0; i < judge[user_id].length; i++){
            if(keccak256(abi.encodePacked(judge[user_id][i].cnr)) == keccak256(abi.encodePacked(cnr))){
                if(history[judge[user_id][i].cnr].length == 0){
                    history[judge[user_id][i].cnr].push(judge[user_id][i]);
                }
                judge[user_id][i].docLink = _docLink;
                judge[user_id][i].date = date;
                history[judge[user_id][i].cnr].push(judge[user_id][i]);
            }
        }
    }

    function updateLawyerCase(string calldata user_id, string calldata cnr, string calldata _docLink, string calldata date) external{
        for(uint i = 0; i < lawyer[user_id].length; i++){
            if(keccak256(abi.encodePacked(judge[user_id][i].cnr)) == keccak256(abi.encodePacked(cnr))){
                lawyer[user_id][i].docLink = _docLink;
                lawyer[user_id][i].date = date;
                // history[judge[user_id][i].cnr].push(judge[user_id][i]);
            }
        }
    }

    function updateClientCase(string calldata user_id, string calldata cnr, string calldata _docLink, string calldata date) external{
        for(uint i = 0; i < client[user_id].length; i++){
            if(keccak256(abi.encodePacked(judge[user_id][i].cnr)) == keccak256(abi.encodePacked(cnr))){
                client[user_id][i].docLink = _docLink;
                client[user_id][i].date = date;
            }
        }
    }


    function getJudgeCases(string calldata user_id) external view returns(Case[] memory){
        return judge[user_id];
    }
    function getClientCases(string calldata user_id) external view returns(Case[] memory){
        return client[user_id];
    }
    function getLawyerCases(string calldata user_id) external view returns(Case[] memory){
        return lawyer[user_id];
    }

    function getHistory(string calldata cnr) external view returns(Case[] memory){
        return history[cnr];
    }

    

    // function update(string memory id, string calldata _docLink, string calldata date) external{
    //     require(dict[string], "Case does not exist");
    //     dict[id].docLink = _docLink;
    //     history[id].push(Record(id, _docLink, date));
    // }
    
    // function getHist(string calldata id) external view returns(Record[] memory){
    //     return history[id]; 
    // }

}