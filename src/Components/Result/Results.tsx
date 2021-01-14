
import * as React from "react";
import { useSelector } from 'react-redux';
import { Column, SortDirection, SortIndicator, Table } from "react-virtualized";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import 'react-virtualized/styles.css';
import * as _ from 'underscore'
import { Cookies } from "react-cookie";
import { ResultPropsI } from "../../Types/ComponentTypes";
import { forminputReset } from "../../Types/FormType";
import { getCorrectLabelforColumn } from "./Helper";
import { setEntry } from "../../Reducers/actions";
//TOTAL WIDTH OF TABLE
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

//Widths used for header of table
const WIDTHS:any = {
  firstName: 0.08,
  lastName: 0.08,
  phoneNumber: 0.13,
  email: 0.04,
  developerType: 0.13,
  educationLevel: 0.13,
  relocationStatus: 0.11,
  fiveYearGoals: 0.11,
  resume: 0.11,

}
/**
 * Displays saved applications in cookies in a table that
 * you can sort by each column
 * @param props 
 */
const Results: React.FC<ResultPropsI> = (props: any) => {
  //saved information in redux
  const dispatch = useDispatch();
  const [sortDirection,setSortDirection] = useState(SortDirection.DESC)
  const [sortBy,setsortBy] = useState('lastName');
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  //saved information in cookies
  const keyNames = Object.keys(forminputReset);
  const dacookies = new Cookies(props.cookies);
  const [savedcookies, setSavedcookies] = useState(dacookies.get('FormInputs'));
  const currentredux = useSelector((state: any) => state.entries);
  /**
   * sorts list sortBy, sortDirection
   * @param param0 
   */
  const sort =({ sortBy, sortDirection }:any)=>{
    const tempList = _.sortBy(savedcookies, (item:any) => item[sortBy]);
    const sortedList = sortDirection === SortDirection.DESC ? tempList.reverse() : tempList.sort()
    //console.log("list sorted",sortedList)
    setSavedcookies(sortedList);
    setSortDirection(sortDirection);
    setsortBy(sortBy);
}

/**
 * renders Header for for each column
 * @param param0 
 */
  const headerRenderer = ({
    dataKey,
    sortBy,
    sortDirection,
  }:any)=>{
    return (
      <div>
        {getCorrectLabelforColumn(dataKey)}
        {sortBy === dataKey &&
          <SortIndicator sortDirection={sortDirection} />
        }
      </div>
    );
  }
/**
 * renders tables
 */
  const renderTable = () => {
    return (
      <Table
        width={windowDimensions.width}
        height={window.innerHeight}
        headerHeight={40}
        rowHeight={window.innerHeight*0.04}
        sort={sort}
        sortBy={sortBy}
     sortDirection={sortDirection}
        rowCount={savedcookies.length}
        rowGetter={({index}:any)=>savedcookies[index]}
      >
          {keyNames.map((key:string)=>{ 
       return (     <Column
            headerStyle={{fontSize:windowDimensions.width*0.012+'px'}}
            key ={key}
            dataKey={key}
            headerRenderer={headerRenderer}
            
            width={WIDTHS[key] * windowDimensions.width}
          />)

})}


      </Table>
    )
  } 

/**
 * This loads cookies onto redux anytime you hit the page
 */
  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if(currentredux !==undefined && savedcookies){
     if(savedcookies.length > currentredux.length){
       dispatch(setEntry([...savedcookies]));
     }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
 }, []);
  return (
    <div>
      {savedcookies && (renderTable())}

    </div>
  )
};


export default Results;