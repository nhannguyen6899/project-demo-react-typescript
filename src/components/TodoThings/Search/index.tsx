import React from 'react';

export const SearchBar: React.FC<ISearchBar> = ({searchTask}) => {

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let keyword = event.target.value;
        if (keyword == 'undefined')
            keyword = '';
        searchTask(keyword, 999);
    }

    return (
        <input type="text" className="form-control" placeholder="Search" onChange={handleChangeInput} />
    );
};

/**
 * Interface ISearchBar
 */
 export interface ISearchBar {
    searchTask: (keyword: string, status: number) => void;
}