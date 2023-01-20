const INITIAL_STATE = {
  bookingInfo: {},
};

const bookingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_BOOKING_DETAIL":
      return {
        ...state,
        bookingInfo: action.payload,
      };
    case "EDIT_ADULT": {
      console.log("bookingObj states", state);
      return {
        ...state,
        bookingInfo: { ...state.bookingInfo, adults: action.payload },
      };
    }
    case "EDIT_CHILDS": {
      console.log("bookingObj states", state);
      return {
        ...state,
        bookingInfo: { ...state.bookingInfo, child: action.payload },
      };
    }

    case "EDIT_TAXES_TAF": {
      console.log("bookingObj states", state);
      return {
        ...state,
        bookingInfo: { ...state.bookingInfo, texesTAF: action.payload },
      };
    }

    case "EDIT_TAXES_AOA": {
      console.log("bookingObj states", state);
      return {
        ...state,
        bookingInfo: {
          ...state.bookingInfo,
          texesAddOnsOptional: action.payload,
        },
      };
    }
    case "EDIT_TEXT_PRICE": {
      console.log("bookingObj states", state);
      return {
        ...state,
        bookingInfo: {
          ...state.bookingInfo,
          text_price: action.payload,
        },
      };
    }
    case "EDIT_TEXT_PRICE_OAO": {
      console.log("bookingObj states", state);
      return {
        ...state,
        bookingInfo: {
          ...state.bookingInfo,
          totalTaxesAndfeeOAO: action.payload,
        },
      };
    }
    case "EDIT_TOTAL_DAYS": {
      console.log("bookingObj states", state);
      return {
        ...state,
        bookingInfo: {
          ...state.bookingInfo,
          totalDays: action.payload,
        },
      };
    }

    case "EDIT_START_DATE": {
      console.log("bookingObj states", state);
      return {
        ...state,
        bookingInfo: {
          ...state.bookingInfo,
          startDate: action.payload,
        },
      };
    }
    case "EDIT_END_DATE": {
      console.log("bookingObj states", state);
      return {
        ...state,
        bookingInfo: {
          ...state.bookingInfo,
          endDate: action.payload,
        },
      };
    }
    case "RESET_TAXES": {
      console.log("bookingObj states", state);
      return {
        ...state,
        bookingInfo: {
          ...state.bookingInfo,
          texesTAF: action.payload.initialTaxs2,
          texesAddOnsOptional: action.payload.initialAddOnsOptional,
          totalTaxesAndfeeOAO: 0,
          text_price: 0,
        },
      };
    }

    default:
      return state;
  }
};

export default bookingReducer;
