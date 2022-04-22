import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import Draggable from "react-draggable";

import "../styles.scss";

export default function SubAccountsList(props) {
  //VARS

  /***FUNC*************************************************************************/

  /***RENDERING**********************************************************************/
  return (
    <Draggable handle="div">
      <div>
        <Grid>
          <table className="subaccount_tbl">
            <tr className="subaccount_tbl_label">
              <p className="subaccount_label_name">Список клиентов</p>
            </tr>
            <td></td>
            <tr className="subaccount_tr">
              <td className="subaccount_td">Действие</td>
              <td className="subaccount_td">Организация</td>
              <td className="subaccount_td">Фамилия</td>
              <td className="subaccount_td">Имя</td>
              <td className="subaccount_td">Отчество</td>
              <td className="subaccount_td">Контактные данные</td>
              <td className="subaccount_td">Адрес</td>
              <td className="subaccount_td">Банк</td>
              <td className="subaccount_td">Логин</td>
            </tr>
            <tr className="subaccount_tr_data">
              <td className="subaccount_td_data">
                <Button
                  variant="contained"
                  onClick={() =>
                    props.openClientCard({ id: "3w5345", name: "Client" })
                  }
                  style={{
                    margin: 2,
                    height: 24,
                    fontSize: 10,
                    color: "white",
                    backgroundColor: "#097cd5",
                    border: "solid 1px #0000ff",
                    fontFamily: "Roboto",
                  }}
                >
                  Открыть
                </Button>
              </td>
              <td className="subaccount_td_data">test</td>
              <td className="subaccount_td_data">test</td>
              <td className="subaccount_td_data">test</td>
              <td className="subaccount_td_data">test</td>
              <td className="subaccount_td_data">test</td>
              <td className="subaccount_td_data">test</td>
              <td className="subaccount_td_data">test</td>
              <td className="subaccount_td_data">test</td>
            </tr>
            <tr className="subaccount_tr_data">
              <td className="subaccount_td_data">
                <Button
                  variant="contained"
                  onClick={() =>
                    props.openClientCard({ id: "3w5345", name: "Client" })
                  }
                  style={{
                    margin: 2,
                    height: 24,
                    fontSize: 10,
                    color: "white",
                    backgroundColor: "#097cd5",
                    border: "solid 1px #0000ff",
                    fontFamily: "Roboto",
                  }}
                >
                  {" "}
                  Открыть
                </Button>
              </td>
              <td className="subaccount_td_data">test1</td>
              <td className="subaccount_td_data">test1</td>
              <td className="subaccount_td_data">test1</td>
              <td className="subaccount_td_data">test1</td>
              <td className="subaccount_td_data">test1</td>
              <td className="subaccount_td_data">test1</td>
              <td className="subaccount_td_data">test1</td>
              <td className="subaccount_td_data">test1</td>
            </tr>
          </table>
        </Grid>
      </div>
    </Draggable>
  );
}
