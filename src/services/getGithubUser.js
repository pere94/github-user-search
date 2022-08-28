import React from "react";

const API = 'https://api.github.com/users/';

const getGithubUser = async (user, setUser) => {

    const response = await fetch(API + user, {
        method: 'GET',
        headers: {
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "'Bearer ' + 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",
            'Host': 'api.github.com'
          },
    });
    const data = await response.json();
    setUser(data);
    
    if (!!data.message && data.message == 'Not Found') {

        const response = await fetch(API + 'octocat', {
            method: 'GET',
            headers: {
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "'Bearer ' + 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",
                'Host': 'api.github.com'
              },
        });
        const data = await response.json();
        setUser(data);

    };
    return data;

};


export {getGithubUser};