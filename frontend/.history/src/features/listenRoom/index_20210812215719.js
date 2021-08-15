import React, { useEffect, useMemo, useState } from "react";
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
import { io } from "socket.io-client";
function Index(props) {
  const dispatch = useDispatch();
  const [token, setToken] = useState(
    JSON.parse(window.localStorage.getItem("token"))
  );
  const [name, setName] = useState("");
  const [musicList, setMusicList] = useState([]);
  const [id, setId] = useState("");
  const history = useHistory();
  if (!token) {
    history.push("/login");
  }
  useEffect(() => {
    const headers = {
      Authorization: token,
    };
    if (id) {
      axios
        .get(uri + `/dashboard/${id}`, {
          headers: headers,
        })
        .then((response) => {
          setMusicList(response.data.listMusic);
          try {
            const actionRoomList = setRoomList(response.data.listRoom);
            const action = addListLink(response.data.listMusic);
            dispatch(action);
            dispatch(actionRoomList);
          } catch (err) {
            throw err;
          }
        });
    }
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
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  const socket = useMemo(() => io(uri), []);
  return (
    <div className="flex fl-start h-1">
      <LeftSide username={name} />
      <Main socket={socket} />
      <RightSide socket={socket} />
      <JoinSocial />
      <ResultSearch />
    </div>
  );
}

export default Index;
