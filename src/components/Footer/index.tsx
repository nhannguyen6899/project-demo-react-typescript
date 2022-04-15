import React, { useState } from 'react';
import { FaPlus, FaSearch } from "react-icons/fa";

export const Footer: React.FC<IFooter> = ({ setShowComponentSearch, setShowComponentCreate, setShowComponentTable, isShowActionFooter, setShowActionFooter, totalTask, searchTask }) => {
    
    const [activeButtonFilterStatus, setActiveButtonFilterStatus] = useState('All');
    const [activeButtonCreateOrSearch, setActiveButtonCreateOrSearch] = useState('');

    /**
     * handle the create button click event
    */
    const handleClickButton = (status: number, btnName: string) => {
        searchTask('', status);
        setActiveButtonFilterStatus(btnName);
    };

    /**
     * handle the create button click event
    */
    const handleClickCreate = () => {
        setShowComponentCreate(true);
        setShowComponentTable(false);
        setShowComponentSearch(false);
        setShowActionFooter(false);
        setActiveButtonCreateOrSearch("Create");
    };
    
    /**
     * handle the search button click event
    */
    const handleClickSearch = () => {
        // set state is true to show component search
        setShowComponentSearch(true);
        setActiveButtonCreateOrSearch("Search");
    };

    const actionFooter = 
            <div className="row">
                <div className="col-7">
                    <button type="button" className={'btn btn-default' + (activeButtonCreateOrSearch == 'Create' ? ' active' : '')} onClick={handleClickCreate}><FaPlus /></button>
                    <button type="button" className={'btn btn-default' + (activeButtonCreateOrSearch == 'Search' ? ' active' : '')} onClick={handleClickSearch}><FaSearch /></button> |
                    {" " + totalTask + " "}  items left
                </div>
                <div className="col-5">
                    <button type="button" className={'btn btn-default' + (activeButtonFilterStatus == 'All' ? ' active' : '')} onClick={()=>handleClickButton(999, 'All')}>All</button>
                    <button type="button" className={'btn btn-default' + (activeButtonFilterStatus == 'Active' ? ' active' : '')} onClick={()=>handleClickButton(2, 'Active')}>Active</button>
                    <button type="button" className={'btn btn-default' + (activeButtonFilterStatus == 'Complete' ? ' active' : '')} onClick={()=>handleClickButton(3, 'Complete')}>Complete</button>
                </div>
            </div>;

    return (
        <footer>
            {isShowActionFooter && actionFooter}
        </footer>
    );
  };

/**
 * Interface IFooter
 */
export interface IFooter {
    setShowComponentSearch: (value: boolean) => void;
    setShowComponentCreate: (value: boolean) => void;
    setShowComponentTable: (value: boolean) => void;
    isShowActionFooter: boolean;
    setShowActionFooter: (value: boolean) => void;
    totalTask: number;
    searchTask: (keyword: string, status: number) => void;
}