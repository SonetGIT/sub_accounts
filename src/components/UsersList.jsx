import React, { useState } from "react";
import { Grid } from "@mui/material";
import Draggable from "react-draggable";
import { IoCloseCircle } from "react-icons/io5";

import "../styles.scss";

export default function UsersList(props) {
  //VARS

  /***FUNC*************************************************************************/

  /***RENDERING**********************************************************************/
  return (
    <Draggable handle="div">
      <div>
        <Grid>
          <table className="subaccount_tbl">
            <tr>
              <td style={{ marginLeft: "50px" }}>
                <tr className="cl_card_tbl_lbl">
                  <p className="subaccount_label_name">Пользователи</p>
                </tr>
              </td>
              <td>
                <IoCloseCircle
                  className="ul_close"
                  onClick={() => props.openUsersList(false)}
                />
              </td>
            </tr>
            <tr className="subaccount_tr">
              <td className="subaccount_td">Организация</td>
              <td className="subaccount_td">Логин</td>
              <td className="subaccount_td">Фамилия</td>
              <td className="subaccount_td">Имя</td>
              <td className="subaccount_td">Доступен</td>
            </tr>
          </table>
        </Grid>
      </div>
    </Draggable>
  );
}
