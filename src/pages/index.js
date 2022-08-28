import React from 'react'
// import Head from 'next/head'
import Image from 'next/image'

import { HiLocationMarker } from 'react-icons/hi';
import { BiLink } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { MdBusiness } from 'react-icons/md';

import { TextInput } from "/src/components/TextInput";

import {getGithubUser} from '/src/services/getGithubUser';

export default function Home() {
    const [user, setUser] = React.useState({});
    const [valueSearch, setValueSearch] = React.useState('octocat');
    
    React.useEffect(() => {
      getGithubUser(valueSearch, setUser);
    }, []);
    
    const saveInputSearch = (event) => {
      setValueSearch(event.target.value == "" ? 'octocat' : event.target.value)
    };

    const handleInputSearch = (event) => {
      if(event.key === 'Enter'){
        getGithubUser(valueSearch, setUser);
      }
    };


  return (
    <main className="w-full h-full flex justify-center items-center">

      <section className="w-5/6 max-w-[1100px] min-w-[320px] h-5/6 min-h-[500px] bg-white dark:bg-gray-900 rounded-3xl p-5 flex flex-col items-center
        shadow-simpleSh shadow-primary-300
        sm:w-full sm:px-1">

        <TextInput 
          className="w-5/6 flex justify-center pl-5"
          textLabel="Insert Github user"
          saveInputSearch={saveInputSearch}
          handleInputSearch={handleInputSearch}
        />

        <div className="flex lg:flex-col justify-center items-center w-full h-full gap-5">

          <div className="block lg:w-36 lg:h-36 mt-5">
            <Image 
              width={300}
              height={300}
              // layout='responsive'
              src={user.avatar_url ? user.avatar_url : 'https://avatars.githubusercontent.com/u/583231?v=4'} 
              alt="Avatar image" 
              className="object-cover object-center rounded-full"
            />
          </div>

          <div className="flex flex-col w-3/4 h-full p-5 pb-0
            lg:h-60 lg:overflow-y-scroll lg:w-11/12
            sm:w-full sm:p-1 sm:px-1">
            <div className="flex justify-between
              sm:flex-col">
              <div className="flex flex-col">
                <h2 className="text-3xl font-bold">{user?.name}</h2>
                <span>@{user?.login}</span>
              </div>
              <span className="sm:text-right">{user?.created_at}</span>
            </div>
            <p className="text-lg font-bold mt-4">{user?.bio ? user?.bio : '"Bio dont exist"'}</p>
            <div className="flex px-3 justify-center items-center mt-3 h-24 min-h-[96px] w-full shadow-simpleSh rounded-2xl
              sm:flex-col sm:min-h-[200px]">
              <span className="w-1/3 h-full flex items-center justify-center text-center text-xl
                sm:w-full sm:py-5">Repos {user?.public_repos}</span>
              <hr className=" rotate-90 w-1/5 border-2
                sm:rotate-0 sm:w-4/5 "/>
              <span className="w-1/3 h-full flex items-center justify-center text-center text-xl
                sm:w-full sm:py-5">Followers {user?.followers}</span>
              <hr className="rotate-90 w-1/5 border-2
                sm:rotate-0 sm:w-4/5 "/>
              <span className="w-1/3 h-full flex items-center justify-center text-center text-xl
                sm:w-full sm:py-5">Following {user?.following}</span>
            </div>
            <div className="flex justify-evenly items-center w-full h-full 
              lg:mt-5
              sm:flex-col">
              <div className="flex flex-col justify-center items-start w-4/6 pl-5
                sm:w-full sm:pl-0">
                <span className="flex text-base mb-1 
                  sm:w-full sm:pl-10">
                  <HiLocationMarker className="mr-1 w-7 h-7 text-primary-500"/>
                  {user?.location}
                </span>
                <span className="flex text-base mb-1 
                  sm:w-full sm:pl-10">
                  <BiLink className="mr-1 w-7 h-7 text-primary-500"/>
                  {user?.blog ? user?.blog : 'Does not have a personal website'}
                </span>
              </div>
              <div className="flex flex-col justify-center items-start w-2/6
                sm:w-full sm:pl-0">
                <span className="flex text-base mb-1 
                  sm:w-full sm:pl-10">
                  <AiOutlineTwitter className="mr-1 w-7 h-7 text-primary-500"/>
                  {user?.twitter_username ? user?.twitter_username : 'Does not have'}
                </span>
                <span className="flex text-base mb-1 
                  sm:w-full sm:pl-10">
                  <MdBusiness className="mr-1 w-7 h-7 text-primary-500"/>
                  {user?.company ? user?.company : 'Does not have'}
                </span>
              </div>
            </div>
          </div>                
        </div>
      </section>
      
    </main>
  );
}
