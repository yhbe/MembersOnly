import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateMessageJsx from "./helper/CreateMessageJsx";
import MemberMessageJsx from "./helper/MemberMessageJsx";
import Homepage from "./routes/Homepage";

function RouterSwitch() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [token,setToken] = useState(undefined)
  const [AllMessages, setAllMessages] = useState([])
  const port = process.env.PortDATA || "http://localhost:5000";
  
  useEffect(() => {
    const fetchAllMessages = async () => {
      try{
        const response = await fetch(`${port}/message/GetAll`, {
          method: "GET"
        })
        if (response.ok){
          const data = await response.json()
          //convert JSON to regular object
          const parsedData = data.map(message => {
            message.user = JSON.parse(message.user)
            return message
          })
          setAllMessages(parsedData)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchAllMessages()
  }, [])

  const refreshPage = () => {
    const fetchAllMessages = async () => {
      try {
        const response = await fetch(`${port}/message/GetAll`, {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();
          //convert JSON to regular object
          const parsedData = data.map((message) => {
            message.user = JSON.parse(message.user);
            return message;
          });
          setAllMessages(parsedData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMessages();
  }

  let messageJSX = undefined
  if (AllMessages.length > 0){
    messageJSX = AllMessages.map((message,i) => {
      if (loggedInUser.isMember){
        return MemberMessageJsx(message, i)
      } else return CreateMessageJsx(message, i)
    }
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              loggedInUser={loggedInUser}
              setLoggedInUser={setLoggedInUser}
              setToken={setToken}
              token={token}
              port={port}
              messageJSX={messageJSX}
              refreshPage={refreshPage}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterSwitch;
