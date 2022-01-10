import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import "./IngredientsSearchBar.css"

function IngredientsSearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [IngEntered, setIngEntered] = useState([]);

    const handleFilter = (event) => {

        const searchIng = event.target.value
        setIngEntered(searchIng)

        const newFilter = data.filter((value) => {
            return value[0].Iname.toLowerCase().startsWith(searchIng.toLowerCase())
        });
        if (searchIng === "") {
            setFilteredData([]);
        }
        else {
            setFilteredData(newFilter);
        }
    };
    const clearInput = () => {
        setFilteredData([]);
        setIngEntered("");
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={IngEntered}
                    onChange={handleFilter} />

                {filteredData.length === 0 ? (
                    <SearchIcon />
                ) :
                    (<CloseIcon
                        id='clearBtn'
                        onClick={clearInput} />)
                }
            </div>

            {filteredData.length != 0 && (
                <div className='dataResult'>
                    {filteredData.map((value, key) => {
                        return (
                            <div className="dataItem">
                                <p>{value[0].Iname} ligne : {value[0].id}</p>
                            </div>
                        );
                    })
                    }
                </div>
            )
            }

        </div>
    );
}

export default IngredientsSearchBar
