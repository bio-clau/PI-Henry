import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styleHome from "./home.module.css";
import { getTypes, getPoke, filterPoke } from "../../actions/actions";
import Pagination from "./pagination";
import PokeCard from "./pokeCard";
import PokeNotFound from "./pokeNotFound";
import { orderPoke } from "./functions/order";
import { sortPoke } from "./functions/sort";
import { sortOrigin } from "./functions/origin";

function Home() {
  const dispatch = useDispatch();
  const types = useSelector((store) => store.pokemonTypes);
  const pokemonFiltered = useSelector((store) => store.pokemonFiltered);
  const pokemonList = useSelector((store) => store.pokemonList);
  const loading = useSelector((store) => store.loading);
  const loadAPI = useRef(false);

  const [state, setState] = useState({
    order: "",
    show: "",
    sort: [],
    typesRender: "ALL",
    pag: 1,
    iOfFirst: 0,
    iOfLast: 12,
  });

  useEffect(() => {
    if (!loadAPI.current) {
      loadAPI.current = true;
      dispatch(getPoke());
      dispatch(getTypes());
    }
  });

  const resetAll = function () {
    setState({
      order: "NO ORDER",
      show: "ALL",
      sort: ["ALL"],
      typesRender: "ALL",
      pag: 1,
      iOfFirst: 0,
      iOfLast: 12,
    });
    dispatch(filterPoke(pokemonList));
  };

  const paginate = function (number) {
    setState({
      ...state,
      pag: number,
      iOfLast: number * 12,
      iOfFirst: number * 12 - 12,
    });
  };

  const selectOrder = function (e) {
    let auxPoke = [...pokemonFiltered];
    console.log("in selectorder");
    let list, newState;
    if (e.target.name === "show") {
      console.log("before sortOrigin");
      ({ list, newState } = sortOrigin(e.target.value, auxPoke, pokemonList));
    } else {
      ({ list, newState } = orderPoke(e, auxPoke, pokemonList));
    }
    setState({
      ...state,
      ...newState,
    });
    dispatch(filterPoke(list));
  };
  const selectType = function (value) {
    let { newAuxRender, newAuxSort, newAuxPokeFilter } = sortPoke(
      value,
      pokemonList,
      pokemonFiltered,
      state.sort,
      state.typesRender
    );
    setState({
      ...state,
      sort: newAuxSort,
      typesRender: newAuxRender,
      pag: 1,
      iOfLast: 12,
      iOfFirst: 0,
    });
    dispatch(filterPoke(newAuxPokeFilter));
  };

  return (
    <div>
      <div className={styleHome.filterMenu}>
        <div className={styleHome.filterCont}>
          <div className={styleHome.menu}>
            <p className={styleHome.title}>ORDER BY:</p>
            <select
              onChange={selectOrder}
              className={styleHome.name}
              name="order"
            >
              <option className={styleHome.opCont} defaultValue value="RESET">
                RESET
              </option>
              <option className={styleHome.opCont} value="A -> Z">
                NAME: A &#8594; Z
              </option>
              <option className={styleHome.opCont} value="Z -> A">
                NAME: Z &#8594; A
              </option>
              <option className={styleHome.opCont} value="0 -> 999">
                STRENGTH: 0 &#8594; 999
              </option>
              <option className={styleHome.opCont} value="999 -> 0">
                STRENGTH: 999 &#8594; 0
              </option>
            </select>
          </div>
          <div className={styleHome.menu}>
            <p className={styleHome.title}>SHOW:</p>
            <select
              onChange={selectOrder}
              className={styleHome.name}
              name="show"
            >
              <option className={styleHome.opCont} defaultValue value="RESET">
                RESET
              </option>
              <option className={styleHome.opCont} value="CREATED">
                CREATED
              </option>
              <option className={styleHome.opCont} value="ORIGINALS">
                ORIGINALS
              </option>
            </select>
          </div>
          <div className={styleHome.menu}>
            <p className={styleHome.title}>SORT BY:</p>
            <select
              onChange={(e) => selectType(e.target.value)}
              className={styleHome.name}
              name="sort"
            >
              <option className={styleHome.opCont} defaultValue value="RESET">
                RESET
              </option>
              {types.map((t) => (
                <option
                  key={t.id}
                  className={styleHome.opCont}
                  value={`${t.name.toUpperCase()}`}
                >
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styleHome.filterBy}>
          <div>
            <h4>ORDER: </h4>
            {state.order ? <p>{state.order}</p> : <p>NO ORDER</p>}
          </div>
          <div>
            <h4>SHOW: </h4>
            {state.show ? <p>{state.show}</p> : <p>ALL</p>}
          </div>
          <div>
            <h4>SORT BY: </h4>
            {state.typesRender ? <p>{state.typesRender}</p> : <p>ALL</p>}
          </div>
        </div>
      </div>
      <div className={styleHome.cards}>
        {loading ? (
          <h2>LOADING</h2>
        ) : pokemonFiltered?.length < 1 ? (
          <PokeNotFound resetAll={resetAll} />
        ) : (
          pokemonFiltered
            ?.slice(state.iOfFirst, state.iOfLast)
            .map((poke) => <PokeCard key={poke.id} poke={poke} />)
        )}

        {pokemonFiltered?.length < 1 ? undefined : (
          <Pagination
            pag={state.pag}
            paginate={paginate}
            totPoke={pokemonFiltered?.length}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
