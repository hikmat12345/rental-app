import React from "react";
import SearchButton from "./buttons/searchButton";
import DurationDropDown from "./dropdowns/durationDropDown";
import OutsideClickHandler from 'react-outside-click-handler'
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment'
import Calendar from 'react-calendar'
class SearchBar extends React.Component {
  state = {
    locDropdownDisplay: 0, //values will be 0,1,2,3 as there are three drop downs from location and 0 for no disp
    duration: {
      dayHrs: 0,
      overnight: {
        days: 0,
        weeks: 0,
      },
    },
    location: "",
    startCharter: null,
    endCharter: null,
    styleArray:new Array(4).fill(''),
    showStartDatePicker:false,
    dispStartDate:'Add date',
    dispEndDate:'Add date',
    showEndDatePicker:false,
    locationAutoFocus:false,
    search:false,
    searchParams:{
      dispEndDate: "11-05-2021",
      dispStartDate: "11-02-2021",
      duration:{ dayHrs: 4},
      overnight: { days: 0,
      weeks: 0},
      locDropdownDisplay: 0,
      location: "Test search",
    },
    // focusTab: 0, //0 to 4
  };
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}

  locationInputRef=React.createRef()

  //Refs for date and search button control
  // startCharterRef = React.createRef();
  // endCharterRef = React.createRef();

  toggleDropdown = () => {
    this.setState((prevState) => ({
      dropdownDisplay: !prevState.dropdownDisplay,
    }));
  };
  dropdownDisplayHandler = async (value) => {
    await this.setState({ locDropdownDisplay: value });
  };
  durationChangeHandler = (type, value) => {
    const { duration } = this.state;
    const { overnight } = duration;
    /*
        if a value of day or week is passed,i.e already there in state
        it means that value is unselected
      */

    if (type === "hrs") {
      this.setState({
        ...this.state,
        locDropdownDisplay: 0,
        // focusTab: 3,
        duration: {
          overnight: {
            days: 0, //if already selected then remove
            weeks: 0,
          },
          dayHrs: value,
        },
      });
    } else if (type === "days") {
      const { days } = overnight;
      let selectedDays = days == value ? 0 : value;
      this.setState({
        ...this.state,
        locDropdownDisplay: 0,
        // focusTab: 3,
        duration: {
          dayHrs: 0, //if hrs are already selected then remove them first
          overnight: {
            ...overnight,
            days: selectedDays,
          },
        },
      });
    } else {
      const { weeks } = overnight;
      let selectedWeeks = weeks == value ? 0 : value;
      this.setState({
        ...this.state,
        locDropdownDisplay: 0,
        // focusTab: 3,
        duration: {
          dayHrs: 0, //if hrs are already selected then remove them first
          overnight: {
            ...overnight,
            weeks: selectedWeeks,
          },
        },
      });
    }
  };
  displayDropdown = () => {
    this.setState({ dropdownDisplay: true });
  };
  hideDropdown = () => {
    this.setState({ dropdownDisplay: false });
  };
  locationChangeHandler = (value) => {
    this.setState({ location: value });
  };
  startCharterChangeHandler = (dateString) => {
    this.setState({ startCharter: dateString });
  };
  endCharterChangeHandler = (dateString) => {
    this.setState({ endCharter: dateString });
  };
  getTripLength = () => {
    let tripLength = "";
    const {
      duration: {
        dayHrs,
        overnight: { weeks, days },
      },
    } = this.state;

    if (dayHrs) tripLength = `${dayHrs} hrs`;
    else if (weeks) {
      tripLength = `${weeks} ${weeks > 1 ? "weeks" : "week"}`;
      if (days) tripLength += ` ${days} ${days > 1 ? "days" : "day"}`;
    } else if (days) tripLength = `${days} ${days > 1 ? "days" : "day"}`;

    return tripLength;
  };
  // focusTabChangeHandler = (currentTab) => {
  //   this.setState({
  //     focusTab: currentTab < 5 ? currentTab + 1 : -1,
  //   });
  // };
  // updateDateRef = () => {
  //   const { focusTab } = this.state;
  //   if (focusTab === 3 && this.startCharterRef.current)
  //     this.startCharterRef.current.focus();
  //   else if (focusTab === 4 && this.endCharterRef.current)
  //     this.endCharterRef.current.focus();
  //   else if (focusTab === 5) this.performSearch();
  // };
  performSearch = () => {
    this.setState({searchParams:this.state})
    this.setState({search:true})
  };

  onSearchBarFieldClick=async(className,index)=>{
    const styleArray=await new Array(4).fill('').map((element,ind)=>{
      return index===ind?className:element
    })
    this.setState({styleArray})
  }
// this is for fucs
  componentDidUpdate(prevState){
    if(prevState.locationAutoFocus!==this.state.locationAutoFocus){
      if(this.state.locationAutoFocus){
        this.locationInputRef.current.focus()
      }
    }
  }

  render() {
    const {
      locDropdownDisplay,
      duration: {
        dayHrs,
        overnight: { days, weeks },
      },
      location,styleArray,showEndDatePicker,showStartDatePicker,dispStartDate,dispEndDate,locationAutoFocus,search, searchParams
    } = this.state;
    return (
      <div className="searchBarContainer">
        <OutsideClickHandler 
         onOutsideClick={()=>{this.setState({styleArray:new Array(4),showStartDatePicker:false,showEndDatePicker:false,locationAutoFocus:false})}}
        >
        <form
          className='formContainer'
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
          }}
        >

          <div className={`formItem1Container f-jCenter-aCenter-fRow label hover cursor ${styleArray[0]}`}
          onClick={(e)=>{
            this.setState({locationAutoFocus:true})
            this.onSearchBarFieldClick('customClass',0)
          }}>
            <div className='formItemW f-jCenter-aCenter-fRow borderCommon'>
              <div
                className="formItem1 f-jCenter-aStart-fColumn"
                // onClick={() => this.focusTabChangeHandler(-1)} //to shift the focus to 0
              >
                <label className="h1Label">Location</label>
                <OutsideClickHandler onOutsideClick={()=>{this.setState({locationAutoFocus:false})}}>
                <input
                  ref={this.locationInputRef}
                  className='h1Lc'
                  // autoFocus={focusTab === 0}
                  placeholder="Where To Next?"
                  style={{ cursor: "text" }}
                  value={location}
                  onChange={(e) => this.locationChangeHandler(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      // this.focusTabChangeHandler(0);
                      e.target.blur();
                    }
                  }}
                />
                </OutsideClickHandler>
              </div>
            </div>
          </div>

            <div className={`formItem2Container formItemCC f-jCenter-aCenter-fRow label cursor hover ${styleArray[1]}`}
              onClick={()=>{
                if(locDropdownDisplay===0){
                  this.dropdownDisplayHandler(locDropdownDisplay === 0 ? 1 : 0)
                }
                this.onSearchBarFieldClick('customClass',1)
              }}
            >
              <div className='formItemW f-jCenter-aCenter-fRow borderCommon'>
                <div
                  className="formItem2 f-jCenter-aStart-fColumn"
                  style={{ position: "relative" }}
                  // onClick={() => {
                  //   if (focusTab !== 2) this.focusTabChangeHandler(1);
                  // }}
                >
                  <label className="h1Label">Duration</label>
                  <li
                    style={{ margin: "0px", color: "#BDBDBD", cursor: "pointer" }}
                    // onClick={() =>
                    //   this.dropdownDisplayHandler(locDropdownDisplay === 0 ? 1 : 0)
                    // }
                  >
                    {this.getTripLength() || "Trip Length"}
                  </li>
                  <DurationDropDown
                    locDropdownDisplay={locDropdownDisplay}
                    dropdownDisplayHandler={this.dropdownDisplayHandler}
                    durationChangeHandler={this.durationChangeHandler}
                    // focusTabChangeHandler={this.focusTabChangeHandler}
                    hrs={dayHrs}
                    days={days}
                    weeks={weeks}
                    // focusTab={focusTab}
                  />
                </div>
              </div>
            </div>
            
            <div id='parent' className={`formItem3Container formItemCC f-jCenter-aCenter-fRow label cursor hover startDate ${styleArray[2]}`}
             onClick={(e)=>{
                this.onSearchBarFieldClick('customClass',2)
                this.setState({showStartDatePicker:true})
             }}
            >
              <div className='formItemW f-jCenter-aCenter-fRow borderCommon'>
                <div
                  className="formItem3 f-jCenter-aStart-fColumn"
                  style={{ position: "relative" }}
                >
                  <label className="h1Label">Start Charter</label>
                  <li
                    style={{ margin: "0px", color: "#BDBDBD", cursor: "pointer" }}
                  >
                    {dispStartDate}
                  </li>
                  <div className='datepicker'>
                  {showStartDatePicker?
                  <OutsideClickHandler onOutsideClick={()=>{
                    this.setState({showStartDatePicker:false})
                  }}>
                    <Calendar
                      onChange={(value)=>{
                        const dispStartDate=moment(value).format('MM-DD-YYYY')
                        this.setState({showStartDatePicker:false,dispStartDate})
                      }}
                    />
                  </OutsideClickHandler>:null}
                  </div>
                </div>
              </div>
            </div>

          <div className={`formItem4Container f-jCenter-aCenter-fRow label cursor hover endDate ${styleArray[3]}`}
          onClick={()=>{
            this.onSearchBarFieldClick('customClass',3)
            this.setState({showEndDatePicker:true})
          }}>

            <div
              className="formItem4aContainer formItemCC f-jCenter-aCenter-fRow"
              // onClick={() => {
                //because click on date in date picker would also set
                //the focus again to its own tab
                // if (focusTab !== 4) this.focusTabChangeHandler(3);
              // }}
            >
              <div className='formItemW f-jCenter-aCenter-fRow'>
                <div className="formItem4a f-jCenter-aStart-fColumn"
                 style={{ position: "relative" }}
                >
                <label className="h1Label">End Charter</label>
                  <li
                    style={{ margin: "0px", color: "#BDBDBD", cursor: "pointer" }}
                  >
                    {dispEndDate}
                  </li>
                  <div className='datepicker'>
                  {showEndDatePicker?
                    <OutsideClickHandler onOutsideClick={()=>{
                      this.setState({showEndDatePicker:false})
                    }}>
                      <Calendar
                        onChange={(value)=>{
                          const dispEndDate=moment(value).format('MM-DD-YYYY')
                          this.setState({showEndDatePicker:false,dispEndDate})
                        }}
                      />
                    </OutsideClickHandler>:null
                  }
                  </div>
                </div>
              </div>
            </div>

            <div className='formItem4bContainer f-jCenter-aCenter-fRow'>
              <div className='formItemW f-jCenter-aCenter-fRow'>
                <div className='formItem4b f-jCenter-aStart-fColumn'>
                  <SearchButton onClick={this.performSearch} />
                </div>
              </div>
            </div>

          </div>
          {search && <Redirect  to={{
            pathname: '/search',
            state: { searchParams }
        }} />}
        
        </form>
        </OutsideClickHandler>
      </div>
    );
  }
}
export default SearchBar;
