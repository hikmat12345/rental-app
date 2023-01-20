import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function ({
  locDropdownDisplay,
  dropdownDisplayHandler,
  durationChangeHandler,
  hrs,
  days,
  weeks
}) {
  if (locDropdownDisplay === 1)
    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          dropdownDisplayHandler(0);
        }}
      >
        <div
          className="dropdownContainer"
          // onClick={() => focusTabChangeHandler(0)}
        >
          <li
            className="dropdownItems"
            onClick={() => {
              dropdownDisplayHandler(2);
            }}
          >
            Day Trips
          </li>
          <li
            className="dropdownItems"
            onClick={() => {
              dropdownDisplayHandler(3);
            }}
          >
            Overnight Stays
          </li>
        </div>
      </OutsideClickHandler>
    );
  else if (locDropdownDisplay === 2)
    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          dropdownDisplayHandler(0);
        }}
      >
        <div
          className="dropdownContainer dayTripsContainer"
          style={{ padding: "15px" }}
        >
          <li className="h2Li">Day Trips</li>
          <div className="dayTripsContainerWrapper">
            <div
              onClick={() => {
                durationChangeHandler("hrs", 0);
              }}
            >
              <div
                className={`customRadio ${
                  hrs === 0 ? "customRadioSelected" : ""
                }`}
              ></div>
              None
            </div>
            <div
              onClick={() => {
                durationChangeHandler("hrs", 4);
              }}
            >
              <div
                className={`customRadio ${
                  hrs === 4 ? "customRadioSelected" : ""
                }`}
              ></div>
              4 hours
            </div>
            <div
              onClick={() => {
                durationChangeHandler("hrs", 6);
              }}
            >
              <div
                className={`customRadio ${
                  hrs === 6 ? "customRadioSelected" : ""
                }`}
              ></div>
              6 hours
            </div>
            <div
              onClick={() => {
                durationChangeHandler("hrs", 8);
              }}
            >
              <div
                className={`customRadio ${
                  hrs === 8 ? "customRadioSelected" : ""
                }`}
              ></div>
              8 hours
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    );
  else if (locDropdownDisplay === 3)
    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          dropdownDisplayHandler(0);
        }}
      >
        <div
          className="dropdownContainer overnighStaysContainer"
          style={{ padding: "14px" }}
        >
          <li className="h2Li">Overnight Stays</li>
          <div>
            <div style={{ overflowWrap: "anywhere" }}>
              <li className="h4Li">Days</li>
              {[...new Array(6)].map((value, ind) => (
                <div
                  key={ind}
                  className={`${days == ind + 1 ? "selected" : ""} days`}
                  onClick={() => durationChangeHandler("days", ind + 1)}
                >
                  {ind + 1}
                </div>
              ))}
            </div>
            <div style={{ overflowWrap: "anywhere" }}>
              <li className="h4Li">Weeks</li>
              {[...new Array(4)].map((val, ind) => (
                <div
                  key={ind}
                  className={`${weeks == ind + 1 ? "selected" : ""} days`}
                  onClick={() => durationChangeHandler("weeks", ind + 1)}
                >
                  {ind + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    );

  return null;
}
