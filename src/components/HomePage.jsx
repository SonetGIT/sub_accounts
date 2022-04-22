import React, { useState } from "react";
import { AppBar } from "@mui/material";
import { Typography } from "@mui/material";
import { IoExit } from "react-icons/io5";

import OperationDay from "./OperationDay.jsx";
import OnlineTime from "./OnlineTime.jsx";
import SubAccountsList from "./SubAccountsList.jsx";
import ClientCard from "./ClientCard.jsx";
import Securities from "./Securities.jsx";
import MenuDrawer from "./MenuDrawer.jsx";

import "../styles.scss";
import { v4 as uuidv4 } from "uuid";

export default function HomePage(props) {
  const [token] = useState(props.token);
  const [kseRESTApi] = useState(props.kseRESTApi);
  const [userProfile, setUserProfile] = useState(props.userProfile);
  const [clientCards, setClientCards] = useState([]);
  const [openSecurities, setOpenSecurities] = useState(false);

  /***FUNC*************************************************************************/

  function getUUID() {
    return uuidv4();
  }
  //Sign Out - Выход из системы
  function exitSystemClick() {
    localStorage.removeItem("token");
    props.setAuthenticated(false);
    props.setUserProfile({});
  }
  //Open form ClientCard
  function openClientCard(client) {
    let newC = [...clientCards];
    client.uuid = getUUID();
    newC.push(client);
    setClientCards(newC);
  }
  //Close form ClientCard
  function closeClientCard(id) {
    let newClientCards = [];
    for (let i = 0; i < clientCards.length; i++) {
      if (clientCards[i].uuid !== id) {
        newClientCards.push(clientCards[i]);
      }
    }
    setClientCards(newClientCards);
  }
  function openSecuritiesForm() {
    setOpenSecurities(!openSecurities);
  }

  /***RENDERING**********************************************************************/
  return (
    <div className="homepage_div">
      <div>
        <AppBar>
          <div>
            <table className="homepage_table">
              <tr>
                <td>
                  <MenuDrawer />
                </td>
                <td>
                  <Typography className="homepage_typography" variant="h4">
                    Система субсчетов
                  </Typography>
                </td>
                <td className="homepage_td">
                  {"Пользователь:" +
                    " " +
                    userProfile.lastName +
                    " " +
                    userProfile.firstName.substring(0, 1) +
                    "." +
                    userProfile.middleName.substring(0, 1) +
                    "."}
                  <OperationDay />
                  <OnlineTime />
                </td>
                <td className="homepage_td">
                  <IoExit size={"25"} onClick={() => exitSystemClick()} />
                </td>
              </tr>
            </table>
          </div>
        </AppBar>
      </div>
      <div className="homepage_div2">
        <SubAccountsList openClientCard={openClientCard} />
        {clientCards.map((client, index) => (
          <ClientCard
            // VARS
            token={token}
            key={client.uuid}
            client={client}
            closeClientCard={closeClientCard}
            openSecuritiesForm={openSecuritiesForm}
          />
        ))}
      </div>
      <div>
        {openSecurities === true && (
          <Securities token={token} openSecuritiesForm={openSecuritiesForm} />
        )}
      </div>
    </div>
  );
}
