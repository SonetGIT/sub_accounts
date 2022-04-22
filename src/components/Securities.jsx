import React, { useState } from "react";
import Draggable from "react-draggable";
import { Button } from "@mui/material";
import TextField from "@material-ui/core/TextField";
import { IoCloseCircle } from "react-icons/io5";

export default function Securities(props) {
  return (
    <Draggable handle="div">
      <div className="secur_div">
        <table className="secur_tbl">
          <tr>
            <td>
              <tr className="secur_tr_lbl">
                <p className="secur_label_name">
                  Ценные бумаги{" "}
                  <IoCloseCircle
                    className="secur_close_btn"
                    onClick={() => props.openSecuritiesForm(true)}
                  />
                </p>
              </tr>
            </td>
          </tr>
          <tr>
            <td className="secur_td"> Код </td>
            <td className="textField">
              <TextField />
            </td>
          </tr>
          <tr>
            <td className="secur_td"> Счет </td>
            <td className="textField">
              <TextField />
            </td>
          </tr>
          <tr>
            <td className="secur_td"> Кол-во </td>
            <td className="textField">
              <TextField />
            </td>
          </tr>
          <tr style={{ border: "1px solid #54b1f8" }}>
            <td></td>
            <td>
              <Button
                variant="contained"
                // onClick={() => sendOrder()}
                style={{
                  margin: 5,
                  height: 24,
                  width: "80px",
                  fontSize: 10,
                  color: "white",
                  backgroundColor: "#097cd5",
                  border: "solid 1px #0000ff",
                  fontFamily: "Roboto",
                }}
              >
                Сохранить
              </Button>
            </td>
          </tr>
        </table>
      </div>
    </Draggable>
  );
}
