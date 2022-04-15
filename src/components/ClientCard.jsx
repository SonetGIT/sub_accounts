import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Grid } from "@mui/material";
import { MdOutlineAddCircle } from "react-icons/md";
import { MdRemoveCircle } from "react-icons/md";
import "../styles.scss";

//RENDERING
export default (props) => {
  // VARS
  const [client] = useState(props.client);
  //FUNC
  return (
    <Draggable handle="div">
      <div className="client_card_div">
        <table className="client_card_tbl">
          <tr>
            <td className="td">Карточка клиента</td>
            <td onClick={() => props.closeClientCard(client.uuid)}>
              <IoIosCloseCircleOutline
                size="25px"
                style={{ color: "white", paddingTop: 2 }}
              />
            </td>
          </tr>
        </table>
        <div className="client_card_div2">
          <table className="tbl">
            <tr className="tr">Организация</tr>
            <tr className="tr_data">test</tr>
            <tr className="tr">Фамилия</tr>
            <tr className="tr_data">test</tr>
            <tr className="tr">Имя</tr>
            <tr className="tr_data">test</tr>
            <tr className="tr">Отчество</tr>
            <tr className="tr_data">test</tr>
            <tr className="tr">Контактные данные</tr>
            <tr className="tr_data">test</tr>
            <tr className="tr">Адрес</tr>
            <tr className="tr_data">test</tr>
            <tr className="tr">Банк</tr>
            <tr className="tr_data">test</tr>
            <tr className="tr">Логин</tr>
            <tr className="tr_data">test</tr>
          </table>
        </div>
        <Grid container style={{ paddingTop: "400px" }}>
          <Grid item xs={5}>
            <table className="subaccount_tbl">
              <tr>
                <td style={{ marginLeft: "50px" }}>
                  <tr className="cl_card_tbl_lbl">
                    <p className="subaccount_label_name">Ценные бумаги</p>
                  </tr>
                </td>
                <td>
                  <MdOutlineAddCircle
                    style={{
                      color: "white",
                      position: "absolute",
                      fontSize: "22px",
                    }}
                  />
                  <MdRemoveCircle
                    style={{
                      color: "white",
                      fontSize: "22px",
                      paddingLeft: "25px",
                    }}
                  />
                </td>
              </tr>
              <tr className="subaccount_tr">
                <td className="subaccount_td">Код</td>
                <td className="subaccount_td">Счет</td>
                <td className="subaccount_td">Кол-во</td>
              </tr>
              <tr className="subaccount_tr_data">
                <td className="zbds_td">MNS</td>
                <td className="zbds_td">3000002</td>
                <td className="zbds_td">25</td>
              </tr>
              <tr className="subaccount_tr_data">
                <td className="zbds_td">BNC</td>
                <td className="zbds_td">30225512</td>
                <td className="zbds_td">87</td>
              </tr>
            </table>
          </Grid>
          <Grid item xs={7} display="flex" justifyContent="flex-end">
            <table className="subaccount_tbl">
              <tr>
                <td style={{ marginLeft: "50px" }}>
                  <tr className="cl_card_tbl_lbl">
                    <p className="subaccount_label_name">Денежные средства</p>
                  </tr>
                </td>
                <td>
                  <MdOutlineAddCircle
                    style={{
                      color: "white",
                      position: "absolute",
                      fontSize: "22px",
                    }}
                  />
                  <MdRemoveCircle
                    style={{
                      color: "white",
                      fontSize: "22px",
                      paddingLeft: "25px",
                    }}
                  />
                </td>
              </tr>
              <td></td>
              <tr className="subaccount_tr">
                <td className="subaccount_td">Счет</td>
                <td className="subaccount_td">Кол-во</td>
              </tr>
              <tr className="subaccount_tr_data">
                <td className="zbds_td">3512125</td>
                <td className="zbds_td">45</td>
              </tr>
              <tr className="subaccount_tr_data">
                <td className="zbds_td">426335</td>
                <td className="zbds_td">12</td>
              </tr>
            </table>
          </Grid>
        </Grid>
      </div>
    </Draggable>
  );
};
