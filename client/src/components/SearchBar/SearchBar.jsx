import { getCountryByName } from "../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "../SearchBar/SearchBar.module.css";

export const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  useEffect(() => {
    dispatch(getCountryByName(name));
  }, [name]);

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        placeholder="Search a country..."
        type="search"
        onChange={handleChange}
        value={name}
      />
    </div>
  );
};
