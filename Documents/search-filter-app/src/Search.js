import React, { useState, useEffect } from "react";
import usersData from "./MockData";
import departmentData from "./MockSelectData";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  const [filter, setFilter] = useState("");
  const [selectFilter, setSelectFilter] = useState("");
  const [apiData, setApiData] = useState(usersData.cardData);
  const [showHide, setShowHide] = useState(false);

  // const common = (searchTextValue) => {
  //   let tempData = usersData.cardData.filter((item) => {
  //     return (
  //       item.department === selectFilter &&
  //       item.name.toLowerCase().includes(searchTextValue.toLowerCase())
  //     );
  //   });
  // };

  useEffect(() => {
    if (selectFilter !== "") {
      let selectTempData = usersData.cardData.filter((selectItem) => {
        return (
          selectItem.department === selectFilter &&
          selectItem.name.toLowerCase().includes(filter.toLowerCase())
        );
      });
      // common(filter);
      setApiData(selectTempData);
    } else {
      searchText(filter);
    }
  }, [filter, selectFilter]);

  const searchText = (searchTextValue) => {
    setFilter(searchTextValue);
    let tempData;
    if (selectFilter !== "") {
      tempData = usersData.cardData.filter((item) => {
        return (
          item.department === selectFilter &&
          item.name.toLowerCase().includes(searchTextValue.toLowerCase())
        );
      });
    } else {
      tempData = usersData.cardData.filter((item) => {
        return item.name.toLowerCase().includes(searchTextValue.toLowerCase());
      });
    }
    setApiData(tempData);
  };

  const searchSelectText = (event) => {
    setSelectFilter(event.target.value);
  };

  const showHideSection = () => {
    setShowHide(!showHide);
    if (showHide) {
      setSelectFilter("");
    }
  };

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12 mb-5">
          <div className="mb-3 col-4 mx-auto text-center">
            <div className="form-group wrapperSection">
              <div className="inputButtonSection">
                <input
                  type="text"
                  className="form-control inputTextArea"
                  value={filter}
                  placeholder="Search Employee"
                  onChange={(e) => searchText(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={showHideSection}
                >
                  <FontAwesomeIcon icon={faFilter} />
                </button>
              </div>
              {showHide ? (
                <select
                  onChange={searchSelectText.bind(this)}
                  className="form-select selectFilter"
                  aria-label="Default select example"
                >
                  <option value="" selected>
                    Select Department
                  </option>
                  {departmentData.selectData.map((selectItem, index) => (
                    <option key={selectItem.id} value={selectItem.department}>
                      {selectItem.department}
                    </option>
                  ))}
                </select>
              ) : null}
            </div>
          </div>
        </div>
        {apiData.map((user, index) => {
          return (
            <div key={user.id} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <div className="card p-0 overflow-hidden h-100 shadow">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={user.img}
                      className="cardImage"
                      alt="card_image"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title cardTextAlign">{user.name}</h5>
                      <p className="card-text cardTextAlign">
                        {user.phone}
                        <br />
                        {user.department}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Search;
