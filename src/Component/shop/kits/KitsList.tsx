import React, { useState } from "react";
import {
  ArrowSvg,
  KitsGridContainer,
  KitsGrideItemSub,
  KitsGridItem,
  KitsGridItemImg,
  KitsGridItemInner,
  KitsListContainer,
  KitsListFillter,
  KitsListFillterInfo,
  KitsListFillterSection,
  KitsListFillterul,
  KitsListSort,
  KitsTabs,
  KitsTabsUl,
  SeeMoreBox,
  SeeMoreKits,
} from "../../../pages/Shop/Kits/StyleKits";
import awayKitDb from "../../../data/awayKitDb.json";
import { SeeMore, SeeMoreSection } from "../../news/tabs/all/StyleTabsAll";
import theme from "../../../assets/theme/theme";
const KitsList = () => {
  const [isFillter, setIsFillter] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const handleFillter = () => {
    setIsFillter(!isFillter);
  };
  const handleSort = () => {
    setIsSort(!isSort);
  };

  const [tabs, setTabs] = useState("");

  const handleTabClick = (tab: string) => {
    setTabs(tab);
  };
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleProductCheckboxChange = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };
  const handleRemoveOption = (option: string) => {
    setSelectedOptions((prev) => prev.filter((item) => item !== option));
  };
  const [visibleCount, setVisibleCount] = useState(12);
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };
  const ProductType = ["T-Shirts", "Socks", "Shorts"];
  const Gender = ["Mens/Unisex", "Women", "Kids"];
  const Size = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "3XL",
    "62",
    "2/3",
    "1/2",
    "3/4",
    "5/6",
    "7/8",
    "9/10",
    "11/12",
    "13/14",
    "15/16",
  ];
  const SleeveType = ["Short", "Long", "None"];

  return (
    <>
      <KitsListContainer>
        <KitsListFillterSection>
          <KitsListFillter isClick={isFillter} onClick={handleFillter}>
            FILTER
            <ArrowSvg
              isClick={isFillter}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 13L15 7.5"
                stroke="#2D2D2D"
                stroke-width="1.4"
                stroke-linecap="round"
              />
            </ArrowSvg>
          </KitsListFillter>
          <KitsListSort isClick={isSort} onClick={handleSort}>
            SORT
            <ArrowSvg
              isClick={isSort}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 13L15 7.5"
                stroke="#2D2D2D"
                stroke-width="1.4"
                stroke-linecap="round"
              />
            </ArrowSvg>
          </KitsListSort>
        </KitsListFillterSection>
        {isFillter && (
          <>
            <KitsListFillterInfo>
              <KitsTabs
                onClick={() => handleTabClick("productType")}
                isClick={tabs === "productType"}
              >
                Product Type
              </KitsTabs>
              <KitsTabs
                isClick={tabs === "gender"}
                onClick={() => handleTabClick("gender")}
              >
                Gender
              </KitsTabs>
              <KitsTabs
                isClick={tabs === "size"}
                onClick={() => handleTabClick("size")}
              >
                Size
              </KitsTabs>
              <KitsTabs
                isClick={tabs === "sleeveType"}
                onClick={() => handleTabClick("sleeveType")}
              >
                Sleeve type
              </KitsTabs>
            </KitsListFillterInfo>
            {tabs === "productType" && (
              <>
                <KitsListFillterInfo>
                  {ProductType.map((list, index) => (
                    <label className="custom-checkbox" key={index}>
                      <input
                        type="checkbox"
                        value={list}
                        checked={selectedOptions.includes(`${list}`)}
                        onChange={() => handleProductCheckboxChange(`${list}`)}
                      />
                      <span className="checkmark"></span>
                      {list}
                    </label>
                  ))}
                </KitsListFillterInfo>
                {selectedOptions.length > 0 && (
                  <KitsListFillterul>
                    <div className="ulList">
                      <KitsTabsUl>
                        {selectedOptions.map((option) => (
                          <li
                            key={option}
                            onClick={() => handleRemoveOption(option)}
                          >
                            {option} <span></span>
                          </li>
                        ))}
                      </KitsTabsUl>
                    </div>
                  </KitsListFillterul>
                )}
              </>
            )}
            {tabs === "gender" && (
              <>
                <KitsListFillterInfo>
                  {Gender.map((list, index) => (
                    <label className="custom-checkbox" key={index}>
                      <input
                        type="checkbox"
                        value={list}
                        checked={selectedOptions.includes(`${list}`)}
                        onChange={() => handleProductCheckboxChange(`${list}`)}
                      />
                      <span className="checkmark"></span>
                      {list}
                    </label>
                  ))}
                </KitsListFillterInfo>
                {selectedOptions.length > 0 && (
                  <KitsListFillterul>
                    <div className="ulList">
                      <KitsTabsUl>
                        {selectedOptions.map((option) => (
                          <li
                            key={option}
                            onClick={() => handleRemoveOption(option)}
                          >
                            {option} <span></span>
                          </li>
                        ))}
                      </KitsTabsUl>
                    </div>
                  </KitsListFillterul>
                )}
              </>
            )}
            {tabs === "size" && (
              <>
                <KitsListFillterInfo>
                  {Size.map((list, index) => (
                    <label className="custom-checkbox" key={index}>
                      <input
                        type="checkbox"
                        value={list}
                        checked={selectedOptions.includes(`${list}`)}
                        onChange={() => handleProductCheckboxChange(`${list}`)}
                      />
                      <span className="checkmark"></span>
                      {list}
                    </label>
                  ))}
                </KitsListFillterInfo>
                {selectedOptions.length > 0 && (
                  <KitsListFillterul>
                    <div className="ulList">
                      <KitsTabsUl>
                        {selectedOptions.map((option) => (
                          <li
                            key={option}
                            onClick={() => handleRemoveOption(option)}
                          >
                            {option} <span></span>
                          </li>
                        ))}
                      </KitsTabsUl>
                    </div>
                  </KitsListFillterul>
                )}
              </>
            )}
            {tabs === "sleeveType" && (
              <>
                <KitsListFillterInfo>
                  {SleeveType.map((list, index) => (
                    <label className="custom-checkbox" key={index}>
                      <input
                        type="checkbox"
                        value={list}
                        checked={selectedOptions.includes(`${list}`)}
                        onChange={() => handleProductCheckboxChange(`${list}`)}
                      />
                      <span className="checkmark"></span>
                      {list}
                    </label>
                  ))}
                </KitsListFillterInfo>
                {selectedOptions.length > 0 && (
                  <KitsListFillterul>
                    <div className="ulList">
                      <KitsTabsUl>
                        {selectedOptions.map((option) => (
                          <li
                            key={option}
                            onClick={() => handleRemoveOption(option)}
                          >
                            {option} <span></span>
                          </li>
                        ))}
                      </KitsTabsUl>
                    </div>
                  </KitsListFillterul>
                )}
              </>
            )}
          </>
        )}
      </KitsListContainer>

      <KitsGridContainer>
        {awayKitDb.awayKit
          .filter((item) => {
            // item.productType이 배열인지 확인
            if (Array.isArray(item.productType)) {
              // selectedOptions에 있는 모든 옵션이 item.productType에 포함되는지 확인
              return (
                selectedOptions.length === 0 ||
                selectedOptions.some((option) =>
                  item.productType.includes(option)
                )
              );
            }
            return selectedOptions.length === 0; // productType이 없거나 배열이 아닐 경우
          })
          .slice(0, visibleCount)
          .map((item, index) => (
            <KitsGridItem key={item.id}>
              <KitsGridItemInner>
                <KitsGridItemImg imgs={item.img} />
              </KitsGridItemInner>
              <KitsGrideItemSub className="sub">
                <p>{item.title}</p>
                <span>{item.price}</span>
              </KitsGrideItemSub>
            </KitsGridItem>
          ))}
      </KitsGridContainer>
      {visibleCount < awayKitDb.awayKit.length && (
        <SeeMoreBox>
          <SeeMoreSection>
            <SeeMoreKits
              onClick={loadMore}
              style={{ gap: "8px", padding: "12px 15px" }}
            >
              {visibleCount} / 24
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <mask maskUnits="userSpaceOnUse"></mask>
                <g mask="url(#mask0_51_125)">
                  <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" />
                </g>
              </svg>
            </SeeMoreKits>
          </SeeMoreSection>
        </SeeMoreBox>
      )}
    </>
  );
};

export default KitsList;
