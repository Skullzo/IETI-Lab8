import React, { useState } from "react";
import axios from "axios";

export const tasks = [
  {
    id: "1",
    isCompleted: false,
    name: "Wake me up.",
  },
  {
    id: "2",
    isCompleted: false,
    name: "Take a shower.",
  },
  {
    id: "3",
    isCompleted: false,
    name: "Make the bed.",
  }, 
  {
    id: "4",
    isCompleted: false,
    name: "Cook my breakfast.",
  },
  {
    id: "5",
    isCompleted: false,
    name: "Take me to school.",
  }, 
  {
    id: "6",
    isCompleted: false,
    name: "Go to Math class.",
  }, 
  {
    id: "7",
    isCompleted: false,
    name: "Play Soccer.",
  }, 
  {
    id: "8",
    isCompleted: false,
    name: "Take me Home.",
  }, 
  {
    id: "9",
    isCompleted: false,
    name: "Do Math homework.",
  }, 
  {
    id: "10",
    isCompleted: false,
    name: "Cook my dinner.",
  }, 
  {
    id: "11",
    isCompleted: false,
    name: "Go to sleep.",
  }, 
];

const initialData = { tasks };

const DataContext = React.createContext(initialData);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const value = { data, setData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = React.useContext(DataContext);

  return context;
};


export class ApiLookup{

  static setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
  }

  static getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  static lookup(method,endpoint,callback,data){

    const headers={
      "Content-Type":"application/json",
      "Authorization":"Bearer "+this.getCookie('taskToken'),
      "Access-Control-Allow-Origin": "http://localhost:3000"
    }

    axios({
      method:method,
      headers:headers,
      url: BASE_URL + endpoint,
      data:data
    }).then((data)=>callback(data)).catch((error)=>(console.log(error)))
  }

  static login(data){
    const callback = (response)=>{
      if(response.status===200){
        this.setCookie("taskToken",response.data.accessToken)
        window.location.pathname="/"
      }else{
        alert('error on login')
      }
    }
    this.lookup("POST","auth",callback,data)
  }
}