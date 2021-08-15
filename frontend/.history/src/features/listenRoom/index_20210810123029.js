import React, { useEffect, useState } from "react";
import "./listenRoom.scss";
import LeftSide from "./leftSide";
import Main from "./main";
import RightSide from "./rightSide";
import JoinSocial from "../../components/joinSocial";
import ResultSearch from "./resultSearch";
// import { musicList } from "./music";
import { useDispatch } from "react-redux";
import { getId, getTitle } from "../../components/inforYoutube";
import { addSong } from "./musicListInfoSlice";
import { addListLink, addMusicLink } from "./musicListLinkSlice";
import jwt from "jsonwebtoken";
import { serectKey } from "../../serectKey";
import { useHistory } from "react-router-dom";
import { uri } from "../../axiosClient/apiAxiosClient";
import axios from "axios";
import { setRoomList } from "./listRoomSlice";
function Index(props) {
  const dispatch = useDispatch();
  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem("token"))
  );
  const [name, setName] = useState("");
  const [musicList, setMuiscList] = useState([]);
  const [id, setId] = useState("");
  const history = useHistory();
  if (!token) {
    history.push("/login");
  }
  useEffect(() => {
    const headers = {
      Authorization: token,
    };
    const data = "";
    axios
      .get(uri + `/dashboard/${id}`, {
        headers: headers,
      })
      .then((response) => {
        setMuiscList(response.data.listMusic);
        const actionRoomList = setRoomList(response.data.listRoom);
        const action = addListLink(response.data.listMusic);
        dispatch(action);
        dispatch(actionRoomList);
      })
      .catch((error) => {
        {
          console.log(error);
        }
      });
  }, [id]);
  useEffect(() => {
    musicList.forEach(async (value) => {
      const id = getId(value);
      const res = await getTitle(id);
      const title = res.data.items[0].snippet.title;
      const img_url = `https://img.youtube.com/vi/${id}/0.jpg`;
      const action = addSong({ id, url: value, img_url, title });
      dispatch(action);
    });
  }, [musicList]);
  useEffect(() => {
    try {
      jwt.verify(token, serectKey, (error, data) => {
        if (error) throw error;
        setName(data.username);
        setId(data.id);
        history.push(`/dashboard/${data.id}`);
      });
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        history.push("/login");
      }
    }
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      jwt.verify(token, serectKey, async (error, data) => {
        console.log("xin chao");
        if (!error) {
          try {
            if (Date.now() / 1000 + 50 > data.exp) {
              const headers = {
                "Content-Type": "application/json",
                Authorization: token,
              };
              axios
                .post(uri + "/auth/refreshToken", data, {
                  headers: headers,
                })
                .then((response) => {
                  console.log("error", response);
                  window.localStorage.setItem(
                    "token",
                    JSON.stringify(response.data)
                  );
                  setToken(response.data);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          } catch (error) {
            throw error;
          }
        }
      });
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex fl-start h-1">
      <LeftSide username={name} />
      <Main />
      <RightSide />
      <JoinSocial />
      <ResultSearch />
    </div>
  );
}

export default Index;
