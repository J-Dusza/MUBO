"use client";
import Product from "@/components/Products/Product";
import { muiTheme } from "@/shared/muiTheme";
import { client } from "@/utils/sanity/sanityClient";
import { urlFor } from "@/utils/sanity/urlFor";
import { InputAdornment, TextField, ThemeProvider } from "@mui/material";
import { display } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useReducer, useState } from "react";
import { string } from "zod";
import FilterComponent from "./FilterComponent";
import ClearIcon from "@mui/icons-material/Clear";

const sortingQueries = {
  lowestPrices: "order(price)",
  highestPrices: "order(price desc)",
  latest: "order(_createdAt desc)",
};

type filterName = "sorting" | "max price" | "min price";
type filterType = {
  filterName: filterName;
  number?: number;
  query?: string;
};

type Props = {
  queryKey: Array<string>;
  query: string;
  sorting: string;
};

const Products = ({ query, queryKey, sorting: defaultSorting }: Props) => {
  const [view, setView] = useState(4);
  const [currentTab, setCurrentTab] = useState<null | string>(null);

  const [sorting, setSorting] = useState<string>(defaultSorting);
  const [minPrice, setMinPrice] = useState<null | number>(null);
  const [maxPrice, setMaxPrice] = useState<null | number>(null);
  const [filters, setFilters] = useState<Array<filterType>>([]);

  const { data, isSuccess, refetch } = useQuery({
    queryKey: filters,
    queryFn: async () => {
      return await client.fetch(
        generateQuery(query, minPrice, maxPrice, sorting)
      );
    },
  });
  const handleRadioSorting = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSorting(event.currentTarget.value);
  };
  const validateNumber = (text: string) => {
    const regex = /^[0-9]{0,8}[.,]{0,1}[0-9]{0,2}$/g;
    return regex.test(text);
  };

  const handleSubmitFilter = (deletedFilter?: filterName) => {
    let newFilters: Array<filterType> = [];
    //Set array of applied filters
    if (deletedFilter !== "sorting" && sorting !== defaultSorting)
      newFilters.push({ filterName: "sorting", query: sorting });
    if (deletedFilter !== "max price" && maxPrice !== null)
      newFilters.push({ filterName: "max price", number: maxPrice });
    if (deletedFilter !== "min price" && minPrice !== null)
      newFilters.push({ filterName: "min price", number: minPrice });

    setFilters(newFilters);
    setCurrentTab(null);
  };

  const EnterPressed = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleSubmitFilter();
    }
  };

  const deleteFilter = (filter: filterName) => {
    switch (filter) {
      case "sorting":
        setSorting(() => defaultSorting);
        break;
      case "max price":
        setMaxPrice(() => null);
        break;
      case "min price":
        setMinPrice(() => null);
        break;
      default:
        break;
    }
    handleSubmitFilter(filter);
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <div>
        {/* SETTINGS */}
        <div className="flex justify-between">
          {/* LEFT SIDE */}
          <div className="uppercase flex space-x-2 gap-3">
            <div className="flex items-center">
              <FilterComponent
                name="sort"
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                handleFilterSubmit={handleSubmitFilter}
              >
                <RadioSortingOption
                  id="lowestPrices"
                  value={sortingQueries.lowestPrices}
                  onChange={handleRadioSorting}
                  display="Lowest Prices"
                  sorting={sorting}
                />
                <RadioSortingOption
                  id="highestPrices"
                  value={sortingQueries.highestPrices}
                  onChange={handleRadioSorting}
                  display="Highest Prices"
                  sorting={sorting}
                />
                <RadioSortingOption
                  id="latest"
                  value={sortingQueries.latest}
                  onChange={handleRadioSorting}
                  display="Latest items"
                  sorting={sorting}
                />
                <RadioSortingOption
                  id="default"
                  value={defaultSorting}
                  onChange={handleRadioSorting}
                  display="Default sorting"
                  sorting={sorting}
                />
              </FilterComponent>
              <FilterComponent
                name="price"
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                handleFilterSubmit={handleSubmitFilter}
              >
                <TextField
                  label="min price"
                  value={minPrice ? minPrice : ""}
                  size="small"
                  color="primary"
                  type="number"
                  autoComplete="off"
                  className="capitalize"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <button
                          onClick={() => {
                            setMinPrice(() => null);
                          }}
                        >
                          <ClearIcon className="w-5" />
                        </button>
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => {
                    validateNumber(e.currentTarget.value) &&
                      setMinPrice(Number(e.currentTarget.value));
                  }}
                  onKeyDown={EnterPressed}
                />
                <TextField
                  label="max price"
                  value={maxPrice ? maxPrice : ""}
                  size="small"
                  color="primary"
                  autoComplete="off"
                  type="number"
                  className="capitalize"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <button
                          onClick={() => {
                            setMaxPrice(null);
                          }}
                        >
                          <ClearIcon className="w-5" />
                        </button>
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e) => {
                    validateNumber(e.currentTarget.value) &&
                      setMaxPrice(Number(e.currentTarget.value));
                  }}
                  onKeyDown={EnterPressed}
                />
              </FilterComponent>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="space-x-5 sm:px-8 flex items-end">
            {/* NUMBER OF ITEMS */}
            <span className="flex">
              <span className=" text-neutral-500 font-light">
                Number of items:
              </span>
              <span className="pl-3">{isSuccess && data.length}</span>
            </span>

            {/* VIEW */}
            <span className="hidden lg:inline px-3">
              <span className=" text-neutral-500 font-light">View:</span>
              <button
                className={`pl-2 font-light ${view === 3 && "font-semibold"}`}
                onClick={() => setView(3)}
              >
                3
              </button>
              <button
                className={`pl-2 font-light ${view === 4 && "font-semibold"}`}
                onClick={() => setView(4)}
              >
                4
              </button>
            </span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-4 w-full h-[1px] bg-zinc-200"></div>

        {/* Applied filters */}
        <div className="flex space-x-2 overflow-x-scroll py-3 px-2">
          {filters.map((filter) => (
            <div
              key={filter.filterName}
              onClick={() => deleteFilter(filter.filterName)}
              className="px-2 py-1 whitespace-nowrap bg-zinc-100 flex items-center hover:bg-zinc-200 transition-colors duration-150 cursor-pointer"
            >
              {displayFilterName(filter)} <ClearIcon className="h-5" />
            </div>
          ))}
        </div>

        {/* PRODUCTS */}
        <div
          className={`grid grid-cols-2 md:grid-cols-5 ${
            view === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }`}
        >
          {isSuccess &&
            data.map((product: any) => {
              const imageUrl1 = urlFor(product.images[0]).width(700).url();
              let imageUrl2 = imageUrl1;
              if (product.images[1])
                imageUrl2 = urlFor(product.images[1]).width(700).url();
              return (
                <Product
                  key={product._id}
                  name={product.name}
                  price={product.price}
                  imageUrl1={imageUrl1}
                  imageUrl2={imageUrl2}
                  view={view}
                />
              );
            })}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Products;

type radioSortingProps = {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  display: string;
  sorting: string | null;
};

const RadioSortingOption = (props: radioSortingProps) => {
  const isRadioChecked = (value: string) => {
    return props.sorting === value;
  };
  return (
    <div className="flex items-center space-x-4 text-sm">
      <input
        type="radio"
        id={props.id}
        value={props.value}
        name="sort"
        className="radio radio-sm"
        onChange={props.onChange}
        checked={isRadioChecked(props.value)}
      />
      <label htmlFor={props.id}>{props.display}</label>
    </div>
  );
};

function displayFilterName(filter: filterType) {
  switch (filter.filterName) {
    case "sorting":
      if (filter.query === sortingQueries.highestPrices)
        return "highest prices";
      else if (filter.query === sortingQueries.lowestPrices)
        return "lowest prices";
      else if (filter.query === sortingQueries.latest) return "latest items";
      else return "sorting";
      break;
    case "min price":
      return "from " + filter.number + " $";
      break;
    case "max price":
      return "to " + filter.number + " $";
      break;

    default:
      break;
  }
}

function generateQuery(
  defaultQuery: string,
  minPrice: number | null,
  maxPrice: number | null,
  sorting: string
) {
  let sortedQuery = defaultQuery;
  sortedQuery = defaultQuery.slice(0, defaultQuery.length - 1);
  if (minPrice) sortedQuery += `&& price >= ${minPrice} `;
  if (maxPrice) sortedQuery += `&& price <= ${maxPrice} `;
  sortedQuery += "] | " + sorting;
  return sortedQuery;
}
